// Genera las visuales de MED-021 (anestesia, analgesia y antisepsia) de forma determinista:
// misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-med-021-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-021-anestesia-analgesia-antisepsia";
const CHAIN = "cadena-dolor-infeccion-adopcion-med-021.svg";
const MATRIX = "matriz-anestesia-antisepsia-med-021.svg";

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

// Portada: a la izquierda, trazos dispersos y cálidos (dolor e infección sin control);
// en el centro, ondas que respiran (inhalación); a la derecha, una retícula ordenada y fría
// (control aséptico). Ningún cuerpo, instrumento real, sangre, texto ni sustancia.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(21021);
  const parts = [];
  // Campo disperso: segmentos cortos y cálidos que se vuelven menos densos hacia el centro.
  for (let i = 0; i < 520; i += 1) {
    const x = rand() * W * 0.52;
    const y = rand() * H;
    const k = 1 - x / (W * 0.52);
    if (rand() > 0.35 + k * 0.6) continue;
    const a = rand() * Math.PI * 2;
    const len = 6 + rand() * 22 * k;
    const color = rand() < 0.55 ? "#d9785b" : "#e9b65c";
    parts.push(`<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + Math.cos(a) * len)}" y2="${f(y + Math.sin(a) * len)}" stroke="${color}" stroke-opacity="${f(0.25 + k * 0.6)}" stroke-width="${f(1.2 + k * 1.6)}" stroke-linecap="round"/>`);
  }
  // Ondas de inhalación: arcos concéntricos centrados a la izquierda del centro.
  const cx = W * 0.47;
  const cy = H * 0.52;
  for (let r = 40; r < 640; r += 26) {
    const opacity = Math.max(0.05, 0.42 - r / 1700);
    parts.push(`<circle cx="${f(cx)}" cy="${f(cy)}" r="${r}" fill="none" stroke="#9cb7d8" stroke-opacity="${f(opacity)}" stroke-width="1.4"/>`);
  }
  // Retícula aséptica: puntos ordenados que ganan regularidad hacia la derecha.
  const step = 34;
  for (let x = W * 0.5; x < W - 20; x += step) {
    for (let y = 24; y < H - 10; y += step) {
      const t = (x - W * 0.5) / (W * 0.5);
      const jitter = (1 - t) * 10;
      const px = x + (rand() - 0.5) * jitter;
      const py = y + (rand() - 0.5) * jitter;
      parts.push(`<circle cx="${f(px)}" cy="${f(py)}" r="${f(1.4 + t * 1.6)}" fill="#8fd3c6" fill-opacity="${f(0.25 + t * 0.55)}"/>`);
    }
  }
  // Líneas guía horizontales en la zona ordenada.
  for (let y = 24; y < H; y += step * 4) {
    parts.push(`<line x1="${f(W * 0.62)}" y1="${y}" x2="${W - 30}" y2="${y}" stroke="#5fb3a1" stroke-opacity=".18" stroke-width="1"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Del trazo disperso a la retícula: dolor, inhalación y control aséptico</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, trazos cálidos dispersos; en el centro, ondas concéntricas; a la derecha, una retícula de puntos cada vez más ordenada. No representa cuerpos, sustancias, instrumentos, datos ni un acontecimiento real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#1f1512"/><stop offset=".5" stop-color="#141c20"/><stop offset="1" stop-color="#0d1a1b"/></linearGradient>
    <radialGradient id="glow" cx=".47" cy=".52" r=".45"><stop stop-color="#2c4d6d" stop-opacity=".45"/><stop offset="1" stop-color="#2c4d6d" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

function chain() {
  const steps = [
    ["Problema", ["dolor · miedo", "infección · muerte", "lo no operable"]],
    ["Testimonio", ["«no sintió nada»", "relato · interés", "prioridad"]],
    ["Demostración", ["función pública", "testigos", "éxito o fracaso"]],
    ["Serie", ["casos listados", "selección", "desenlace"]],
    ["Comparación", ["periodo · sala", "control histórico", "denominador"]],
    ["Mecanismo", ["animal · cultivo", "explicación", "modelo"]],
    ["Adopción", ["país · hospital", "a quién alivia", "nuevo daño"]],
  ];
  const walls = [
    ["problema ≠", "solución"],
    ["relato ≠", "efecto"],
    ["función ≠", "seguridad"],
    ["serie ≠", "efecto causal"],
    ["contraste ≠", "causa aislada"],
    ["modelo ≠", "desenlace"],
  ];
  const cards = steps
    .map(([title, lines], i) => {
      const x = 70 + i * 212;
      const tspans = lines.map((line, j) => `<tspan x="24" dy="${j === 0 ? 0 : 25}">${esc(line)}</tspan>`).join("");
      return `<g transform="translate(${x} 275)"><rect width="190" height="235" rx="22" fill="url(#card)"/><circle cx="38" cy="40" r="22" fill="#24434a"/><text x="38" y="48" fill="#fff" text-anchor="middle" font-size="20" font-weight="700">${String(i + 1).padStart(2, "0")}</text><text x="24" y="92" fill="#1f211e" font-size="${title.length > 11 ? 20 : 22}" font-weight="700">${esc(title)}</text><text x="24" y="166" fill="#4c5250" font-size="18">${tspans}</text></g>`;
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
  <title id="title">Cadena desde el dolor y la infección hasta la adopción y sus nuevos daños</title>
  <desc id="desc">Siete capas conectadas pero no automáticas: problema, testimonio, demostración, serie, comparación, mecanismo y adopción. Cada transición conserva un cortafuego: relato no es efecto, función no es seguridad, serie no es efecto causal, contraste no es causa aislada y modelo no es desenlace.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#121719"/><stop offset="1" stop-color="#1c2422"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e6eef0"/><stop offset="1" stop-color="#c9d8d6"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6 0 12Z" fill="#d9785b"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#24434a" opacity=".3"/>
  <circle cx="115" cy="850" r="250" fill="#8e3f2e" opacity=".18"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-021 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">Una sala insensible no demuestra una cirugía más segura</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="24">Testimonio, demostración, serie, comparación y mecanismo son evidencias distintas; ninguna hereda a las demás.</text>
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
  <text x="125" y="744" fill="#f4f1e8" font-family="Georgia, serif" font-size="28">La confianza crece cuando cadenas independientes coinciden y declaran denominador,</text>
  <text x="125" y="778" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="19">contraste, mecanismo y daño; disminuye cuando una fecha, un héroe o una serie sustituyen a la comparación.</text>
  <text x="1505" y="850" fill="#7f8c88" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · historia de la evidencia, sin indicaciones clínicas ni dosis</text>
</svg>
`;
}

function matrix() {
  const rows = [
    ["Antes de 1846", "Antigüedad–XIX", "recetario · tratado", "repertorio de soporíferos", "sin dosis, serie ni desenlace"],
    ["Hanaoka · India británica", "1804–1850s", "síntesis · historia colonial", "rutas no bostonianas", "prioridad retrospectiva"],
    ["Óxido nitroso", "1800–1845", "libro · declaraciones", "conjetura y función fallida", "una función no es tasa"],
    ["Éter", "1842–1849", "carta · revista · hospital", "demostración y difusión", "prioridad por definición"],
    ["Cloroformo", "1847–1891", "casuística · comisión", "catálogo de muertes", "numerador sin denominador"],
    ["Local · raquídea", "1884–1899", "publicación primaria", "efecto local visible", "daños contados después"],
    ["Mortalidad", "1890s–1954", "hoja · estudio multicéntrico", "tasa con denominador", "causa retrospectiva"],
    ["Semmelweis", "1847–1861", "series de dos clínicas", "comparación natural", "no aleatoria"],
    ["Lister", "1867–1890", "Lancet · críticos · encuesta", "serie y control histórico", "n pequeño, ciclos, niños"],
    ["Asepsia · guantes", "1881–1900", "laboratorio · manual", "control trasladado", "laboratorio, no desenlace"],
  ];
  const body = rows
    .map(([name, period, archive, product, limit], i) => {
      const y = 286 + i * 54;
      const fill = i % 2 === 0 ? "#f7fbfa" : "#e3ecea";
      return `<g transform="translate(0 ${y})"><rect x="92" width="1416" height="54" fill="${fill}"/><text x="112" y="23" fill="#24434a" font-weight="700">${esc(name)}</text><text x="112" y="44" fill="#5a6461" font-size="15">${esc(period)}</text><text x="392" y="34" fill="#252722">${esc(archive)}</text><text x="760" y="34" fill="#252722">${esc(product)}</text><text x="1122" y="34" fill="#8e3f2e">${esc(limit)}</text></g>`;
    })
    .join("\n      ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de anestesia, analgesia y antisepsia</title>
  <desc id="desc">Diez expedientes comparados por periodo, archivo, producto mejor resuelto y límite. La tabla no forma una escalera de progreso ni reparte prioridad.</desc>
  <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#dfe9e7"/><stop offset="1" stop-color="#c4d4d1"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect x="58" y="40" width="1484" height="830" rx="28" fill="#f3f8f7" stroke="#24434a" stroke-width="2"/>
  <text x="92" y="94" fill="#2f6f66" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">MED-021 · MATRIZ DE EVIDENCIA</text>
  <text x="92" y="145" fill="#1c2422" font-family="Georgia, serif" font-size="42" font-weight="700">Diez archivos, diez productos, ninguna fecha fundacional</text>
  <text x="92" y="183" fill="#4c5250" font-family="Arial, sans-serif" font-size="20">Qué tipo de evidencia sostiene cada expediente y dónde debe detenerse la inferencia.</text>
  <g font-family="Arial, sans-serif" font-size="17">
    <rect x="92" y="222" width="1416" height="56" rx="10" fill="#24434a"/>
    <g fill="#eef6f4" font-size="18" font-weight="700"><text x="112" y="257">EXPEDIENTE</text><text x="392" y="257">ARCHIVO</text><text x="760" y="257">PRODUCTO RESUELTO</text><text x="1122" y="257">LÍMITE</text></g>
    <g>
      ${body}
    </g>
  </g>
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
console.log("Visuales de MED-021 generadas en assets/visuales");
