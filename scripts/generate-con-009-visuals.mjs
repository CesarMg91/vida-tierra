// Genera las visuales de CON-009 (meditación) de forma determinista: misma semilla, mismo archivo.
// Uso: node scripts/generate-con-009-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
// No usa modelos de imagen ni servicios externos. Los textos se parten en líneas aquí,
// sin foreignObject, para que el SVG se lea igual en cualquier visor.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-con-009-meditacion";
const CHAIN = "cadena-practica-metafisica-con-009.svg";
const LAYERS = "capas-practica-metafisica-con-009.svg";

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
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Parte un texto en líneas de como máximo `max` caracteres, sin cortar palabras. */
function wrap(text, max) {
  const lines = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    if (line && (line + " " + word).length > max) {
      lines.push(line);
      line = word;
    } else line = line ? `${line} ${word}` : word;
  }
  if (line) lines.push(line);
  return lines;
}

function textBlock(x, y, text, { max, size, lh, color, family = "Arial, sans-serif", weight = "400" }) {
  return wrap(text, max)
    .map((line, i) => `<text x="${x}" y="${f(y + i * lh)}" fill="${color}" font-family="${family}" font-size="${size}" font-weight="${weight}">${esc(line)}</text>`)
    .join("\n  ");
}

// Portada: arcos concéntricos claros que se adelgazan y se interrumpen hacia el centro hasta dejar
// un hueco. No representa un cerebro, un EEG, una postura, una experiencia ni un dato.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(9009);
  const cx = W * 0.68;
  const cy = H * 0.52;
  const palette = ["#c9b88f", "#d8c9a3", "#b9a77f", "#e6dcc2", "#a8966f"];
  const parts = [];
  const rings = 26;
  for (let r = 0; r < rings; r += 1) {
    const radius = 60 + r * 17 + rand() * 6;
    const t = r / (rings - 1);
    const width = 0.6 + t * 2.6;
    const color = palette[Math.floor(rand() * palette.length)];
    let a = rand() * Math.PI * 2;
    const end = a + Math.PI * 2;
    while (a < end) {
      const len = (0.15 + rand() * 0.6) * (0.35 + t);
      const b = Math.min(end, a + len);
      const x1 = cx + radius * Math.cos(a);
      const y1 = cy + radius * Math.sin(a);
      const x2 = cx + radius * Math.cos(b);
      const y2 = cy + radius * Math.sin(b);
      const large = b - a > Math.PI ? 1 : 0;
      const opacity = 0.12 + t * 0.55 + rand() * 0.15;
      parts.push(`<path d="M${f(x1)} ${f(y1)} A${f(radius)} ${f(radius)} 0 ${large} 1 ${f(x2)} ${f(y2)}" fill="none" stroke="${color}" stroke-opacity="${f(Math.min(0.85, opacity))}" stroke-width="${f(width)}" stroke-linecap="round"/>`);
      a = b + 0.05 + rand() * (0.5 - t * 0.35);
    }
  }
  // Puntos tenues dispersos: ruido de fondo sin forma reconocible.
  for (let i = 0; i < 160; i += 1) {
    const ang = rand() * Math.PI * 2;
    const dist = 520 + rand() * 360;
    parts.push(`<circle cx="${f(cx + dist * Math.cos(ang))}" cy="${f(cy + dist * Math.sin(ang) * 0.7)}" r="${f(0.7 + rand() * 1.6)}" fill="#e9e1cc" fill-opacity="${f(0.1 + rand() * 0.3)}"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Arcos concéntricos claros sobre fondo oscuro que se adelgazan hacia el centro hasta dejar un hueco</title>
  <desc id="desc">Composición generativa abstracta: a la derecha, arcos concéntricos de tonos arena, más gruesos y continuos por fuera y más finos y entrecortados hacia el centro, que queda vacío. No representa un cerebro, un EEG, una postura, una experiencia ni un dato.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#14120f"/><stop offset=".55" stop-color="#1b1914"/><stop offset="1" stop-color="#100e0b"/></linearGradient>
    <radialGradient id="glow" cx=".68" cy=".52" r=".45"><stop stop-color="#5a4d33" stop-opacity=".28"/><stop offset="1" stop-color="#5a4d33" stop-opacity="0"/></radialGradient>
    <linearGradient id="fadeL" x1="0" y1="0" x2="1" y2="0"><stop offset=".26" stop-color="#14120f"/><stop offset=".48" stop-color="#14120f" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
  <rect width="${W}" height="${H}" fill="url(#fadeL)"/>
</svg>
`;
}

function chain() {
  const steps = [
    ["Práctica", "qué técnica, cuánto tiempo y en qué población"],
    ["Informe", "lo que la persona dice o señala que vivió"],
    ["Correlato", "qué cambia en el cerebro de quien practica"],
    ["Efecto", "qué cambia después, comparado con un control"],
    ["Componente", "lo que sólo la práctica aportaría frente a un control activo"],
    ["Metafísica", "qué revelaría sobre la naturaleza de la conciencia"],
  ];
  const firewalls = ["≠ experiencia", "≠ registro", "≠ causa", "≠ específico", "≠ realidad"];
  const x0 = 92;
  const w = 222;
  const gap = 18;
  const cards = steps
    .map(([title, text], i) => {
      const x = x0 + i * (w + gap);
      const fill = i < 3 ? "#ece8dc" : i < 5 ? "#f1e2c8" : "#f3d6c8";
      return `<rect x="${x}" y="300" width="${w}" height="250" rx="18" fill="${fill}"/>
  <text x="${x + 22}" y="350" fill="#7a5f2f" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="2">${String(i + 1).padStart(2, "0")}</text>
  <text x="${x + 22}" y="392" fill="#1f1a12" font-family="Georgia, serif" font-size="22" font-weight="700">${title}</text>
  ${textBlock(x + 22, 430, text, { max: 17, size: 19, lh: 26, color: "#3d372c" })}`;
    })
    .join("\n  ");
  const walls = firewalls
    .map((label, i) => {
      const x = x0 + (i + 1) * (w + gap) - gap / 2;
      return `<line x1="${x}" y1="580" x2="${x}" y2="640" stroke="#d9785b" stroke-width="3"/>
  <text x="${x}" y="676" text-anchor="middle" fill="#f0b39c" font-family="Arial, sans-serif" font-size="19">${esc(label)}</text>`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Cadena desde una práctica hasta una afirmación metafísica, con un cortafuegos entre cada paso</title>
  <desc id="desc">Seis pasos: práctica, informe, correlato, efecto, componente específico y metafísica. Entre cada par hay un cortafuegos: una práctica no es una experiencia, un informe no es un registro, un correlato no es una causa, un efecto frente a un control débil no es un efecto específico y ningún dato es una tesis sobre la realidad.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#14120f"/><stop offset="1" stop-color="#211d16"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="92" y="92" fill="#d8c9a3" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">CON-009 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="46" font-weight="700">Una práctica no es una revelación</text>
  <text x="92" y="198" fill="#cfc8b8" font-family="Arial, sans-serif" font-size="24">Cada paso añade supuestos; la confianza de un paso no viaja sola al siguiente.</text>
  ${cards}
  ${walls}
  <text x="92" y="790" fill="#aaa290" font-family="Arial, sans-serif" font-size="20">Claro: lo que se describe, se informa o se mide. Ocre: lo que exige controles. Rojo claro: sin datos a favor.</text>
  <text x="92" y="822" fill="#aaa290" font-family="Arial, sans-serif" font-size="20">Síntesis del expediente; no es una guía de meditación ni una recomendación clínica.</text>
</svg>
`;
}

function layers() {
  const rows = [
    ["Práctica", "familias atencionales, constructivas y deconstructivas; siete grupos empíricos de técnicas", "que «meditación» sea una sola cosa con un solo efecto", "A", "ok"],
    ["Informe", "botones, retroalimentación y entrevistas que ordenan los datos cerebrales", "que el informe registre la experiencia sin vocabulario ni expectativa", "A", "ok"],
    ["Correlato", "más gamma en expertos; red por defecto menos activa; sin cambio estructural en 218 personas", "que la práctica cause la diferencia: los expertos no se asignan al azar", "B", "partial"],
    ["Efecto", "moderado frente a lista de espera; pequeño o nulo frente a controles activos; MYRIAD nulo", "un componente específico de la meditación ni la ausencia de efectos adversos", "B/C", "partial"],
    ["Metafísica", "informes de «conciencia pura» y de ceses; ningún EEG reconocible en el tukdam", "una conciencia sin cerebro ni acceso a otra realidad", "E", "fail"],
  ];
  const fills = { ok: "#ece8dc", partial: "#f1e2c8", fail: "#f3d6c8" };
  const y0 = 262;
  const rh = 104;
  const body = rows
    .map(([name, measured, notFollow, grade, kind], i) => {
      const y = y0 + i * rh;
      return `<text x="92" y="${y + 50}" fill="#f4f1e8" font-family="Georgia, serif" font-size="25" font-weight="700">${name}</text>
  <text x="92" y="${y + 80}" fill="#d8c9a3" font-family="Arial, sans-serif" font-size="18" font-weight="700">confianza ${grade}</text>
  <rect x="300" y="${y + 8}" width="600" height="${rh - 16}" rx="12" fill="${fills[kind]}"/>
  ${textBlock(320, y + 42, measured, { max: 56, size: 19, lh: 25, color: "#2a251c" })}
  <rect x="920" y="${y + 8}" width="588" height="${rh - 16}" rx="12" fill="#e9e4f0"/>
  ${textBlock(940, y + 42, notFollow, { max: 54, size: 19, lh: 25, color: "#2a251c" })}`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Cinco capas: práctica, informe, correlato, efecto y afirmación metafísica; qué se midió en cada una y qué no se sigue</title>
  <desc id="desc">Tabla de cinco filas. Práctica: familias y grupos de técnicas, pero «meditación» no es una sola cosa. Informe: métodos que ordenan los datos cerebrales, pero el informe no es un registro. Correlato: gamma de expertos y red por defecto, sin asignación al azar; sin cambios estructurales en el ensayo más grande. Efecto: moderado frente a lista de espera y pequeño o nulo frente a controles activos. Metafísica: sin datos a favor.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#14120f"/><stop offset="1" stop-color="#211d16"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="92" y="92" fill="#d8c9a3" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">CON-009 · CINCO CAPAS</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">Lo que se midió y lo que no se sigue</text>
  <text x="320" y="236" fill="#cfc8b8" font-family="Arial, sans-serif" font-size="20" font-weight="700">Qué se midió</text>
  <text x="940" y="236" fill="#cfc8b8" font-family="Arial, sans-serif" font-size="20" font-weight="700">Qué no se sigue</text>
  ${body}
  <text x="92" y="850" fill="#aaa290" font-family="Arial, sans-serif" font-size="19">Claro: sólido. Ocre: medido con límites serios. Rojo claro: sin datos a favor. No es una guía de meditación ni una recomendación clínica.</text>
</svg>
`;
}

fs.mkdirSync(OUT, { recursive: true });
const heroSvg = hero();
fs.writeFileSync(path.join(OUT, `${HERO}.svg`), heroSvg);
fs.writeFileSync(path.join(OUT, CHAIN), chain());
fs.writeFileSync(path.join(OUT, LAYERS), layers());

if (process.argv.includes("--png")) {
  const { default: sharp } = await import("sharp");
  await sharp(Buffer.from(heroSvg), { density: 72 })
    .resize(1672, 941)
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, `${HERO}.png`));
}
console.log("Visuales de CON-009 generadas en assets/visuales");
