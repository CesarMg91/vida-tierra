/**
 * Un solo comando para regenerar el kit de medios completo.
 *
 *   npm run medios
 *
 * Levanta el sitio en local, captura, graba, compone y escribe el índice.
 * Nunca toca producción: si MEDIOS_URL no es local, aborta.
 */
import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, "..", "..");
const PUERTO = process.env.MEDIOS_PUERTO ?? "3287";
const URL_BASE = process.env.MEDIOS_URL ?? `http://localhost:${PUERTO}`;
const SALIDA = process.env.MEDIOS_SALIDA ?? "D:/Proyectos/amia-medios/vida-tierra";

if (!["localhost", "127.0.0.1", "::1"].includes(new URL(URL_BASE).hostname)) {
  console.error(`MEDIOS_URL debe ser local. Recibido: ${URL_BASE}`);
  process.exit(1);
}

const env = { ...process.env, MEDIOS: "1", MEDIOS_URL: URL_BASE, MEDIOS_SALIDA: SALIDA };

async function vivo() {
  try {
    const r = await fetch(URL_BASE, { signal: AbortSignal.timeout(3000) });
    return r.ok;
  } catch {
    return false;
  }
}

const dormir = (ms) => new Promise((r) => setTimeout(r, ms));

let servidor = null;

/** Un build anterior al último commit fotografiaría un sitio que ya no existe
 *  (y las cifras del kit, que salen de public/data, no coincidirían). */
function buildViejo() {
  const id = path.join(RAIZ, ".next", "BUILD_ID");
  if (!fs.existsSync(id)) return true;
  const commit = spawnSync("git", ["log", "-1", "--format=%ct"], { cwd: RAIZ, encoding: "utf8" });
  const segundos = Number.parseInt(commit.stdout, 10);
  return Number.isFinite(segundos) && fs.statSync(id).mtimeMs < segundos * 1000;
}

async function levantar() {
  if (await vivo()) {
    console.log(`medios: reutilizo el servidor en ${URL_BASE}`);
    if (buildViejo()) {
      console.warn("medios: AVISO, ese servidor sirve un build anterior al último commit");
    }
    return;
  }
  if (buildViejo()) {
    console.log("medios: el build falta o es anterior al último commit, compilando...");
    const b = spawnSync("npm", ["run", "build"], { cwd: RAIZ, stdio: "inherit", shell: true });
    if (b.status !== 0) process.exit(b.status ?? 1);
  }
  console.log(`medios: levantando el sitio en ${URL_BASE}`);
  servidor = spawn("npx", ["next", "start", "-p", PUERTO], {
    cwd: RAIZ,
    stdio: "ignore",
    shell: true,
    detached: false,
  });
  for (let i = 0; i < 40; i++) {
    if (await vivo()) return;
    await dormir(1000);
  }
  throw new Error("el sitio no respondió a tiempo");
}

function bajar() {
  if (servidor && !servidor.killed) {
    console.log("medios: apagando el servidor");
    // En Windows hay que matar el árbol: npx lanza un hijo.
    spawnSync("taskkill", ["/pid", String(servidor.pid), "/T", "/F"], { stdio: "ignore", shell: true });
  }
}

try {
  await levantar();

  // Las incidencias son de esta corrida: el índice las presenta así.
  fs.rmSync(path.join(SALIDA, "INCIDENCIAS.log"), { force: true });

  const config = path.join(AQUI, "playwright.medios.config.ts");
  const pw = spawnSync("npx", ["playwright", "test", "--config", config], {
    cwd: RAIZ,
    stdio: "inherit",
    shell: true,
    env,
  });

  // El índice se escribe aunque alguna pieza falle: documenta lo que sí salió.
  const { escribirIndice } = await import("./indice.mjs");
  await escribirIndice(SALIDA);

  // El calendario lleva marcadores de cifras: se rellenan desde los registros.
  const plantilla = path.join(AQUI, "PUBLICACIONES.plantilla.md");
  if (fs.existsSync(plantilla)) {
    const { rellenar } = await import("./cifras.mjs");
    fs.writeFileSync(
      path.join(SALIDA, "PUBLICACIONES.md"),
      rellenar(fs.readFileSync(plantilla, "utf8")),
      "utf8",
    );
  }

  // La carpeta de trabajo de Playwright no es entregable.
  fs.rmSync(path.join(SALIDA, ".tmp"), { recursive: true, force: true });
  fs.rmSync(path.join(SALIDA, ".playwright"), { recursive: true, force: true });

  console.log(`\nmedios: entrega en ${SALIDA}`);
  process.exitCode = pw.status ?? 0;
} finally {
  bajar();
}
