/**
 * Verifica cada DOI de SOURCES.md contra Crossref y compara el titulo registrado
 * con el titulo publicado. Detecta DOI inexistentes, titulos que no corresponden
 * al DOI y anios desalineados.
 *
 *   node scripts/validate-citations.mjs            (todo)
 *   node scripts/validate-citations.mjs --nuevos   (solo fuentes sin verificar)
 *
 * El registro de verificaciones se guarda en scripts/.citations-cache.json
 * para no repetir peticiones y poder auditar cuando se comprobo cada fuente.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SOURCES = path.join(ROOT, "SOURCES.md");
const CACHE = path.join(ROOT, "scripts", ".citations-cache.json");
// Crossref atiende mejor a quien se identifica ("polite pool"). El correo no se
// escribe aqui para no publicarlo en un repositorio abierto: se lee del entorno.
//   PowerShell:  $env:CROSSREF_MAILTO = "tu@correo"
//   bash:        export CROSSREF_MAILTO="tu@correo"
const MAILTO = process.env.CROSSREF_MAILTO ?? "";
const CONCURRENCY = 4;
const SIM_MIN = 0.72;

const soloNuevos = process.argv.includes("--nuevos");

/** Extrae `{id, doi, titulo, anio}` de cada fila `| \`SRC-...\` | ... |`. */
function parseSources() {
  const rows = [];
  for (const line of fs.readFileSync(SOURCES, "utf8").split("\n")) {
    if (!line.startsWith("| `SRC-")) continue;
    const id = line.match(/^\| `(SRC-[^`]+)`/)?.[1];
    // El DOI vive dentro de [DOI](https://doi.org/...) y puede contener parentesis.
    const doi = line.match(/doi\.org\/(10\.\d{4,9}\/.+?)\)(?=\s*\|)/)?.[1];
    const titulo = line.match(/[“"]([^”"]+)[”"]/)?.[1];
    const anio = line.match(/\((\d{4})/)?.[1];
    if (id && doi) rows.push({ id, doi, titulo, anio: anio ? Number(anio) : null });
  }
  return rows;
}

function normalizar(s) {
  return (s ?? "")
    .replace(/<[^>]+>/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Similitud por bolsa de palabras: robusta ante subtitulos y puntuacion. */
function similitud(a, b) {
  const A = new Set(normalizar(a).split(" ").filter(Boolean));
  const B = new Set(normalizar(b).split(" ").filter(Boolean));
  if (!A.size || !B.size) return 0;
  let comunes = 0;
  for (const w of A) if (B.has(w)) comunes++;
  // Se compara contra el titulo mas corto: un subtitulo extra no penaliza.
  return comunes / Math.min(A.size, B.size);
}

const dormir = (ms) => new Promise((r) => setTimeout(r, ms));

async function crossref(doi, intentos = 4) {
  // Los DOI antiguos de GSA/Paleobiology llevan `<` y `>` escapados en el
  // enlace; la API de Crossref solo los acepta sin escapar.
  let limpio = doi;
  try {
    limpio = decodeURIComponent(doi);
  } catch {}
  const url = "https://api.crossref.org/works/" + encodeURI(limpio);
  let res;
  for (let i = 0; i < intentos; i++) {
    const agente = MAILTO ? `vida-tierra/1.0 (mailto:${MAILTO})` : "vida-tierra/1.0";
    res = await fetch(url, { headers: { "User-Agent": agente } });
    // Crossref limita por rafagas: se reintenta con espera creciente.
    if (res.status !== 429 && res.status < 500) break;
    await dormir(1500 * 2 ** i);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const m = (await res.json()).message;
  return {
    titulo: (m.title ?? [""])[0],
    revista: (m["container-title"] ?? [""])[0],
    anio: m.issued?.["date-parts"]?.[0]?.[0] ?? null,
  };
}

async function mapLimit(items, limite, fn) {
  const salida = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: Math.min(limite, items.length) }, async () => {
      while (i < items.length) {
        const idx = i++;
        salida[idx] = await fn(items[idx], idx);
      }
    })
  );
  return salida;
}

const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, "utf8")) : {};
const todas = parseSources();
const aVerificar = soloNuevos ? todas.filter((r) => !cache[r.doi]) : todas;

console.log(`SOURCES.md: ${todas.length} fuentes con DOI. A verificar ahora: ${aVerificar.length}.`);

let hechas = 0;
const resultados = await mapLimit(aVerificar, CONCURRENCY, async (row) => {
  try {
    const meta = await crossref(row.doi);
    cache[row.doi] = { ...meta, verificado: new Date().toISOString().slice(0, 10) };
    return { ...row, meta };
  } catch (err) {
    return { ...row, error: String(err.message) };
  } finally {
    if (++hechas % 50 === 0) console.log(`  ...${hechas}/${aVerificar.length}`);
  }
});

fs.writeFileSync(CACHE, JSON.stringify(cache, null, 2) + "\n");

const sinResolver = [];
const tituloMal = [];
const anioMal = [];

for (const r of resultados) {
  // Los DOI de datasets (DataCite) y los libros antiguos no estan en Crossref.
  if (r.error) {
    sinResolver.push(r);
    continue;
  }
  if (r.titulo && r.meta.titulo && similitud(r.titulo, r.meta.titulo) < SIM_MIN) tituloMal.push(r);
  if (r.anio && r.meta.anio && Math.abs(r.anio - r.meta.anio) > 1) anioMal.push(r);
}

const linea = "-".repeat(64);
console.log(`\n${linea}\nDOI que no resuelven en Crossref: ${sinResolver.length}`);
for (const r of sinResolver) console.log(`  ${r.id}  ${r.doi}  (${r.error})`);

console.log(`\nTitulos que no corresponden al DOI: ${tituloMal.length}`);
for (const r of tituloMal) {
  console.log(`\n  ${r.id}  ${r.doi}`);
  console.log(`    registrado: ${r.titulo}`);
  console.log(`    publicado : ${r.meta.titulo}  [${r.meta.revista} ${r.meta.anio}]`);
}

console.log(`\nAnios desalineados: ${anioMal.length}`);
for (const r of anioMal) console.log(`  ${r.id} ${r.doi}: registrado=${r.anio} publicado=${r.meta.anio}`);

// Un DOI no resuelto puede ser legitimo (DataCite, e-rara); un titulo que no
// corresponde a su DOI nunca lo es.
if (tituloMal.length > 0) {
  console.error(`\nVALIDACION FALLIDA: ${tituloMal.length} fuente(s) con titulo que no corresponde a su DOI.`);
  process.exit(1);
}
console.log("\nVALIDACION DE CITAS COMPLETA.");
