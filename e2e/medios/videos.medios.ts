/**
 * Mini demos verticales del sitio público.
 *
 *   videos/crudos/  el recorrido tal cual, 393x852 webm, sin audio ni cursor
 *   videos/redes/   el mismo recorrido dentro del lienzo, MP4 1080x1920 30 fps
 *
 * El montaje es de tres capas para que el video respete las esquinas
 * redondeadas de la pantalla y la Dynamic Island quede encima:
 *   fondo (lienzo con la pantalla vacía) + video enmascarado + isla.
 */
import { test } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { VIDEOS, CANVAS, PANTALLA, TELEFONO, type Video } from "./catalogo";
import { html, htmlMascara, htmlIsla } from "./lienzo";
import { rellenar } from "./cifras.mjs";
import { SALIDA, prepararCarpetas, anotarIncidencia, yDeAncla } from "./util";

const ejecutar = promisify(execFile);

const CANVAS_CLIP = { width: CANVAS.ancho, height: CANVAS.alto };

const CRUDOS = path.join(SALIDA, "videos", "crudos");
const REDES = path.join(SALIDA, "videos", "redes");
const TMP = path.join(SALIDA, ".tmp");

const FFMPEG =
  process.env.FFMPEG ??
  "C:/Users/HUAWEI/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-9.0-full_build/bin/ffmpeg.exe";
// ffprobe vive junto a ffmpeg en cualquier instalación normal.
const FFPROBE =
  process.env.FFPROBE ?? FFMPEG.replace(/ffmpeg(\.exe)?$/i, (_, ext) => `ffprobe${ext ?? ""}`);

test.beforeAll(() => prepararCarpetas([CRUDOS, REDES, TMP]));

for (const pieza of VIDEOS) {
  test(`video ${pieza.id}`, async ({ browser }) => {
    const { crudo, inicio } = await grabar(browser, pieza);
    await montar(browser, pieza, crudo, inicio);
  });
}

/** Graba el recorrido con recordVideo: sin audio y sin cursor por defecto.
 *  Devuelve también en qué segundo del webm ya hay página: lo anterior es el
 *  lienzo en blanco de antes de la primera navegación y se recorta. */
async function grabar(browser: import("@playwright/test").Browser, pieza: Video) {
  const t0 = Date.now();
  let inicio = 0;
  const contexto = await browser.newContext({
    viewport: { width: TELEFONO.ancho, height: TELEFONO.alto },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    locale: "es-MX",
    timezoneId: "America/Mexico_City",
    baseURL: process.env.MEDIOS_URL ?? "http://localhost:3287",
    recordVideo: { dir: TMP, size: { width: TELEFONO.ancho, height: TELEFONO.alto } },
  });
  await contexto.addInitScript((v) => {
    try {
      localStorage.setItem("vt-theme", v);
    } catch {
      /* el tema por defecto ya es oscuro */
    }
  }, pieza.tema === "claro" ? "light" : "dark");

  const page = await contexto.newPage();
  for (const paso of pieza.pasos) {
    if (paso.tipo === "ir") {
      await page.goto(paso.ruta, { waitUntil: "networkidle" });
      if (!inicio) inicio = (Date.now() - t0) / 1000;
      await page.waitForTimeout(paso.espera ?? 800);
    } else if (paso.tipo === "scroll") {
      const base = paso.relativo ? await page.evaluate(() => window.scrollY) : 0;
      await desplazarSuave(page, base + paso.a, paso.ms);
    } else if (paso.tipo === "ancla") {
      await desplazarSuave(page, await yDeAncla(page, paso.selector), paso.ms);
    } else {
      await page.waitForTimeout(paso.ms);
    }
  }

  const video = page.video();
  await contexto.close(); // cierra y vuelca el webm
  const temporal = await video?.path();
  const destino = path.join(CRUDOS, `${pieza.id}.webm`);
  if (!temporal || !fs.existsSync(temporal)) {
    throw new Error(`no se grabó video para ${pieza.id}`);
  }
  fs.copyFileSync(temporal, destino);
  return { crudo: destino, inicio };
}

async function duracion(archivo: string): Promise<number> {
  const { stdout } = await ejecutar(FFPROBE, [
    "-v", "error",
    "-show_entries", "format=duration",
    "-of", "csv=p=0",
    archivo,
  ]);
  const s = Number.parseFloat(stdout.trim());
  if (!Number.isFinite(s) || s <= 0) throw new Error(`ffprobe no dio duración para ${archivo}`);
  return s;
}

