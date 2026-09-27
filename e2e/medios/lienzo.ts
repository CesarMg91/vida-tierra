/**
 * Lienzo 1080x1920 para redes: fondo de marca, marco de iPhone con Dynamic
 * Island, título corto arriba y lockup del proyecto abajo.
 *
 * Se construye como HTML/CSS y se fotografía con Playwright, igual que el
 * marco se dibuja y no se pega como imagen.
 */
import fs from "node:fs";
import path from "node:path";
import { CANVAS, PANTALLA, type Tema } from "./catalogo";

const RAIZ = path.resolve(import.meta.dirname, "..", "..");

/**
 * Las páginas creadas con setContent no pueden cargar `file://`: el navegador
 * lo bloquea por origen. Todo (logo, fuentes, captura) va incrustado en base64.
 */
const cache = new Map<string, string>();

function datos(rel: string, mime: string): string {
  const esAsset = !path.isAbsolute(rel); // logo y fuentes: se repiten en cada pieza
  const clave = `${mime}:${rel}`;
  if (esAsset) {
    const previo = cache.get(clave);
    if (previo) return previo;
  }
  const abs = esAsset ? path.join(RAIZ, rel) : rel;
  const uri = `data:${mime};base64,${fs.readFileSync(abs).toString("base64")}`;
  // Las capturas pesan megas y no se repiten: no se guardan en memoria.
  if (esAsset) cache.set(clave, uri);
  return uri;
}

/** Los lockups van en SVG: los PNG de 1520 px son opacos y en tema claro su
 *  fondo (#F2EADB) no coincide con el del lienzo, así que se veía un recuadro. */
const svg = (rel: string) => datos(rel, "image/svg+xml");

/** Paleta de `assets/marca/README.md`. */
const PALETA = {
  oscuro: {
    fondo: "#0B0D0E",
    fondo2: "#141718",
    texto: "#F2EADB",
    tenue: "#B8AE9F",
    acento: "#B88949",
    marco: "#1a1d1d",
    borde: "rgba(222,194,145,0.22)",
    logo: svg("public/brand/logo-lockup-dark.svg"),
  },
  claro: {
    fondo: "#EEE8DC",
    fondo2: "#F8F4EB",
    texto: "#211F1A",
    tenue: "#686157",
    acento: "#8E5C28",
    marco: "#211F1A",
    borde: "rgba(75,61,43,0.22)",
    logo: svg("public/brand/logo-lockup-light.svg"),
  },
} as const;

const FUENTES = `
@font-face{font-family:'Serif4';src:url('${datos("node_modules/@fontsource/source-serif-4/files/source-serif-4-latin-600-normal.woff2", "font/woff2")}') format('woff2');font-weight:600;font-display:block}
@font-face{font-family:'Plex';src:url('${datos("node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2", "font/woff2")}') format('woff2');font-weight:400;font-display:block}
`;

export interface OpcionesLienzo {
  titulo: string;
  tema: Tema;
  /** Ruta absoluta del PNG de la captura, o null para dejar el hueco (videos). */
  captura: string | null;
  /** Pie opcional bajo el título. */
  pie?: string;
  /** En video la isla se superpone después, sobre el cuadro ya compuesto. */
  sinIsla?: boolean;
}

/** Máscara de alfa para ffmpeg: blanco donde se ve el video, negro fuera.
 *  Reproduce el mismo radio de esquina que `.pantalla`.
 *
 *  Todas las plantillas llevan meta viewport: si la página se abre con
 *  emulación móvil y sin él, Chromium maqueta a 980 px y encoge el
 *  contenido. En la máscara de 620 px eso dejaba el video recortado. */
