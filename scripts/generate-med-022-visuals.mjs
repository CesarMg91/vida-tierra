// Genera las visuales de MED-022 (teoría microbiana y laboratorio) de forma determinista:
// misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-med-022-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-022-teoria-microbiana-laboratorio";
const CHAIN = "cadena-observacion-atribucion-med-022.svg";
const MATRIX = "matriz-teoria-microbiana-laboratorio-med-022.svg";

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

// Portada: a la izquierda, puntos dispersos sin orden (lo observado sin criterio);
// en el centro, discos concéntricos de borde limpio (el aislamiento en placa);
// a la derecha, una red de nodos enlazados (comunidad y atribución distribuida).
// Ningún organismo real, ninguna micrografía, ningún dato.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(22022);
  const parts = [];
  // Campo disperso de la izquierda: puntos sin estructura.
  for (let i = 0; i < 620; i += 1) {
    const x = rand() * W * 0.46;
    const y = rand() * H;
    const k = 1 - x / (W * 0.46);
    if (rand() > 0.3 + k * 0.65) continue;
    const r = 1 + rand() * 3.4 * k;
    const color = rand() < 0.5 ? "#6fa8c8" : "#9ad0c0";
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${color}" fill-opacity="${f(0.2 + k * 0.5)}"/>`);
  }
  // Discos de la zona central: colonias en placa, anillos limpios y vacíos por dentro.
  const colonies = [
    [672, 300, 92],
    [800, 470, 128],
    [634, 622, 74],
    [876, 238, 56],
    [930, 664, 86],
  ];
  for (const [cx, cy, r] of colonies) {
    for (let k = 0; k < 4; k += 1) {
      parts.push(`<circle cx="${cx}" cy="${cy}" r="${f(r - k * 9)}" fill="none" stroke="#e4c77a" stroke-opacity="${f(0.42 - k * 0.07)}" stroke-width="1.6"/>`);
    }
  }
  // Red de la derecha: nodos enlazados, ninguno dominante.
  const nodes = [];
  for (let i = 0; i < 46; i += 1) {
    nodes.push([W * 0.6 + rand() * W * 0.36, 60 + rand() * (H - 120)]);
  }
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const dx = nodes[i][0] - nodes[j][0];
      const dy = nodes[i][1] - nodes[j][1];
      const d = Math.hypot(dx, dy);
      if (d > 132) continue;
      parts.push(`<line x1="${f(nodes[i][0])}" y1="${f(nodes[i][1])}" x2="${f(nodes[j][0])}" y2="${f(nodes[j][1])}" stroke="#7fc4b4" stroke-opacity="${f(0.34 - d / 600)}" stroke-width="1"/>`);
    }
  }
  for (const [x, y] of nodes) {
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(2.6 + rand() * 3.2)}" fill="#8fd3c6" fill-opacity=".72"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Del punto disperso a la red: observar, aislar, atribuir</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, puntos dispersos sin orden; en el centro, anillos concéntricos vacíos; a la derecha, una red de nodos enlazados sin centro. No representa organismos, micrografías, pacientes, datos ni un acontecimiento real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#0f171c"/><stop offset=".5" stop-color="#141d1e"/><stop offset="1" stop-color="#0d1a19"/></linearGradient>
    <radialGradient id="glow" cx=".5" cy=".5" r=".45"><stop stop-color="#2f4f5e" stop-opacity=".42"/><stop offset="1" stop-color="#2f4f5e" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

