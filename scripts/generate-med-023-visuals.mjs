// Genera las visuales de MED-023 (enfermería, salud pública y profesiones) de forma determinista:
// misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-med-023-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-023-enfermeria-salud-publica-profesiones";
const CHAIN = "cadena-cuidado-resultado-med-023.svg";
const MATRIX = "matriz-enfermeria-salud-publica-profesiones-med-023.svg";

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

// Portada: a la izquierda, puntos cálidos dispersos y sin firma (cuidado no registrado);
// en el centro, marcos concéntricos que se cierran (instituciones); a la derecha, una
// retícula de renglones ordenados (registros), con puntos que quedan fuera de la retícula
// (quien no entra en la lista). Ningún cuerpo, uniforme, persona, texto ni dato.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(23023);
  const parts = [];
  // Cuidado sin firma: puntos cálidos, más densos a la izquierda.
  for (let i = 0; i < 900; i += 1) {
    const x = rand() * W * 0.55;
    const y = rand() * H;
    const k = 1 - x / (W * 0.55);
    if (rand() > 0.25 + k * 0.7) continue;
    const r = 1.2 + rand() * 3.2 * k;
    const color = rand() < 0.6 ? "#e2a15f" : "#d97a6c";
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${color}" fill-opacity="${f(0.2 + k * 0.6)}"/>`);
  }
  // Instituciones: marcos redondeados concéntricos alrededor del centro.
  const cx = W * 0.5;
  const cy = H * 0.5;
  for (let s = 60; s < 560; s += 34) {
    const opacity = Math.max(0.06, 0.45 - s / 1400);
    parts.push(`<rect x="${f(cx - s)}" y="${f(cy - s * 0.62)}" width="${f(s * 2)}" height="${f(s * 1.24)}" rx="${f(s * 0.18)}" fill="none" stroke="#a9b9d6" stroke-opacity="${f(opacity)}" stroke-width="1.4"/>`);
  }
  // Registros: renglones ordenados a la derecha; algunos puntos quedan fuera.
  const top = 60;
  const step = 30;
  for (let y = top; y < H - 40; y += step) {
    const len = 180 + rand() * 260;
    parts.push(`<line x1="${f(W * 0.64)}" y1="${y}" x2="${f(W * 0.64 + len)}" y2="${y}" stroke="#86c9bd" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/>`);
    parts.push(`<circle cx="${f(W * 0.62)}" cy="${y}" r="3" fill="#86c9bd" fill-opacity=".8"/>`);
  }
  for (let i = 0; i < 60; i += 1) {
    const x = W * 0.6 + rand() * W * 0.38;
    const y = rand() * H;
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(2 + rand() * 2)}" fill="#e2a15f" fill-opacity=".45"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Del cuidado sin firma al registro: instituciones, listas y quienes quedan fuera</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, puntos cálidos dispersos; en el centro, marcos concéntricos; a la derecha, renglones ordenados con puntos que quedan fuera. No representa personas, uniformes, hospitales, datos ni un acontecimiento real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#211814"/><stop offset=".5" stop-color="#171b24"/><stop offset="1" stop-color="#0f1b1c"/></linearGradient>
    <radialGradient id="glow" cx=".5" cy=".5" r=".45"><stop stop-color="#33476b" stop-opacity=".4"/><stop offset="1" stop-color="#33476b" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

