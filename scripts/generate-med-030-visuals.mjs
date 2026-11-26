// Genera las visuales de MED-030 (reproducción, discapacidad, salud mental y derechos) de forma
// determinista: misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-med-030-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-030-reproduccion-discapacidad-salud-mental-derechos";
const CHAIN = "cadena-categoria-dano-med-030.svg";
const MATRIX = "matriz-derechos-categorias-med-030.svg";

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

// Portada: a la izquierda, una retícula de etiquetas rectangulares de tamaño desigual (nombres
// que clasifican); al centro, recintos concéntricos con un tramo abierto (institución que encierra
// y se abre); a la derecha, puntos que salen del recinto y se dispersan (movimiento). Ningún
// cuerpo, paciente, instrumento, documento, logotipo, dato ni acontecimiento real.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(30030);
  const parts = [];
  const cols = 9;
  const rows = 16;
  const cw = (W * 0.3) / cols;
  const ch = (H - 120) / rows;
  for (let c = 0; c < cols; c += 1) {
    for (let r = 0; r < rows; r += 1) {
      const w = cw * (0.35 + rand() * 0.55);
      const x = 50 + c * cw;
      const y = 60 + r * ch + ch * 0.25;
      const warm = rand() < 0.18;
      parts.push(`<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(ch * 0.45)}" rx="4" fill="${warm ? "#d58a6a" : "#9fb8b0"}" fill-opacity="${f(0.25 + rand() * 0.5)}"/>`);
    }
  }
  const cx = W * 0.52;
  const cy = H * 0.5;
  for (let i = 0; i < 7; i += 1) {
    const rad = 70 + i * 48;
    const gap = 0.35 + i * 0.05;
    const start = Math.PI * 0.12;
    const end = Math.PI * 2 - gap + start;
    const x1 = cx + rad * Math.cos(start);
    const y1 = cy + rad * Math.sin(start);
    const x2 = cx + rad * Math.cos(end);
    const y2 = cy + rad * Math.sin(end);
    parts.push(`<path d="M${f(x1)} ${f(y1)} A${rad} ${rad} 0 1 1 ${f(x2)} ${f(y2)}" fill="none" stroke="#cfd6d8" stroke-opacity="${f(0.18 + i * 0.07)}" stroke-width="${f(2 + rand() * 2)}"/>`);
  }
  for (let i = 0; i < 650; i += 1) {
    const t = rand();
    const ang = (rand() * 2 - 1) * (0.12 + t * 0.55);
    const dist = 60 + t * (W * 0.46);
    const x = cx + dist * Math.cos(ang);
    const y = cy + dist * Math.sin(ang) * 1.2;
    if (x > W - 20 || y < 20 || y > H - 20) continue;
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(1.3 + rand() * 2.4)}" fill="#f4efe3" fill-opacity="${f(0.15 + t * 0.6)}"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Etiquetas, recintos y salida: categoría, institución y movimiento</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, una retícula de rectángulos de anchos desiguales en dos tonos; al centro, arcos concéntricos abiertos por un mismo lado; a la derecha, puntos que salen por la abertura y se dispersan. No representa personas, pacientes, instrumentos, documentos, datos ni un acontecimiento real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#141615"/><stop offset=".5" stop-color="#171a1c"/><stop offset="1" stop-color="#1c1816"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