export function htmlMascara(): string {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
*{margin:0;padding:0}
body{width:${PANTALLA.ancho}px;height:${PANTALLA.alto}px;background:#000;overflow:hidden}
.m{width:100%;height:100%;border-radius:48px;background:#fff}
</style></head><body><div class="m"></div></body></html>`;
}

/** Capa transparente del tamaño del lienzo con solo la Dynamic Island. */
export function htmlIsla(): string {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
*{margin:0;padding:0}
body{width:${CANVAS.ancho}px;height:${CANVAS.alto}px;background:transparent;overflow:hidden}
.isla{position:absolute;left:${PANTALLA.x + PANTALLA.ancho / 2 - 54}px;top:${PANTALLA.y + 14}px;
  width:108px;height:32px;border-radius:18px;background:#000}
</style></head><body><div class="isla"></div></body></html>`;
}

export function html({ titulo, tema, captura, pie, sinIsla }: OpcionesLienzo): string {
  const c = PALETA[tema];
  const lineas = titulo.split("\n");

  // El contenido de la pantalla: la captura, o nada si ffmpeg la superpondrá.
  const contenido = captura
    ? `<img class="tiro" src="${datos(captura, "image/png")}" alt="">`
    : `<div class="hueco"></div>`;

  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${FUENTES}
*{margin:0;padding:0;box-sizing:border-box}
body{width:${CANVAS.ancho}px;height:${CANVAS.alto}px;overflow:hidden;
  background:
    radial-gradient(120% 70% at 50% -10%, ${c.fondo2} 0%, ${c.fondo} 62%),
    ${c.fondo};
  color:${c.texto};font-family:'Plex',system-ui,sans-serif;position:relative}

/* Trama sutil de estratos: evoca los arcos de la marca sin competir. */
.estratos{position:absolute;inset:0;opacity:.55;
  background:repeating-linear-gradient(180deg, transparent 0 118px, ${c.borde} 118px 119px)}
.halo{position:absolute;left:50%;top:-240px;width:1180px;height:1180px;
  transform:translateX(-50%);border-radius:50%;
  background:radial-gradient(circle, ${c.acento}1f 0%, transparent 62%)}

.titulo{position:absolute;left:78px;right:78px;top:96px;
  font-family:'Serif4',Georgia,serif;font-weight:600;font-size:74px;line-height:1.1;
  letter-spacing:-.4px;text-wrap:balance}
.pie{position:absolute;left:78px;right:78px;top:${96 + 74 * 1.1 * 2 + 18}px;
  font-size:27px;line-height:1.35;color:${c.tenue}}

/* Marco de iPhone dibujado, no pegado. */
.telefono{position:absolute;
  left:${PANTALLA.x - 14}px;top:${PANTALLA.y - 14}px;
  width:${PANTALLA.ancho + 28}px;height:${PANTALLA.alto + 28}px;
  border-radius:62px;background:${c.marco};
  box-shadow:0 0 0 2px ${c.borde}, 0 40px 90px rgba(0,0,0,.45);
  padding:14px}
.pantalla{position:relative;width:${PANTALLA.ancho}px;height:${PANTALLA.alto}px;
  border-radius:48px;overflow:hidden;background:${c.fondo}}
.tiro{width:100%;height:100%;object-fit:cover;object-position:top center;display:block}
.hueco{width:100%;height:100%}
.isla{position:absolute;left:50%;top:14px;transform:translateX(-50%);
  width:108px;height:32px;border-radius:18px;background:#000;z-index:3}

.marca{position:absolute;left:0;right:0;bottom:74px;display:flex;
  flex-direction:column;align-items:center;gap:20px}
.marca img{width:430px;height:auto;display:block}
.url{font-size:25px;letter-spacing:2.6px;text-transform:uppercase;color:${c.tenue}}
</style></head><body>
<div class="estratos"></div><div class="halo"></div>
<h1 class="titulo">${lineas.map((l) => escapar(l)).join("<br>")}</h1>
${pie ? `<p class="pie">${escapar(pie)}</p>` : ""}
<div class="telefono"><div class="pantalla">${contenido}${sinIsla ? "" : `<div class="isla"></div>`}</div></div>
<div class="marca"><img src="${c.logo}" alt=""><div class="url">vida-tierra.vercel.app</div></div>
</body></html>`;
}

function escapar(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
