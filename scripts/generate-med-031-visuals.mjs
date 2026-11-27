// Genera las visuales de MED-031 (genética médica y genómica) de forma determinista:
// misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-med-031-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-031-genetica-genomica-medicina-precision";
const CHAIN = "cadena-herencia-gobernanza-med-031.svg";
const MATRIX = "matriz-genetica-genomica-med-031.svg";

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

// Portada: a la izquierda, bandas verticales de marcas cortas con densidades distintas;
// al centro, una nube de puntos que nace compacta y se dispersa; a la derecha, un abanico
// de ramas que salen de un tronco y se separan. Todo sobre gradientes.
// Ninguna hélice, cromosoma, persona, rostro, mapa, población, letra de secuencia ni dato.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(31031);
  const parts = [];

  // Bandas de marcas cortas (lecturas sin representar ninguna).
  for (let band = 0; band < 14; band += 1) {
    const x = 50 + band * 34;
    const density = 0.35 + rand() * 0.55;
    for (let y = 30; y < H - 30; y += 9) {
      if (rand() > density) continue;
      const len = 4 + rand() * 18;
      const tone = rand();
      const color = tone < 0.6 ? "#7fb7a6" : tone < 0.88 ? "#9cc4dd" : "#e2b26a";
      const fade = Math.max(0.15, 1 - band / 16);
      parts.push(`<rect x="${f(x + rand() * 6)}" y="${f(y)}" width="${f(len)}" height="3" rx="1.5" fill="${color}" fill-opacity="${f((0.25 + rand() * 0.5) * fade)}"/>`);
    }
  }

  // Nube de puntos: compacta a la izquierda, dispersa hacia la derecha; no grafica nada.
  for (let i = 0; i < 520; i += 1) {
    const u = rand();
    const x = W * 0.36 + u * W * 0.3;
    const spread = 18 + u * u * 330;
    const y = H / 2 + (rand() + rand() + rand() - 1.5) * spread * 0.9;
    const r = 1.4 + rand() * 2.6;
    const warm = rand() < 0.12;
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${warm ? "#efb98a" : "#a9d3c6"}" fill-opacity="${f(0.25 + (1 - u) * 0.45)}"/>`);
  }

  // Abanico de ramas desde un tronco común.
  const x0 = W * 0.7;
  const y0 = H / 2;
  for (let k = 0; k < 15; k += 1) {
    const angle = -0.75 + (k / 14) * 1.5 + (rand() - 0.5) * 0.06;
    const len = 250 + rand() * 120;
    const x3 = x0 + Math.cos(angle) * len;
    const y3 = y0 + Math.sin(angle) * len;
    const c1 = `${f(x0 + 70)} ${f(y0 + Math.sin(angle) * 20)}`;
    const c2 = `${f(x0 + Math.cos(angle) * len * 0.55)} ${f(y0 + Math.sin(angle) * len * 0.5)}`;
    parts.push(`<path d="M${f(x0)} ${f(y0)}C${c1} ${c2} ${f(x3)} ${f(y3)}" fill="none" stroke="${k % 4 === 0 ? "#e3a56c" : "#9fd0e0"}" stroke-opacity="${f(0.3 + rand() * 0.4)}" stroke-width="${f(1.4 + rand() * 1.6)}"/>`);
    parts.push(`<circle cx="${f(x3)}" cy="${f(y3)}" r="${f(3 + rand() * 4)}" fill="${k % 4 === 0 ? "#efb88a" : "#9fd0e0"}" fill-opacity="${f(0.5 + rand() * 0.4)}"/>`);
  }
  parts.push(`<path d="M${f(W * 0.62)} ${f(y0)}H${f(x0)}" stroke="#9fd0e0" stroke-opacity=".55" stroke-width="3"/>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Marcas, una nube que se dispersa y ramas que se separan: de la herencia observada a la gobernanza</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, bandas verticales de marcas cortas con densidades distintas; al centro, una nube de puntos que nace compacta y se dispersa; a la derecha, un abanico de ramas que salen de un tronco y se separan, sobre gradientes. No representa hélices, cromosomas, personas, rostros, poblaciones, secuencias ni un acontecimiento real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#0f1c1a"/><stop offset=".55" stop-color="#121a22"/><stop offset="1" stop-color="#1e1a1c"/></linearGradient>
    <radialGradient id="glow" cx=".5" cy=".5" r=".35"><stop stop-color="#2f6458" stop-opacity=".42"/><stop offset="1" stop-color="#2f6458" stop-opacity="0"/></radialGradient>
    <radialGradient id="glow2" cx=".82" cy=".5" r=".25"><stop stop-color="#6a4a3a" stop-opacity=".3"/><stop offset="1" stop-color="#6a4a3a" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

const LAYERS = ["herencia", "variante", "asociación", "penetrancia", "predicción", "transferencia", "clasificación", "gobernanza"];

function chain() {
  const lines = [
    ["cruzas · familias", "gemelos", "proporciones"],
    ["cromosoma", "marcador · gen", "secuencia"],
    ["casos y controles", "efecto pequeño", "replicación"],
    ["familias", "biobancos", "reclutamiento"],
    ["detección", "falsos positivos", "calibración"],
    ["ascendencia", "distancia genética", "contexto"],
    ["cinco categorías", "fecha", "reclasificación"],
    ["consentimiento", "ley · regulación", "custodio"],
  ];
  const walls = [
    ["patrón ≠", "mecanismo"],
    ["variante ≠", "enfermedad"],
    ["asociación ≠", "predicción"],
    ["familias ≠", "población"],
    ["riesgo relativo ≠", "destino"],
    ["una ascendencia ≠", "otra"],
    ["etiqueta ≠", "hecho fijo"],
  ];
  const step = 186;
  const cards = LAYERS.map((title, i) => {
    const x = 60 + i * step;
    const tspans = lines[i].map((line, j) => `<tspan x="18" dy="${j === 0 ? 0 : 24}">${esc(line)}</tspan>`).join("");
    return `<g transform="translate(${x} 275)"><rect width="168" height="235" rx="20" fill="url(#card)"/><circle cx="34" cy="38" r="20" fill="#1f5a4e"/><text x="34" y="45" fill="#fff" text-anchor="middle" font-size="18" font-weight="700">${String(i + 1).padStart(2, "0")}</text><text x="18" y="92" fill="#1f211e" font-size="${title.length > 11 ? 17 : 20}" font-weight="700">${esc(title)}</text><text x="18" y="160" fill="#4c5250" font-size="15">${tspans}</text></g>`;
  }).join("\n    ");
  const arrows = LAYERS.slice(0, -1)
    .map((_, i) => `<path d="M${230 + i * step} 390H${244 + i * step}"/>`)
    .join("");
  const wallText = walls
    .map(([a, b], i) => {
      const x = 237 + i * step;
      return `<text x="${x}" y="550"><tspan x="${x}">${esc(a)}</tspan><tspan x="${x}" dy="20">${esc(b)}</tspan></text>`;
    })
    .join("\n    ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Cadena desde la herencia observada hasta la gobernanza en la genética médica</title>
  <desc id="desc">Ocho capas conectadas pero no automáticas: herencia observada → variante → asociación → penetrancia → predicción individual → transferencia → clasificación → gobernanza. Cada transición conserva un cortafuego: un patrón no es un mecanismo, una variante no es una enfermedad, una asociación no es una predicción, la penetrancia de familias no es la de la población, un riesgo relativo no es un destino, lo hallado en una ascendencia no vale sin medirlo en otra y una clasificación no es un hecho fijo; una muestra donada no es un permiso para todo uso.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a18"/><stop offset="1" stop-color="#1b2226"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e6f0ec"/><stop offset="1" stop-color="#c7d9d2"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6 0 12Z" fill="#d9785b"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#1f5a4e" opacity=".3"/>
  <circle cx="115" cy="850" r="250" fill="#8e3f2e" opacity=".18"/>
  <text x="60" y="92" fill="#8fd0bd" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-031 · CADENA DE INFERENCIA</text>
  <text x="60" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="39" font-weight="700">Una variante no es un destino; una población no hereda a una persona</text>
  <text x="60" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="22">${esc(LAYERS.join(" → "))}</text>
  <path d="M170 390H1430" stroke="#d9785b" stroke-width="4" stroke-dasharray="8 10" opacity=".7"/>
  <g filter="url(#shadow)" font-family="Arial, sans-serif">
    ${cards}
  </g>
  <g stroke="#d9785b" stroke-width="4" marker-end="url(#arrow)">${arrows}</g>
  <g font-family="Arial, sans-serif" font-size="15" fill="#f0c8b8" text-anchor="middle">
    ${wallText}
  </g>
  <rect x="60" y="645" width="1480" height="150" rx="24" fill="#0f1416" stroke="#4f8a7c" stroke-width="2"/>
  <text x="93" y="696" fill="#8fd0bd" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="3">CONVERGENCIA LEGÍTIMA</text>
  <text x="93" y="744" fill="#f4f1e8" font-family="Georgia, serif" font-size="27">Ningún eslabón hereda la fuerza del siguiente: una muestra donada no es un permiso para todo.</text>
  <text x="93" y="778" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="19">Quién está en las bases y cómo se reclutó a los portadores atraviesan todas las capas.</text>
  <text x="1540" y="850" fill="#7f8c88" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · historia de la evidencia, sin recomendaciones clínicas ni orientación sobre pruebas</text>
</svg>
`;
}

