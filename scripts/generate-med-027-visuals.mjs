// Genera las visuales de MED-027 (inmunología y trasplante) de forma determinista:
// misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-med-027-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-027-inmunologia-trasplante";
const CHAIN = "cadena-mecanismo-etica-med-027.svg";
const MATRIX = "matriz-inmunologia-trasplante-med-027.svg";

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

// Portada: a la izquierda, una teselación de celdas hexagonales en dos familias de color que se
// encuentran en una frontera irregular; al centro, un grafo bipartito con pocas aristas fuertes
// entre dos columnas de nodos; a la derecha, una red de nodos que se densifica hacia el borde.
// Todo sobre gradientes. Ningún cuerpo, órgano, célula dibujada, figura humana, texto ni dato.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(27027);
  const parts = [];

  // Celdas hexagonales (abstractas), dos familias separadas por una frontera ondulada.
  const size = 26;
  const hx = size * Math.sqrt(3);
  const hy = size * 1.5;
  for (let row = -1; row * hy < H + size; row += 1) {
    for (let col = -1; col * hx < W * 0.42; col += 1) {
      const x = col * hx + (row % 2 ? hx / 2 : 0);
      const y = row * hy;
      const boundary = W * 0.2 + Math.sin(y / 120) * 60 + Math.sin(y / 47) * 18;
      if (rand() < 0.12) continue;
      const fade = Math.max(0, 1 - x / (W * 0.44));
      const warm = x > boundary;
      const color = warm ? (rand() < 0.5 ? "#e39b6b" : "#c9785a") : rand() < 0.5 ? "#5fb3a8" : "#3f8f8a";
      const near = Math.max(0, 1 - Math.abs(x - boundary) / 120);
      const r = size * (0.62 + rand() * 0.22);
      const pts = [];
      for (let k = 0; k < 6; k += 1) {
        const a = Math.PI / 6 + (k * Math.PI) / 3;
        pts.push(`${f(x + r * Math.cos(a))},${f(y + r * Math.sin(a))}`);
      }
      parts.push(`<polygon points="${pts.join(" ")}" fill="${color}" fill-opacity="${f((0.12 + near * 0.35 + rand() * 0.18) * (0.35 + fade * 0.65))}" stroke="${color}" stroke-opacity="${f(0.25 * fade + near * 0.3)}" stroke-width="1"/>`);
    }
  }

  // Grafo bipartito: dos columnas de nodos; aristas tenues y unas pocas fuertes (emparejamiento).
  const left = [];
  const right = [];
  for (let i = 0; i < 14; i += 1) {
    left.push([W * 0.46 + rand() * 18, 110 + i * 52 + rand() * 14]);
    right.push([W * 0.6 + rand() * 18, 110 + i * 52 + rand() * 14]);
  }
  for (let i = 0; i < left.length; i += 1) {
    for (let j = 0; j < right.length; j += 1) {
      if (rand() < 0.22) {
        const [x1, y1] = left[i];
        const [x2, y2] = right[j];
        parts.push(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="#a9c7d6" stroke-opacity="${f(0.06 + rand() * 0.12)}" stroke-width="1"/>`);
      }
    }
  }
  const matched = [];
  for (let i = 0; i < left.length; i += 1) if (rand() < 0.45) matched.push(i);
  for (const i of matched) {
    const j = Math.min(right.length - 1, Math.max(0, i + Math.floor(rand() * 3) - 1));
    const [x1, y1] = left[i];
    const [x2, y2] = right[j];
    parts.push(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="#f1d9a8" stroke-opacity=".7" stroke-width="2.4"/>`);
  }
  for (const [x, y] of left) parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="6" fill="#5fb3a8" fill-opacity=".85"/>`);
  for (const [x, y] of right) parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="6" fill="#e39b6b" fill-opacity=".85"/>`);

  // Red a la derecha, más densa hacia el borde.
  const nodes = [];
  for (let i = 0; i < 110; i += 1) {
    const u = Math.sqrt(rand());
    nodes.push([W * 0.66 + u * W * 0.32, 25 + rand() * (H - 50)]);
  }
  for (let i = 0; i < nodes.length; i += 1) {
    const [x1, y1] = nodes[i];
    for (let j = i + 1; j < nodes.length; j += 1) {
      const [x2, y2] = nodes[j];
      const d = Math.hypot(x2 - x1, y2 - y1);
      if (d < 110 && rand() < 0.5) parts.push(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="#8fb9c9" stroke-opacity="${f(0.12 + (1 - d / 110) * 0.32)}" stroke-width="1.1"/>`);
    }
  }
  for (const [x, y] of nodes) parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(2 + rand() * 3)}" fill="${rand() < 0.5 ? "#9fd6cc" : "#efb48f"}" fill-opacity="${f(0.45 + rand() * 0.4)}"/>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Celdas, emparejamientos y redes: del mecanismo a la regla</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, una teselación de celdas hexagonales en dos familias de color que se encuentran en una frontera ondulada; al centro, un grafo bipartito con algunas aristas resaltadas; a la derecha, una red de nodos enlazados sobre gradientes. No representa cuerpos, órganos, células reales, personas, datos ni un acontecimiento real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#0f1c1e"/><stop offset=".5" stop-color="#141a24"/><stop offset="1" stop-color="#1e1618"/></linearGradient>
    <radialGradient id="glow" cx=".53" cy=".5" r=".35"><stop stop-color="#3a5a6d" stop-opacity=".45"/><stop offset="1" stop-color="#3a5a6d" stop-opacity="0"/></radialGradient>
    <radialGradient id="glow2" cx=".2" cy=".5" r=".3"><stop stop-color="#2f6f66" stop-opacity=".35"/><stop offset="1" stop-color="#2f6f66" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

const LAYERS = ["mecanismo", "compatibilidad", "procedimiento", "serie", "registro", "asignación", "ética"];

function chain() {
  const lines = [
    ["fagocitos", "anticuerpos", "tolerancia"],
    ["HLA · microgotas", "prueba cruzada", "fallo inmediato"],
    ["gemelos 1954", "corazón 1967", "factibilidad"],
    ["azatioprina", "rescate", "sin comparador"],
    ["supervivencia", "censura", "selección"],
    ["puntos · MELD", "KAS 2014", "valores"],
    ["muerte encefálica", "procedencia", "consentimiento"],
  ];
  const walls = [
    ["mecanismo ≠", "compatibilidad"],
    ["compatibilidad ≠", "éxito"],
    ["procedimiento ≠", "resultado"],
    ["serie ≠", "comparación"],
    ["registro ≠", "causa"],
    ["asignación ≠", "justicia"],
  ];
  const cards = LAYERS.map((title, i) => {
    const x = 70 + i * 212;
    const tspans = lines[i].map((line, j) => `<tspan x="24" dy="${j === 0 ? 0 : 25}">${esc(line)}</tspan>`).join("");
    return `<g transform="translate(${x} 275)"><rect width="190" height="235" rx="22" fill="url(#card)"/><circle cx="38" cy="40" r="22" fill="#24434a"/><text x="38" y="48" fill="#fff" text-anchor="middle" font-size="20" font-weight="700">${String(i + 1).padStart(2, "0")}</text><text x="24" y="92" fill="#1f211e" font-size="${title.length > 11 ? 20 : 22}" font-weight="700">${esc(title)}</text><text x="24" y="166" fill="#4c5250" font-size="16">${tspans}</text></g>`;
  }).join("\n    ");
  const arrows = LAYERS.slice(0, -1)
    .map((_, i) => `<path d="M${260 + i * 212} 390H${278 + i * 212}"/>`)
    .join("");
  const wallText = walls
    .map(([a, b], i) => {
      const x = 271 + i * 212;
      return `<text x="${x}" y="550"><tspan x="${x}">${esc(a)}</tspan><tspan x="${x}" dy="21">${esc(b)}</tspan></text>`;
    })
    .join("\n    ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Cadena desde el mecanismo inmunitario hasta la ética del trasplante</title>
  <desc id="desc">Siete capas conectadas pero no automáticas: mecanismo → compatibilidad → procedimiento → serie → registro → asignación → ética. Cada transición conserva un cortafuego: mecanismo no es compatibilidad, compatibilidad no es éxito, procedimiento no es resultado, serie no es comparación, registro no es causa y asignación no es justicia; un resultado no es legitimidad.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#121719"/><stop offset="1" stop-color="#1c2422"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e6eef0"/><stop offset="1" stop-color="#c9d8d6"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6 0 12Z" fill="#d9785b"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#24434a" opacity=".3"/>
  <circle cx="115" cy="850" r="250" fill="#8e3f2e" opacity=".18"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-027 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">Un injerto que funciona no demuestra un trasplante legítimo</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="24">${esc(LAYERS.join(" → "))}</text>
  <path d="M205 390H1395" stroke="#d9785b" stroke-width="4" stroke-dasharray="8 10" opacity=".7"/>
  <g filter="url(#shadow)" font-family="Arial, sans-serif">
    ${cards}
  </g>
  <g stroke="#d9785b" stroke-width="4" marker-end="url(#arrow)">${arrows}</g>
  <g font-family="Arial, sans-serif" font-size="16" fill="#f0c8b8" text-anchor="middle">
    ${wallText}
  </g>
  <rect x="92" y="645" width="1416" height="150" rx="24" fill="#0f1414" stroke="#4f8a80" stroke-width="2"/>
  <text x="125" y="696" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="3">CONVERGENCIA LEGÍTIMA</text>
  <text x="125" y="744" fill="#f4f1e8" font-family="Georgia, serif" font-size="28">Ningún eslabón hereda la fuerza del siguiente: resultado no es legitimidad.</text>
  <text x="125" y="778" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="19">La procedencia y el consentimiento del órgano son una capa propia, que un resultado clínico no puede llenar.</text>
  <text x="1505" y="850" fill="#7f8c88" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · historia de la evidencia, sin indicaciones clínicas, criterios de elegibilidad ni dosis</text>
</svg>
`;
}

function matrix() {
  // Filas: los títulos de la tabla «Qué podemos comparar» de MED-027, copiados literalmente.
  // Columnas: las siete capas. Una marca indica que el expediente toca esa capa; no gradúa nada.
  // Índices de capa: 0 mecanismo, 1 compatibilidad, 2 procedimiento, 3 serie, 4 registro, 5 asignación, 6 ética.
  const rows = [
    ["Inmunidad temprana", [0]],
    ["Tolerancia y selección clonal", [0]],
    ["HLA y prueba cruzada", [0, 1, 3]],
    ["Gemelos de Boston", [2, 3]],
    ["Irradiación y azatioprina", [0, 2, 3]],
    ["Ciclosporina y tacrolimus", [0, 3]],
    ["Corazón 1967–1970", [2, 3, 4]],
    ["Muerte encefálica", [3, 6]],
    ["Asignación", [1, 4, 5]],
    ["Comercio y China", [4, 6]],
    ["Supervivencia del injerto", [4]],
    ["Xenotrasplante", [0, 2, 3, 6]],
  ];
  const colX = (j) => 560 + j * 136;
  const head = LAYERS.map((name, j) => `<text x="${colX(j)}" y="257" text-anchor="middle">${esc(name)}</text>`).join("");
  const body = rows
    .map(([name, marks], i) => {
      const y = 282 + i * 44;
      const fill = i % 2 === 0 ? "#f7fbfa" : "#e3ecea";
      const dots = marks.map((j) => `<circle cx="${colX(j)}" cy="22" r="9" fill="#24434a"/>`).join("");
      return `<g transform="translate(0 ${y})"><rect x="92" width="1416" height="44" fill="${fill}"/><text x="112" y="28" fill="#24434a" font-weight="700">${esc(name)}</text>${dots}</g>`;
    })
    .join("\n      ");
  const grid = LAYERS.slice(1)
    .map((_, j) => `<line x1="${colX(j) + 68}" y1="282" x2="${colX(j) + 68}" y2="${282 + rows.length * 44}"/>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de expedientes de inmunología y trasplante</title>
  <desc id="desc">Doce expedientes de MED-027 cruzados con siete capas: mecanismo, compatibilidad, procedimiento, serie, registro, asignación y ética. Cada marca sólo indica que el expediente toca esa capa; no gradúa fuerza de evidencia, no forma una escalera de progreso ni reparte prioridad.</desc>
  <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#dfe9e7"/><stop offset="1" stop-color="#c4d4d1"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect x="58" y="40" width="1484" height="830" rx="28" fill="#f3f8f7" stroke="#24434a" stroke-width="2"/>
  <text x="92" y="94" fill="#2f6f66" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">MED-027 · MATRIZ DE EVIDENCIA</text>
  <text x="92" y="145" fill="#1c2422" font-family="Georgia, serif" font-size="42" font-weight="700">Doce expedientes, siete capas, ninguna hazaña fundacional</text>
  <text x="92" y="183" fill="#4c5250" font-family="Arial, sans-serif" font-size="20">Qué capas toca cada expediente. Una marca es presencia, no fuerza ni ranking.</text>
  <g font-family="Arial, sans-serif" font-size="17">
    <rect x="92" y="222" width="1416" height="56" rx="10" fill="#24434a"/>
    <g fill="#eef6f4" font-size="16" font-weight="700"><text x="112" y="257">EXPEDIENTE</text>${head}</g>
    <g>
      ${body}
    </g>
    <g stroke="#b7c9c5" stroke-width="1">${grid}</g>
  </g>
  <g font-family="Arial, sans-serif" font-size="15" fill="#5a6461"><circle cx="100" cy="840" r="7" fill="#24434a"/><text x="114" y="845">el expediente toca la capa</text></g>
  <text x="1505" y="858" fill="#5a6461" text-anchor="end" font-family="Arial, sans-serif" font-size="15">Síntesis del expediente · sin puntuaciones ni ranking</text>
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
console.log("Visuales de MED-027 generadas en assets/visuales");
