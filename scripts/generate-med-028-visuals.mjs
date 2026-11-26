// Genera las visuales de MED-028 (cirugía especializada y mínimamente invasiva) de forma
// determinista: misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-med-028-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-028-cirugia-especializada-minima-invasion";
const CHAIN = "cadena-tecnica-resultado-med-028.svg";
const MATRIX = "matriz-cirugia-especializada-med-028.svg";

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

// Portada: a la izquierda, un campo de trazos cortos que pasan de orientaciones dispersas a
// filas alineadas; al centro, anillos concéntricos pequeños unidos por líneas finas que
// convergen; a la derecha, haces de curvas suaves que se abren. Todo sobre gradientes.
// Ningún cuerpo, órgano, instrumento dibujado, figura humana, texto ni dato.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(28028);
  const parts = [];

  // Trazos: el desorden decrece de izquierda a derecha.
  for (let i = 0; i < 900; i += 1) {
    const x = rand() * W * 0.42;
    const y = 20 + rand() * (H - 40);
    const order = Math.min(1, x / (W * 0.4));
    const angle = (1 - order) * (rand() * Math.PI) + order * (Math.PI / 12) * (rand() - 0.5);
    const len = 8 + rand() * 14;
    const dx = Math.cos(angle) * len;
    const dy = Math.sin(angle) * len;
    const color = rand() < 0.55 ? "#7fb2c9" : "#d79a6c";
    parts.push(`<line x1="${f(x - dx / 2)}" y1="${f(y - dy / 2)}" x2="${f(x + dx / 2)}" y2="${f(y + dy / 2)}" stroke="${color}" stroke-opacity="${f(0.18 + order * 0.45 + rand() * 0.15)}" stroke-width="${f(1 + rand() * 1.4)}" stroke-linecap="round"/>`);
  }

  // Anillos concéntricos pequeños y líneas que convergen hacia un punto central abstracto.
  const cx = W * 0.53;
  const cy = H * 0.5;
  const rings = [];
  for (let i = 0; i < 7; i += 1) {
    const a = (i / 7) * Math.PI * 2 + (rand() - 0.5) * 0.35;
    const r = 190 + rand() * 90;
    rings.push([cx + Math.cos(a) * r * 0.75, cy + Math.sin(a) * r]);
  }
  for (const [x, y] of rings) {
    parts.push(`<line x1="${f(x)}" y1="${f(y)}" x2="${f(cx)}" y2="${f(cy)}" stroke="#e8d3ae" stroke-opacity=".35" stroke-width="1.6"/>`);
  }
  for (const [x, y] of rings) {
    for (let k = 0; k < 4; k += 1) {
      parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(6 + k * 7)}" fill="none" stroke="#9fc6d6" stroke-opacity="${f(0.75 - k * 0.16)}" stroke-width="1.5"/>`);
    }
  }
  for (let k = 0; k < 5; k += 1) {
    parts.push(`<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(10 + k * 16)}" fill="none" stroke="#f0c9a2" stroke-opacity="${f(0.5 - k * 0.08)}" stroke-width="1.2"/>`);
  }

  // Haces de curvas a la derecha.
  for (let i = 0; i < 46; i += 1) {
    const y0 = H * 0.5 + (rand() - 0.5) * 60;
    const spread = (i - 23) * (14 + rand() * 4);
    const x0 = W * 0.64;
    const x1 = W * 0.98;
    const c1x = x0 + (x1 - x0) * 0.35;
    const c2x = x0 + (x1 - x0) * 0.7;
    const color = i % 3 === 0 ? "#d79a6c" : "#8fb9c9";
    parts.push(`<path d="M${f(x0)} ${f(y0)} C${f(c1x)} ${f(y0 + spread * 0.2)} ${f(c2x)} ${f(y0 + spread * 0.9)} ${f(x1)} ${f(y0 + spread * 1.1)}" fill="none" stroke="${color}" stroke-opacity="${f(0.18 + rand() * 0.3)}" stroke-width="${f(1 + rand() * 1.2)}"/>`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Trazos, anillos y haces: de la técnica al resultado</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, un campo de trazos cortos que pasan del desorden a filas alineadas; al centro, anillos concéntricos pequeños unidos por líneas que convergen; a la derecha, haces de curvas que se abren, sobre gradientes. No representa cuerpos, órganos, instrumentos, personas, datos ni un acontecimiento real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#101a20"/><stop offset=".5" stop-color="#141925"/><stop offset="1" stop-color="#1f1715"/></linearGradient>
    <radialGradient id="glow" cx=".53" cy=".5" r=".33"><stop stop-color="#3b5d70" stop-opacity=".45"/><stop offset="1" stop-color="#3b5d70" stop-opacity="0"/></radialGradient>
    <radialGradient id="glow2" cx=".85" cy=".5" r=".3"><stop stop-color="#6d4632" stop-opacity=".3"/><stop offset="1" stop-color="#6d4632" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

const LAYERS = ["técnica", "operador", "equipo", "industria", "aprendizaje", "comparación", "resultado"];

function chain() {
  const lines = [
    ["radical · abierta", "laparoscopia", "robot"],
    ["Halsted", "caso 1 · caso 50", "habilidad en video"],
    ["perfusión", "hospital", "rescate"],
    ["IBM · láser", "programa robótico", "conflictos"],
    ["pirámide", "curva biliar", "ilusión"],
    ["NSABP · COST", "LACC · REAL", "simulacro"],
    ["supervivencia", "recurrencia", "función"],
  ];
  const walls = [
    ["técnica ≠", "operador"],
    ["operador ≠", "sistema"],
    ["equipo ≠", "beneficio"],
    ["dispositivo ≠", "evidencia"],
    ["curva ≠", "efecto"],
    ["serie ≠", "comparación"],
  ];
  const cards = LAYERS.map((title, i) => {
    const x = 70 + i * 212;
    const tspans = lines[i].map((line, j) => `<tspan x="24" dy="${j === 0 ? 0 : 25}">${esc(line)}</tspan>`).join("");
    return `<g transform="translate(${x} 275)"><rect width="190" height="235" rx="22" fill="url(#card)"/><circle cx="38" cy="40" r="22" fill="#26404d"/><text x="38" y="48" fill="#fff" text-anchor="middle" font-size="20" font-weight="700">${String(i + 1).padStart(2, "0")}</text><text x="24" y="92" fill="#1f211e" font-size="${title.length > 10 ? 20 : 22}" font-weight="700">${esc(title)}</text><text x="24" y="166" fill="#4c5250" font-size="16">${tspans}</text></g>`;
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
  <title id="title">Cadena desde la técnica hasta el resultado quirúrgico</title>
  <desc id="desc">Siete capas conectadas pero no automáticas: técnica → operador → equipo → industria → aprendizaje → comparación → resultado. Cada transición conserva un cortafuego: técnica no es operador, operador no es sistema, equipo no es beneficio, dispositivo no es evidencia, curva no es efecto y serie no es comparación; una incisión más pequeña no es un desenlace.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#121719"/><stop offset="1" stop-color="#1d2224"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e8eef1"/><stop offset="1" stop-color="#cad7dc"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6 0 12Z" fill="#d38a5c"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#26404d" opacity=".3"/>
  <circle cx="115" cy="850" r="250" fill="#8a4a2e" opacity=".18"/>
  <text x="92" y="92" fill="#94c9dc" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-028 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">Una incisión más pequeña no demuestra una operación mejor</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="24">${esc(LAYERS.join(" → "))}</text>
  <path d="M205 390H1395" stroke="#d38a5c" stroke-width="4" stroke-dasharray="8 10" opacity=".7"/>
  <g filter="url(#shadow)" font-family="Arial, sans-serif">
    ${cards}
  </g>
  <g stroke="#d38a5c" stroke-width="4" marker-end="url(#arrow)">${arrows}</g>
  <g font-family="Arial, sans-serif" font-size="16" fill="#f0c8b0" text-anchor="middle">
    ${wallText}
  </g>
  <rect x="92" y="645" width="1416" height="150" rx="24" fill="#0f1414" stroke="#4f7f8a" stroke-width="2"/>
  <text x="125" y="696" fill="#94c9dc" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="3">CONVERGENCIA LEGÍTIMA</text>
  <text x="125" y="744" fill="#f4f1e8" font-family="Georgia, serif" font-size="28">Ningún eslabón hereda la fuerza del siguiente: incisión no es desenlace.</text>
  <text x="125" y="778" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="19">Una técnica que se difunde, un volumen alto o una mejoría tras operar no sustituyen una comparación.</text>
  <text x="1505" y="850" fill="#7f8c88" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · historia de la evidencia, sin recomendaciones clínicas ni preferencias de técnica</text>
</svg>
`;
}

function matrix() {
  // Filas: los títulos de la tabla «Qué podemos comparar» de MED-028, copiados literalmente.
  // Columnas: las siete capas. Una marca indica que el expediente toca esa capa; no gradúa nada.
  // Índices de capa: 0 técnica, 1 operador, 2 equipo, 3 industria, 4 aprendizaje, 5 comparación, 6 resultado.
  const rows = [
    ["Residencia de Halsted", [1, 4, 5, 6]],
    ["Mastectomía radical", [0, 1, 5, 6]],
    ["Gibbon y la bomba", [0, 2, 3]],
    ["Circulación cruzada", [0, 2, 6]],
    ["Mühe y Mouret", [0, 1, 2, 3]],
    ["Lesiones de vía biliar", [1, 4, 6]],
    ["Difusión y ensayos de la laparoscopia", [3, 5, 6]],
    ["Volumen y resultado", [1, 2, 6]],
    ["Habilidad y rescate", [1, 2, 6]],
    ["Adopción robótica", [2, 3, 4, 5]],
    ["LACC", [0, 5, 6]],
    ["Placebo quirúrgico", [0, 5, 6]],
  ];
  const colX = (j) => 600 + j * 130;
  const head = LAYERS.map((name, j) => `<text x="${colX(j)}" y="257" text-anchor="middle">${esc(name)}</text>`).join("");
  const body = rows
    .map(([name, marks], i) => {
      const y = 282 + i * 44;
      const fill = i % 2 === 0 ? "#f7fafb" : "#e3eaed";
      const dots = marks.map((j) => `<circle cx="${colX(j)}" cy="22" r="9" fill="#26404d"/>`).join("");
      return `<g transform="translate(0 ${y})"><rect x="92" width="1416" height="44" fill="${fill}"/><text x="112" y="28" fill="#26404d" font-weight="700">${esc(name)}</text>${dots}</g>`;
    })
    .join("\n      ");
  const grid = LAYERS.slice(1)
    .map((_, j) => `<line x1="${colX(j) + 65}" y1="282" x2="${colX(j) + 65}" y2="${282 + rows.length * 44}"/>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de expedientes de cirugía especializada y mínimamente invasiva</title>
  <desc id="desc">Doce expedientes de MED-028 cruzados con siete capas: técnica, operador, equipo, industria, aprendizaje, comparación y resultado. Cada marca sólo indica que el expediente toca esa capa; no gradúa fuerza de evidencia, no forma una escalera de progreso ni reparte prioridad.</desc>
  <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#dfe7ea"/><stop offset="1" stop-color="#c5d2d7"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect x="58" y="40" width="1484" height="830" rx="28" fill="#f3f7f8" stroke="#26404d" stroke-width="2"/>
  <text x="92" y="94" fill="#2f5f6f" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">MED-028 · MATRIZ DE EVIDENCIA</text>
  <text x="92" y="145" fill="#1c2224" font-family="Georgia, serif" font-size="42" font-weight="700">Doce expedientes, siete capas, ningún pionero fundacional</text>
  <text x="92" y="183" fill="#4c5250" font-family="Arial, sans-serif" font-size="20">Qué capas toca cada expediente. Una marca es presencia, no fuerza ni ranking.</text>
  <g font-family="Arial, sans-serif" font-size="17">
    <rect x="92" y="222" width="1416" height="56" rx="10" fill="#26404d"/>
    <g fill="#eef4f6" font-size="16" font-weight="700"><text x="112" y="257">EXPEDIENTE</text>${head}</g>
    <g>
      ${body}
    </g>
    <g stroke="#b7c6cb" stroke-width="1">${grid}</g>
  </g>
  <g font-family="Arial, sans-serif" font-size="15" fill="#5a6461"><circle cx="100" cy="840" r="7" fill="#26404d"/><text x="114" y="845">el expediente toca la capa</text></g>
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
console.log("Visuales de MED-028 generadas en assets/visuales");