/** Desplazamiento continuo: el salto seco se ve mal en video. */
async function desplazarSuave(
  page: import("@playwright/test").Page,
  hasta: number,
  ms: number,
) {
  await page.evaluate(
    ([destino, duracion]) =>
      new Promise<void>((listo) => {
        const inicio = window.scrollY;
        const t0 = performance.now();
        const paso = (t: number) => {
          const p = Math.min(1, (t - t0) / duracion);
          // Suavizado en los dos extremos.
          const e = p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2;
          window.scrollTo(0, inicio + (destino - inicio) * e);
          p < 1 ? requestAnimationFrame(paso) : listo();
        };
        requestAnimationFrame(paso);
      }),
    [hasta, ms] as const,
  );
}

/** Compone las tres capas y entrega MP4 H.264 1080x1920 a 30 fps. */
async function montar(
  browser: import("@playwright/test").Browser,
  pieza: Video,
  crudo: string,
  inicio: number,
) {
  const fondo = path.join(TMP, `fondo-${pieza.id}.png`);
  const mascara = path.join(TMP, "mascara.png");
  const isla = path.join(TMP, "isla.png");

  // Playwright Test hereda `use` de la config en browser.newPage(): sin estos
  // dos campos el lienzo se abriría como teléfono.
  const p = await browser.newPage({
    viewport: { width: CANVAS.ancho, height: CANVAS.alto },
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
  });
  try {
    await p.setContent(
      html({ titulo: rellenar(pieza.titulo), pie: pieza.pie, tema: pieza.tema, captura: null, sinIsla: true }),
      { waitUntil: "load" },
    );
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(250);
    // Sin recorte explícito el PNG puede salir 1 px corto y libx264 rechaza
    // cualquier dimensión impar.
    await p.screenshot({ path: fondo, clip: { x: 0, y: 0, ...CANVAS_CLIP } });

    await p.setViewportSize({ width: PANTALLA.ancho, height: PANTALLA.alto });
    await p.setContent(htmlMascara(), { waitUntil: "load" });
    // El recorte explícito garantiza el tamaño exacto que espera alphamerge.
    await p.screenshot({
      path: mascara,
      clip: { x: 0, y: 0, width: PANTALLA.ancho, height: PANTALLA.alto },
    });

    await p.setViewportSize({ width: CANVAS.ancho, height: CANVAS.alto });
    await p.setContent(htmlIsla(), { waitUntil: "load" });
    await p.screenshot({
      path: isla,
      omitBackground: true,
      clip: { x: 0, y: 0, ...CANVAS_CLIP },
    });
  } finally {
    await p.close();
  }

  // Un margen corto tras la primera carga para no cortar en seco.
  const desde = Math.max(0, inicio - 0.15);
  const dura = (await duracion(crudo)) - desde;

  const salida = path.join(REDES, `${pieza.id}.mp4`);
  // Los `scale` sobre fondo e isla son una red de seguridad: garantizan el
  // lienzo exacto aunque una captura salga con un píxel de diferencia.
  const filtro = [
    `[0:v]scale=${CANVAS.ancho}:${CANVAS.alto},setsar=1[bg]`,
    `[3:v]scale=${CANVAS.ancho}:${CANVAS.alto},setsar=1[is]`,
    `[1:v]scale=${PANTALLA.ancho}:${PANTALLA.alto}:flags=lanczos,setsar=1,format=rgba[v]`,
    `[2:v]format=gray[m]`,
    `[v][m]alphamerge[vm]`,
    `[bg][vm]overlay=${PANTALLA.x}:${PANTALLA.y}[con]`,
    `[con][is]overlay=0:0,format=yuv420p[out]`,
  ].join(";");

  try {
    await ejecutar(
      FFMPEG,
      [
        "-y",
        "-loop", "1", "-i", fondo,
        "-ss", desde.toFixed(3), "-i", crudo,
        // La máscara también se repite: sin -loop solo cubriría el primer cuadro.
        "-loop", "1", "-i", mascara,
        "-loop", "1", "-i", isla,
        "-filter_complex", filtro,
        "-map", "[out]",
        "-an",
        // Duración explícita: las entradas en bucle son infinitas y el fin del
        // webm no atraviesa alphamerge, así que -shortest nunca cortaba y
        // ffmpeg codificaba hasta que Playwright lo mataba (MP4 sin moov).
        "-t", dura.toFixed(3),
        "-r", "30",
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "20",
        "-pix_fmt", "yuv420p",
        "-movflags", "+faststart",
        salida,
      ],
      { maxBuffer: 64 * 1024 * 1024 },
    );
  } catch (err) {
    anotarIncidencia(`ffmpeg falló en ${pieza.id}: ${(err as Error).message.slice(0, 300)}`);
    throw err;
  }
}