function chain() {
  const steps = [
    ["Categoría", ["débil mental", "ley de 1933", "DSM-I y II"]],
    ["Diagnóstico", ["kappa", "DSM-III", "validez"]],
    ["Institución", ["asilo", "programa", "tribunal"]],
    ["Intervención", ["esterilización", "lobotomía", "píldora"]],
    ["Consentimiento", ["firma", "lengua", "artículo 12"]],
    ["Movimiento", ["APA 1973", "UPIAS", "CEDAW"]],
    ["Daño", ["recuento", "reparación", "disculpa"]],
  ];
  const walls = [
    ["categoría ≠", "diagnóstico"],
    ["diagnóstico ≠", "institución"],
    ["institución ≠", "cuidado"],
    ["intervención ≠", "beneficio"],
    ["firma ≠", "consentimiento"],
    ["movimiento ≠", "prueba"],
  ];
  const cards = steps
    .map(([title, lines], i) => {
      const x = 70 + i * 212;
      const tspans = lines.map((line, j) => `<tspan x="24" dy="${j === 0 ? 0 : 25}">${esc(line)}</tspan>`).join("");
      return `<g transform="translate(${x} 275)"><rect width="190" height="235" rx="22" fill="url(#card)"/><circle cx="38" cy="40" r="22" fill="#2d3f55"/><text x="38" y="48" fill="#fff" text-anchor="middle" font-size="20" font-weight="700">${String(i + 1).padStart(2, "0")}</text><text x="24" y="92" fill="#1f211e" font-size="${title.length > 12 ? 18 : 22}" font-weight="700">${esc(title)}</text><text x="24" y="166" fill="#4c5250" font-size="18">${tspans}</text></g>`;
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
  <title id="title">Cadena desde la categoría hasta el daño</title>
  <desc id="desc">Siete capas conectadas pero no automáticas: categoría, diagnóstico, institución, intervención, consentimiento, movimiento y daño. Cada transición conserva un cortafuego: categoría no es diagnóstico, diagnóstico no es institución, institución no es cuidado, intervención no es beneficio, firma no es consentimiento y movimiento no es prueba.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#11161b"/><stop offset="1" stop-color="#1b2228"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e8edf2"/><stop offset="1" stop-color="#cbd5de"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6 0 12Z" fill="#e0a15f"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#2d3f55" opacity=".3"/>
  <circle cx="115" cy="850" r="250" fill="#8e5a3c" opacity=".18"/>
  <text x="92" y="92" fill="#9cc2d8" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-030 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="37" font-weight="700">Una categoría médica no autoriza por sí sola una intervención</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="22">Categoría, diagnóstico, institución, intervención, consentimiento, movimiento y daño: ninguna capa hereda a las demás.</text>
  <path d="M205 390H1395" stroke="#e0a15f" stroke-width="4" stroke-dasharray="8 10" opacity=".7"/>
  <g filter="url(#shadow)" font-family="Arial, sans-serif">
    ${cards}
  </g>
  <g stroke="#e0a15f" stroke-width="4" marker-end="url(#arrow)">${arrows}</g>
  <g font-family="Arial, sans-serif" font-size="15" fill="#f0d3b0" text-anchor="middle">
    ${wallText}
  </g>
  <rect x="92" y="645" width="1416" height="150" rx="24" fill="#0f1317" stroke="#5b7f9a" stroke-width="2"/>
  <text x="125" y="696" fill="#9cc2d8" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="3">CONVERGENCIA LEGÍTIMA</text>
  <text x="125" y="744" fill="#f4f1e8" font-family="Georgia, serif" font-size="25">El juicio es firme cuando criterios, validez, cuidado, comparador y consentimiento libre coinciden;</text>
  <text x="125" y="778" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="19">se rompe cuando una etiqueta, una sentencia, un premio, una firma o un voto sustituyen a las capas que faltan.</text>
  <text x="1505" y="850" fill="#7f8c88" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · historia de la evidencia, sin indicaciones clínicas, legales ni dosis</text>
</svg>
`;
}

function matrix() {
  const rows = [
    ["Eugenesia en democracias", "1909–2002", "274 U.S. 200 · Lombardo · SOU", "ley, sentencia y escala", "proporción forzada en Suecia"],
    ["Alemania", "1933–1945", "USHMM · The Lancet 2023", "ley y recuento interno", "total de víctimas estimado"],
    ["EE. UU. años setenta", "1971–1978", "GAO 1976 · Stern · Lawrence", "recuento mínimo y formularios", "coerción no evaluada"],
    ["Perú", "1996–2024", "Ewig · CIDH · CEDAW", "política y decisión internacional", "cifras citadas, no auditadas"],
    ["Píldora y Puerto Rico", "1956–1965", "Junod y Marks · Presser", "ensayo y aprobación", "consentimiento vía secundarias"],
    ["FIV y catorce días", "1978–2021", "Lancet · Warnock · ISSCR", "norma antes de expansión", "línea de política"],
    ["Asilos", "1955–2012", "Lamb · Goffman · Fazel", "camas y prevalencia en prisión", "causalidad no establecida"],
    ["Lobotomía", "1935–1960", "Tierney · Valenstein", "serie y premio", "sin comparador"],
    ["Rosenhan", "1973–2023", "Science · Cahalan · Scull", "experimento y auditoría", "registros parciales"],
    ["DSM", "1952–2017", "Kendell · Drescher · Regier", "confiabilidad y retirada", "confiabilidad no es validez"],
    ["Psiquiatría política", "1960–2010", "van Voren · Bloch", "presos y sanción profesional", "estimaciones"],
    ["Discapacidad", "1976–2026", "UPIAS · CDPD · OMS", "modelo y tratado", "artículo 12 en disputa"],
  ];
  const body = rows
    .map(([name, period, archive, product, limit], i) => {
      const y = 282 + i * 46;
      const fill = i % 2 === 0 ? "#f7f9fb" : "#e3e9ee";
      return `<g transform="translate(0 ${y})"><rect x="92" width="1416" height="46" fill="${fill}"/><text x="112" y="21" fill="#2d3f55" font-weight="700">${esc(name)}</text><text x="112" y="39" fill="#5a6461" font-size="13">${esc(period)}</text><text x="392" y="29" fill="#252722">${esc(archive)}</text><text x="760" y="29" fill="#252722">${esc(product)}</text><text x="1122" y="29" fill="#8e5a3c">${esc(limit)}</text></g>`;
    })
    .join("\n      ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de reproducción, discapacidad, salud mental y derechos</title>
  <desc id="desc">Doce expedientes comparados por periodo, archivo, producto mejor resuelto y límite. La tabla no ordena daños ni forma una escalera de progreso.</desc>
  <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e2e8ee"/><stop offset="1" stop-color="#c7d2db"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect x="58" y="40" width="1484" height="830" rx="28" fill="#f3f6f9" stroke="#2d3f55" stroke-width="2"/>
  <text x="92" y="94" fill="#3f5f7a" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">MED-030 · MATRIZ DE EVIDENCIA</text>
  <text x="92" y="145" fill="#1c2228" font-family="Georgia, serif" font-size="42" font-weight="700">Doce archivos, siete capas, ningún progreso lineal</text>
  <text x="92" y="183" fill="#4c5250" font-family="Arial, sans-serif" font-size="20">Qué tipo de evidencia sostiene cada expediente y dónde debe detenerse la inferencia.</text>
  <g font-family="Arial, sans-serif" font-size="16">
    <rect x="92" y="222" width="1416" height="56" rx="10" fill="#2d3f55"/>
    <g fill="#eef3f7" font-size="18" font-weight="700"><text x="112" y="257">EXPEDIENTE</text><text x="392" y="257">ARCHIVO</text><text x="760" y="257">PRODUCTO RESUELTO</text><text x="1122" y="257">LÍMITE</text></g>
    <g>
      ${body}
    </g>
  </g>
  <text x="1505" y="858" fill="#5a6461" text-anchor="end" font-family="Arial, sans-serif" font-size="15">Síntesis del expediente · sin puntuaciones ni ranking de daños</text>
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
console.log("Visuales de MED-030 generadas en assets/visuales");
