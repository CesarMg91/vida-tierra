// Genera las visuales de CON-007 (conciencia animal) de forma determinista: misma semilla, mismo archivo.
// Uso: node scripts/generate-con-007-visuals.mjs [--png]
// --png rasteriza la portada con sharp (ya instalado en node_modules); sin modelos de imagen.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const SEED = 7007;

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const f = (n) => Number(n.toFixed(1));
const esc = (s) => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

// Parte un texto en renglones de a lo sumo `max` caracteres (sharp/librsvg no dibuja foreignObject).
function wrap(text, max) {
  const lines = [];
  let line = "";
  for (const word of String(text).split(/\s+/)) {
    if (line && (line + " " + word).length > max) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function textBlock(x, y, text, { max = 30, size = 19, lh = 1.3, color = "#22302e", weight = 400, family = "Arial, sans-serif" } = {}) {
  const lines = wrap(text, max);
  const tspans = lines.map((line, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : f(size * lh)}">${esc(line)}</tspan>`).join("");
  return `<text x="${x}" y="${y}" fill="${color}" font-family="${family}" font-size="${size}" font-weight="${weight}">${tspans}</text>`;
}

// Portada: grupos de puntos de tamaños y colores distintos (muchas formas de estar vivo) frente a una franja clara;
// del otro lado, su reflejo aparece desplazado, desordenado y más tenue: el reflejo no muestra lo de dentro.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(SEED);
  const palette = ["#e9b65c", "#5fb3a1", "#d9785b", "#9cb7d8", "#efe6d2", "#b9a3d6"];
  const mirrorX = W * 0.56;
  const parts = [];
  const clusters = [];
  for (let c = 0; c < 9; c += 1) {
    clusters.push({
      cx: 90 + rand() * (mirrorX - 220),
      cy: 90 + rand() * (H - 180),
      r: 40 + rand() * 120,
      n: 14 + Math.floor(rand() * 40),
      color: palette[c % palette.length],
      size: 2 + rand() * 7,
    });
  }
  for (const cl of clusters) {
    for (let i = 0; i < cl.n; i += 1) {
      const a = rand() * Math.PI * 2;
      const d = Math.sqrt(rand()) * cl.r;
      const x = cl.cx + Math.cos(a) * d;
      const y = cl.cy + Math.sin(a) * d * 0.8;
      const r = cl.size * (0.5 + rand());
      parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${cl.color}" fill-opacity="${f(0.55 + rand() * 0.4)}"/>`);
      // Reflejo: posición especular con ruido creciente; tamaño y opacidad menores.
      const dist = mirrorX - x;
      const jitter = 0.15 + (dist / mirrorX) * 0.9;
      const rx = mirrorX + dist * (0.7 + rand() * 0.5) + (rand() - 0.5) * 120 * jitter;
      const ry = y + (rand() - 0.5) * 160 * jitter;
      if (rx < W - 10) parts.push(`<circle cx="${f(rx)}" cy="${f(ry)}" r="${f(r * (0.4 + rand() * 0.5))}" fill="${cl.color}" fill-opacity="${f(0.08 + rand() * 0.25)}"/>`);
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Puntos frente a una franja clara y un reflejo que no los copia</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, nueve grupos de puntos de colores y tamaños distintos; al centro, una franja vertical clara; a la derecha, un reflejo desplazado, desordenado y más tenue. No representa animales, especies, cerebros ni datos.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset=".55" stop-color="#13262a"/><stop offset="1" stop-color="#0c1517"/></linearGradient>
    <linearGradient id="mirror" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#c8e4de" stop-opacity="0"/><stop offset=".5" stop-color="#c8e4de" stop-opacity=".55"/><stop offset="1" stop-color="#c8e4de" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="${f(mirrorX - 18)}" y="0" width="36" height="${H}" fill="url(#mirror)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

const levels = [
  ["Conducta", "lo que el animal hace: tocarse una marca, evitar un lugar, compensar costo y recompensa", "≠ alguien que lo vive"],
  ["Marcador", "rasgo conductual o neuronal que en humanos acompaña a la experiencia", "≠ necesario ni suficiente"],
  ["Inferencia", "conclusión sobre la experiencia, por analogía o por una teoría", "≠ la teoría que la sostiene"],
  ["Sintiencia", "juicio graduado: experiencias con valor positivo o negativo", "≠ peso moral decidido"],
  ["Estatus moral", "qué se debe hacer: exige premisas éticas además de datos", "decisión, no resultado"],
];

function ladder() {
  const x0 = 92;
  const w = 268;
  const gap = 20;
  const cards = levels
    .map(([name, text, wall], i) => {
      const x = x0 + i * (w + gap);
      const y = 520 - i * 56;
      const fill = i < 2 ? "#e8f1ee" : i < 4 ? "#f3e6cf" : "#e6ecf5";
      return `<rect x="${x}" y="${y}" width="${w}" height="${300}" rx="18" fill="${fill}"/>
  <text x="${x + 22}" y="${y + 46}" fill="#2f6f66" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="2">${String(i + 1).padStart(2, "0")}</text>
  <text x="${x + 22}" y="${y + 86}" fill="#14201f" font-family="Georgia, serif" font-size="25" font-weight="700">${esc(name)}</text>
  ${textBlock(x + 22, y + 124, text, { max: 24, size: 19 })}
  ${textBlock(x + 22, y + 270, wall, { max: 24, size: 18, color: "#a2482c", weight: 700 })}`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">De la conducta al estatus moral: cinco niveles que no se heredan</title>
  <desc id="desc">Escalera de cinco peldaños: conducta, marcador, inferencia, sintiencia y estatus moral. Cada peldaño añade supuestos y dice en rojo qué no hereda del anterior: una conducta no implica a alguien que la viva, un marcador no es necesario ni suficiente, una inferencia hereda su teoría, la sintiencia no decide el peso moral y el estatus moral es una decisión ética, no un resultado.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset="1" stop-color="#16282b"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">CON-007 · ESCALERA DE ATRIBUCIÓN</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">Una conducta no es una experiencia</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="24">Cada peldaño añade supuestos; la confianza de uno no sube sola al siguiente.</text>
  ${cards}
  <text x="92" y="870" fill="#9fb0ab" font-family="Arial, sans-serif" font-size="19">Verde: se observa o se mide. Ocre: se infiere o se juzga. Azul: se decide con premisas éticas. Síntesis del expediente; no ordena especies.</text>
</svg>
`;
}

// Estados: "ok" evidencia repetida o fuerte; "partial" en disputa o pocos estudios; "na" no revisado aquí; "possible" posibilidad realista.
const columns = ["Espejo", "Marcador neural", "Conducta ante el daño", "Nueva York 2024"];
const rows = [
  ["Grandes simios", [["ok", "pasan de forma repetida"], ["ok", "homología con humanos"], ["na", "no revisado aquí"], ["ok", "fuerte apoyo (mamíferos)"]]],
  ["Delfines y elefantes", [["partial", "pocos individuos; en disputa"], ["ok", "homología (mamíferos)"], ["na", "no revisado aquí"], ["ok", "fuerte apoyo (mamíferos)"]]],
  ["Córvidos", [["partial", "urracas: réplica fallida (2020)"], ["ok", "correlato en cuervos (2020)"], ["na", "no revisado aquí"], ["ok", "fuerte apoyo (aves)"]]],
  ["Pez limpiador", [["partial", "pasa con marcas ecológicas; en disputa"], ["na", "no revisado aquí"], ["partial", "peces: disputa teórica"], ["possible", "posibilidad realista"]]],
  ["Pulpos", [["na", "no revisado aquí"], ["ok", "LSE: criterios 1–3 alta"], ["ok", "LSE muy fuerte; alivio preferido"], ["possible", "posibilidad realista"]]],
  ["Cangrejos verdaderos", [["na", "no revisado aquí"], ["ok", "LSE: criterios 1–2 alta"], ["ok", "LSE fuerte; evitan la descarga"], ["possible", "posibilidad realista"]]],
  ["Abejorros", [["na", "no revisado aquí"], ["na", "no revisado aquí"], ["partial", "compensación compatible con dolor"], ["possible", "posibilidad realista (insectos)"]]],
];
const cellFill = { ok: "#e8f1ee", partial: "#f3e6cf", possible: "#e6ecf5", na: "#2a3a3d" };
const cellText = { ok: "#22302e", partial: "#22302e", possible: "#22302e", na: "#9fb0ab" };

function matrix() {
  const x0 = 352;
  const cw = 294;
  const y0 = 250;
  const rh = 78;
  const header = columns
    .map((name, j) => `<text x="${x0 + j * cw + 12}" y="${y0 - 20}" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="20" font-weight="700">${esc(name)}</text>`)
    .join("\n  ");
  const body = rows
    .map(([name, cells], i) => {
      const y = y0 + i * rh;
      const cellsSvg = cells
        .map(([state, label], j) => {
          const x = x0 + j * cw;
          return `<rect x="${x}" y="${y}" width="${cw - 12}" height="${rh - 10}" rx="10" fill="${cellFill[state]}"/>
  ${textBlock(x + 14, y + 30, label, { max: 27, size: 17, color: cellText[state], lh: 1.2 })}`;
        })
        .join("\n  ");
      return `<text x="92" y="${y + 42}" fill="#f4f1e8" font-family="Georgia, serif" font-size="20" font-weight="700">${esc(name)}</text>
  ${cellsSvg}`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Siete grupos de animales por cuatro tipos de evidencia</title>
  <desc id="desc">Matriz: grandes simios, delfines y elefantes, córvidos, pez limpiador, pulpos, cangrejos verdaderos y abejorros, por prueba del espejo, marcador neural, conducta ante el daño y la Declaración de Nueva York de 2024. Verde: evidencia repetida o fuerte; ocre: en disputa o con pocos estudios; azul: posibilidad realista según la declaración; gris: no revisado en este expediente. Un gris no significa que el animal falle.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset="1" stop-color="#16282b"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">CON-007 · MATRIZ DE EVIDENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="42" font-weight="700">Qué evidencia hay, y dónde falta</text>
  ${header}
  ${body}
  <text x="92" y="860" fill="#9fb0ab" font-family="Arial, sans-serif" font-size="18">Verde: repetida o fuerte. Ocre: en disputa o pocos estudios. Azul: posibilidad realista. Gris: no revisado aquí; la falta de estudios no es evidencia de ausencia.</text>
</svg>
`;
}

fs.mkdirSync(OUT, { recursive: true });
const heroSvg = hero();
fs.writeFileSync(path.join(OUT, "hero-con-007-conciencia-animal.svg"), heroSvg);
fs.writeFileSync(path.join(OUT, "cadena-conducta-estatus-con-007.svg"), ladder());
fs.writeFileSync(path.join(OUT, "matriz-taxones-marcadores-con-007.svg"), matrix());
if (process.argv.includes("--png")) {
  const { default: sharp } = await import("sharp");
  await sharp(Buffer.from(heroSvg)).png({ compressionLevel: 9 }).toFile(path.join(OUT, "hero-con-007-conciencia-animal.png"));
}
console.log("CON-007: visuales escritas en assets/visuales");