function chain() {
  const steps = [
    ["Observación", ["tejido · tinción", "presencia", "¿y los sanos?"]],
    ["Aislamiento", ["separar", "candidato", "residente o no"]],
    ["Cultivo", ["medio · placa", "cepa pura", "lo no cultivable"]],
    ["Experimento", ["huésped · vía", "dosis", "daño inducido"]],
    ["Epidemiología", ["expuestos", "denominador", "portadores sanos"]],
    ["Mecanismo", ["toxina · gen", "comunidad", "respuesta inmune"]],
    ["Atribución", ["qué fracción", "en qué huésped", "revisable"]],
  ];
  const walls = [
    ["presencia ≠", "causa"],
    ["aislado ≠", "patógeno"],
    ["cultivo ≠", "enfermedad"],
    ["modelo ≠", "persona"],
    ["asociación ≠", "mecanismo"],
    ["mecanismo ≠", "atribución"],
  ];
  const cards = steps
    .map(([title, lines], i) => {
      const x = 70 + i * 212;
      const tspans = lines.map((line, j) => `<tspan x="24" dy="${j === 0 ? 0 : 25}">${esc(line)}</tspan>`).join("");
      return `<g transform="translate(${x} 275)"><rect width="190" height="235" rx="22" fill="url(#card)"/><circle cx="38" cy="40" r="22" fill="#24434a"/><text x="38" y="48" fill="#fff" text-anchor="middle" font-size="20" font-weight="700">${String(i + 1).padStart(2, "0")}</text><text x="24" y="92" fill="#1f211e" font-size="${title.length > 11 ? 19 : 22}" font-weight="700">${esc(title)}</text><text x="24" y="166" fill="#4c5250" font-size="17">${tspans}</text></g>`;
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
  <title id="title">Cadena desde la observación hasta la atribución de un agente</title>
  <desc id="desc">Siete capas conectadas pero no automáticas: observación, aislamiento, cultivo, reproducción experimental, epidemiología, mecanismo y atribución. Cada transición conserva un cortafuego: presencia no es causa, cultivo no es enfermedad, modelo no es persona, asociación no es mecanismo.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101718"/><stop offset="1" stop-color="#1b2422"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e8f0f1"/><stop offset="1" stop-color="#cbdad7"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6 0 12Z" fill="#e4c77a"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#24434a" opacity=".3"/>
  <circle cx="115" cy="850" r="250" fill="#3c6f63" opacity=".18"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-022 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">Un microbio aislado no explica una enfermedad</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="24">Observar, aislar, cultivar, inocular, contar y explicar son evidencias distintas; ninguna hereda a las demás.</text>
  <path d="M205 390H1395" stroke="#e4c77a" stroke-width="4" stroke-dasharray="8 10" opacity=".7"/>
  <g filter="url(#shadow)" font-family="Arial, sans-serif">
    ${cards}
  </g>
  <g stroke="#e4c77a" stroke-width="4" marker-end="url(#arrow)">${arrows}</g>
  <g font-family="Arial, sans-serif" font-size="16" fill="#f0dcae" text-anchor="middle">
    ${wallText}
  </g>
  <rect x="92" y="645" width="1416" height="150" rx="24" fill="#0f1414" stroke="#4f8a80" stroke-width="2"/>
  <text x="125" y="696" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="3">CONVERGENCIA LEGÍTIMA</text>
  <text x="125" y="744" fill="#f4f1e8" font-family="Georgia, serif" font-size="28">La confianza crece cuando tejido, cultivo, modelo, población y mecanismo coinciden</text>
  <text x="125" y="778" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="19">y cada uno declara su límite; disminuye cuando un hallazgo, una placa o una secuencia sustituyen al denominador.</text>
  <text x="1505" y="850" fill="#7f8c88" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · historia de la evidencia, sin indicaciones clínicas ni dosis</text>
</svg>
`;
}

function matrix() {
  const rows = [
    ["Contagio y semillas", "Antigüedad–1546", "textos médicos", "vocabulario de transmisión", "entidades lógicas, no observadas"],
    ["Henle y miasmatistas", "1840–1892", "conjetura · higiene", "criterio e interacción", "germen postulado, nunca aislado"],
    ["Pasteur", "1857–1885", "cuaderno · publicación", "fermentación y vacunas", "informe distinto de la práctica"],
    ["Carbunco", "1876", "artículo · animales", "enfermedad inducida", "casos naturales escasos"],
    ["Tuberculosis", "1882–1890", "tinción · agar · placa", "agente de una crónica mayor", "la tuberculina fracasó"],
    ["Cólera", "1854–1892", "comisión · agua", "vibrión en cultivo puro", "portadores sanos"],
    ["Postulados", "1878–1905", "artículos e historiografía", "exigencia de necesidad", "texto y autoría disputados"],
    ["Virus y priones", "1892–1982", "filtro · bioquímica", "agentes fuera del molde", "el cultivo deja de aplicar"],
    ["Gen y secuencia", "1988–1996", "16S · mutantes", "atribución sin cultivo", "secuencia no es causa"],
    ["Cohorte y microbioma", "2005–2026", "ensayo · metagenoma", "denominador y comunidad", "detectar no es atribuir"],
  ];
  const body = rows
    .map(([name, period, archive, product, limit], i) => {
      const y = 286 + i * 54;
      const fill = i % 2 === 0 ? "#f7fbfa" : "#e3ecea";
      return `<g transform="translate(0 ${y})"><rect x="92" width="1416" height="54" fill="${fill}"/><text x="112" y="23" fill="#24434a" font-weight="700">${esc(name)}</text><text x="112" y="44" fill="#5a6461" font-size="15">${esc(period)}</text><text x="392" y="34" fill="#252722">${esc(archive)}</text><text x="760" y="34" fill="#252722">${esc(product)}</text><text x="1122" y="34" fill="#8e3f2e">${esc(limit)}</text></g>`;
    })
    .join("\n      ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de teoría microbiana y laboratorio</title>
  <desc id="desc">Diez expedientes comparados por periodo, archivo, producto mejor resuelto y límite. La tabla no forma una escalera de progreso ni reparte prioridad entre escuelas o países.</desc>
  <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#dfe9e7"/><stop offset="1" stop-color="#c4d4d1"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect x="58" y="40" width="1484" height="830" rx="28" fill="#f3f8f7" stroke="#24434a" stroke-width="2"/>
  <text x="92" y="94" fill="#2f6f66" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">MED-022 · MATRIZ DE EVIDENCIA</text>
  <text x="92" y="145" fill="#1c2422" font-family="Georgia, serif" font-size="42" font-weight="700">Diez archivos, diez productos, ningún agente suficiente</text>
  <text x="92" y="183" fill="#4c5250" font-family="Arial, sans-serif" font-size="20">Qué tipo de evidencia sostiene cada expediente y dónde debe detenerse la atribución.</text>
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
console.log("Visuales de MED-022 generadas en assets/visuales");