function chain() {
  const steps = [
    ["Cuidado", ["monjas · familias", "esclavizadas", "parteras"]],
    ["Testimonio", ["folleto · memoria", "propósito", "público"]],
    ["Institución", ["orden · escuela", "hospital", "asociación"]],
    ["Regulación", ["ley · registro", "título", "derivación"]],
    ["Credencial", ["diploma · lista", "quién entra", "quién no"]],
    ["Práctica", ["salas · casas", "partos", "reconstruida"]],
    ["Resultado", ["mortalidad", "comparación", "diseño"]],
  ];
  const walls = [
    ["cuidado ≠", "registro"],
    ["relato ≠", "práctica"],
    ["fundación ≠", "calidad"],
    ["título ≠", "práctica"],
    ["diploma ≠", "resultado"],
    ["práctica ≠", "desenlace"],
  ];
  const cards = steps
    .map(([title, lines], i) => {
      const x = 70 + i * 212;
      const tspans = lines.map((line, j) => `<tspan x="24" dy="${j === 0 ? 0 : 25}">${esc(line)}</tspan>`).join("");
      return `<g transform="translate(${x} 275)"><rect width="190" height="235" rx="22" fill="url(#card)"/><circle cx="38" cy="40" r="22" fill="#2f3f5c"/><text x="38" y="48" fill="#fff" text-anchor="middle" font-size="20" font-weight="700">${String(i + 1).padStart(2, "0")}</text><text x="24" y="92" fill="#1f211e" font-size="${title.length > 11 ? 20 : 22}" font-weight="700">${esc(title)}</text><text x="24" y="166" fill="#4c5250" font-size="18">${tspans}</text></g>`;
    })
    .join("\n    ");
  const arrows = steps
    .slice(0, -1)
    .map((_, i) => `<path d="M${260 + i * 212} 390H${278 + i * 212}"/>`)
    .join("");
  const wallText = walls
    .map(([a, b], i) => {
      const x = 271 + i * 212;
      return `<text x="${x}" y="550"><tspan x="${x}">${esc(a)}</tspan><tspan x="${x}" dy="21">${esc(b)}</tspan></text>`;
    })
    .join("\n    ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Cadena desde el cuidado hasta el resultado medido</title>
  <desc id="desc">Siete capas conectadas pero no automáticas: cuidado, testimonio, institución, regulación, credencial, práctica efectiva y resultado. Cada transición conserva un cortafuego: relato no es práctica, fundación no es calidad, título no es práctica y diploma no es resultado.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#141720"/><stop offset="1" stop-color="#1d2224"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#eceef4"/><stop offset="1" stop-color="#d0d6e2"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6 0 12Z" fill="#e2a15f"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#2f3f5c" opacity=".3"/>
  <circle cx="115" cy="850" r="250" fill="#8a5a2e" opacity=".18"/>
  <text x="92" y="92" fill="#86c9bd" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-023 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">Una credencial no demuestra un cuidado mejor</text>
  <text x="92" y="198" fill="#c6cdd4" font-family="Arial, sans-serif" font-size="24">Quién cuidó, quién lo contó, qué institución, qué norma y qué título son preguntas distintas del resultado.</text>
  <path d="M205 390H1395" stroke="#e2a15f" stroke-width="4" stroke-dasharray="8 10" opacity=".7"/>
  <g filter="url(#shadow)" font-family="Arial, sans-serif">
    ${cards}
  </g>
  <g stroke="#e2a15f" stroke-width="4" marker-end="url(#arrow)">${arrows}</g>
  <g font-family="Arial, sans-serif" font-size="16" fill="#f1d3b4" text-anchor="middle">
    ${wallText}
  </g>
  <rect x="92" y="645" width="1416" height="150" rx="24" fill="#10141a" stroke="#5a7aa0" stroke-width="2"/>
  <text x="125" y="696" fill="#86c9bd" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="3">CONVERGENCIA LEGÍTIMA</text>
  <text x="125" y="744" fill="#f4f1e8" font-family="Georgia, serif" font-size="28">La confianza en un resultado crece con comparación, diseño y grupos independientes;</text>
  <text x="125" y="778" fill="#c6cdd4" font-family="Arial, sans-serif" font-size="19">no con la fecha de una escuela, el número de un registro ni el prestigio de una fundadora.</text>
  <text x="1505" y="850" fill="#7f8a94" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · historia de la evidencia, sin recomendaciones clínicas ni de dotación</text>
</svg>
`;
}

function matrix() {
  const rows = [
    ["Antes de la profesión", "XIII–XIX", "manuscrito · prefacio", "actoras y repertorio", "pericia sin documentar"],
    ["Cuidadoras no registradas", "XVIII–XIX", "arqueología · cartas", "trabajo diario", "archivo del esclavizador"],
    ["Kaiserswerth", "1833–1851", "folleto institucional", "números y prueba", "sin desenlaces comparados"],
    ["Scutari · Notes", "1854–1859", "tasas · reseñas · texto", "cronología de la caída", "cambios simultáneos"],
    ["Seacole", "1854–2016", "memoria · prensa", "práctica, rechazo, memoria", "categorías en disputa"],
    ["Registro", "1887–1919", "leyes · asociaciones", "títulos y listas", "práctica no contada"],
    ["Segregación", "1879–1951", "registros escolares", "exclusión medida", "cuidado no medido"],
    ["Colonial", "1896–1966", "fondos · historia social", "jerarquía racial", "misiones no auditadas"],
    ["Parteras", "1902–XX", "series · etnografía", "credencial vs desenlace", "una región"],
    ["Salud pública · jerarquía", "1815–1916", "informes · leyes", "oficio plural, techo", "sin medida de efecto"],
    ["Dotación", "2002–2026", "altas · turnos · leyes", "asociación consistente", "sesgo; tamaño incierto"],
  ];
  const body = rows
    .map(([name, period, archive, product, limit], i) => {
      const y = 280 + i * 49;
      const fill = i % 2 === 0 ? "#f7f9fb" : "#e4e9ef";
      return `<g transform="translate(0 ${y})"><rect x="92" width="1416" height="49" fill="${fill}"/><text x="112" y="21" fill="#2f3f5c" font-weight="700">${esc(name)}</text><text x="112" y="41" fill="#5a6470" font-size="14">${esc(period)}</text><text x="430" y="31" fill="#252722">${esc(archive)}</text><text x="790" y="31" fill="#252722">${esc(product)}</text><text x="1140" y="31" fill="#8a4a2e">${esc(limit)}</text></g>`;
    })
    .join("\n      ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de enfermería, salud pública y profesiones</title>
  <desc id="desc">Once expedientes comparados por periodo, archivo, producto mejor resuelto y límite. La tabla no forma una escalera de profesionalización ni reparte el título de fundadora.</desc>
  <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e1e6ee"/><stop offset="1" stop-color="#c7d0dc"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect x="58" y="40" width="1484" height="830" rx="28" fill="#f4f6f9" stroke="#2f3f5c" stroke-width="2"/>
  <text x="92" y="94" fill="#3c6f8a" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">MED-023 · MATRIZ DE EVIDENCIA</text>
  <text x="92" y="145" fill="#1c2228" font-family="Georgia, serif" font-size="42" font-weight="700">Once archivos, once productos, ninguna fundadora única</text>
  <text x="92" y="183" fill="#4c5258" font-family="Arial, sans-serif" font-size="20">Qué tipo de evidencia sostiene cada expediente y dónde debe detenerse la inferencia.</text>
  <g font-family="Arial, sans-serif" font-size="17">
    <rect x="92" y="216" width="1416" height="56" rx="10" fill="#2f3f5c"/>
    <g fill="#eef2f7" font-size="18" font-weight="700"><text x="112" y="251">EXPEDIENTE</text><text x="430" y="251">ARCHIVO</text><text x="790" y="251">PRODUCTO RESUELTO</text><text x="1140" y="251">LÍMITE</text></g>
    <g>
      ${body}
    </g>
  </g>
  <text x="1505" y="858" fill="#5a6470" text-anchor="end" font-family="Arial, sans-serif" font-size="15">Síntesis del expediente · sin puntuaciones ni ranking</text>
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
console.log("Visuales de MED-023 generadas en assets/visuales");