function matrix() {
  // Filas: los títulos de la tabla «Qué podemos comparar» de MED-031, copiados literalmente.
  // Columnas: las ocho capas. Una marca indica que el expediente toca esa capa con evidencia propia; no gradúa nada.
  // Índices: 0 herencia, 1 variante, 2 asociación, 3 penetrancia, 4 predicción, 5 transferencia, 6 clasificación, 7 gobernanza.
  const rows = [
    ["Mendel a Fisher", [0, 2, 5, 6, 7]],
    ["Cariotipo y trisomía 21", [0, 1, 2, 3, 6]],
    ["Ligamiento", [0, 1, 2, 3, 4, 5]],
    ["BRCA1", [0, 1, 2, 3, 4, 5, 7]],
    ["Genoma de referencia", [1, 6, 7]],
    ["GWAS y heredabilidad", [0, 1, 2, 4, 5]],
    ["Puntajes poligénicos", [2, 3, 4, 5, 6]],
    ["Variantes inciertas", [1, 3, 5, 6]],
    ["Penetrancia poblacional", [0, 1, 2, 3, 5, 6]],
    ["Representación", [1, 2, 4, 5, 6]],
    ["Gobernanza", [0, 4, 6, 7]],
  ];
  const colX = (j) => 640 + j * 112;
  const rowH = 46;
  const head = LAYERS.map((name, j) => `<text x="${colX(j)}" y="257" text-anchor="middle">${esc(name)}</text>`).join("");
  const body = rows
    .map(([name, marks], i) => {
      const y = 282 + i * rowH;
      const fill = i % 2 === 0 ? "#f7fbf9" : "#e3ece8";
      const dots = marks.map((j) => `<circle cx="${colX(j)}" cy="${rowH / 2}" r="9" fill="#1f5a4e"/>`).join("");
      return `<g transform="translate(0 ${y})"><rect x="60" width="1480" height="${rowH}" fill="${fill}"/><text x="80" y="30" fill="#1f5a4e" font-weight="700">${esc(name)}</text>${dots}</g>`;
    })
    .join("\n      ");
  const grid = LAYERS.slice(1)
    .map((_, j) => `<line x1="${colX(j) + 56}" y1="282" x2="${colX(j) + 56}" y2="${282 + rows.length * rowH}"/>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de expedientes de genética médica y genómica</title>
  <desc id="desc">Once expedientes de MED-031 cruzados con ocho capas: herencia observada, variante, asociación, penetrancia, predicción individual, transferencia, clasificación y gobernanza. Cada marca sólo indica que el expediente toca esa capa con evidencia propia; no gradúa fuerza de evidencia, no ordena poblaciones ni laboratorios y no forma una escalera de progreso.</desc>
  <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#dde9e4"/><stop offset="1" stop-color="#c3d6ce"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect x="30" y="30" width="1540" height="850" rx="28" fill="#f3f8f6" stroke="#1f5a4e" stroke-width="2"/>
  <text x="60" y="86" fill="#2f6a5e" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">MED-031 · MATRIZ DE EVIDENCIA</text>
  <text x="60" y="137" fill="#1c2422" font-family="Georgia, serif" font-size="40" font-weight="700">Once expedientes, ocho capas, ninguna escalera de progreso</text>
  <text x="60" y="177" fill="#4c5250" font-family="Arial, sans-serif" font-size="20">Qué capas toca cada expediente. Una marca es presencia, no fuerza ni ranking.</text>
  <g font-family="Arial, sans-serif" font-size="17">
    <rect x="60" y="222" width="1480" height="56" rx="10" fill="#1f5a4e"/>
    <g fill="#eef7f3" font-size="15" font-weight="700"><text x="80" y="257">EXPEDIENTE</text>${head}</g>
    <g>
      ${body}
    </g>
    <g stroke="#b7cbc3" stroke-width="1">${grid}</g>
  </g>
  <g font-family="Arial, sans-serif" font-size="15" fill="#5a6461"><circle cx="68" cy="852" r="7" fill="#1f5a4e"/><text x="82" y="857">el expediente toca la capa</text></g>
  <text x="1540" y="858" fill="#5a6461" text-anchor="end" font-family="Arial, sans-serif" font-size="15">Síntesis del expediente · sin puntuaciones ni ranking</text>
</svg>
`;
}

fs.mkdirSync(OUT, { recursive: true });
const heroSvg = hero();
fs.writeFileSync(path.join(OUT, `${HERO}.svg`), heroSvg);
fs.writeFileSync(path.join(OUT, CHAIN), chain());
fs.writeFileSync(path.join(OUT, MATRIX), matrix());

if (process.argv.includes("--png")) {
  const { default: sharp } = await import("sharp");
  await sharp(Buffer.from(heroSvg), { density: 72 })
    .resize(1672, 941)
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, `${HERO}.png`));
}
console.log("Visuales de MED-031 generadas en assets/visuales");
