// Genera las visuales de MED-025 (imagen, laboratorio y clasificación) de forma determinista:
// misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-med-025-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-025-imagen-laboratorio-clasificacion";
const CHAIN = "cadena-senal-consecuencia-med-025.svg";
const MATRIX = "matriz-imagen-laboratorio-med-025.svg";

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

// Portada: a la izquierda, bandas horizontales de grises con densidades variables (una señal
// sin forma reconocible); al centro, un continuo de puntos cortado por una línea vertical
// discontinua (un umbral); a la derecha, una retícula de celdas de distinto tono (categorías).
// Ningún cuerpo, órgano, placa real, texto, dato ni aparato.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(25025);
  const parts = [];
  const leftW = W * 0.36;
  for (let y = 0; y < H; y += 6) {
    const band = 0.5 + 0.5 * Math.sin(y / 47 + rand() * 0.6) * Math.cos(y / 131);
    let x = 0;
    while (x < leftW) {
      const w = 14 + rand() * 60;
      const o = Math.max(0.04, Math.min(0.75, band * 0.55 + rand() * 0.25 - (x / leftW) * 0.2));
      parts.push(`<rect x="${f(x)}" y="${y}" width="${f(w)}" height="5" fill="#cfd6d8" fill-opacity="${f(o)}"/>`);
      x += w + rand() * 6;
    }
  }
  const tx = W * 0.52;
  for (let i = 0; i < 900; i += 1) {
    const x = W * 0.38 + rand() * W * 0.28;
    const y = 40 + rand() * (H - 80);
    const left = x < tx;
    const color = left ? "#7fb8c4" : "#e0a15f";
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(1.4 + rand() * 2.4)}" fill="${color}" fill-opacity="${f(0.3 + rand() * 0.5)}"/>`);
  }
  parts.push(`<line x1="${f(tx)}" y1="30" x2="${f(tx)}" y2="${H - 30}" stroke="#f4efe3" stroke-opacity=".7" stroke-width="2.5" stroke-dasharray="14 12"/>`);
  const cols = 9;
  const rows = 11;
  const gx = W * 0.69;
  const cw = (W * 0.29) / cols;
  const ch = (H - 120) / rows;
  const palette = ["#2f6f66", "#3f5f7a", "#8e5a3c", "#5d4a73", "#7a6a3a"];
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const fill = palette[Math.floor(rand() * palette.length)];
      parts.push(`<rect x="${f(gx + c * cw + 3)}" y="${f(60 + r * ch + 3)}" width="${f(cw - 6)}" height="${f(ch - 6)}" rx="4" fill="${fill}" fill-opacity="${f(0.35 + rand() * 0.5)}"/>`);
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">De la densidad al umbral y a la retícula: señal, corte y categoría</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, bandas horizontales de grises con densidades variables; en el centro, un continuo de puntos cortado por una línea vertical discontinua; a la derecha, una retícula de celdas de distintos tonos. No representa cuerpos, órganos, placas reales, aparatos, datos ni un acontecimiento real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#121516"/><stop offset=".5" stop-color="#151b1f"/><stop offset="1" stop-color="#1a1716"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

function chain() {
  const steps = [
    ["Señal", ["sombra · color", "conteo · eco", "concentración"]],
    ["Instrumento", ["tubo · reactivo", "escáner · red", "daño propio"]],
    ["Lectura", ["radiólogo", "patólogo · código", "acuerdo"]],
    ["Umbral", ["PSA · presión", "percentil 99", "convención"]],
    ["Categoría", ["CIE · infarto", "incidentaloma", "prevalencia"]],
    ["Exactitud", ["referencia", "espectro", "kappa · AUC"]],
    ["Consecuencia", ["desenlace", "sobrediagnóstico", "daño"]],
  ];
  const walls = [
    ["señal ≠", "lesión"],
    ["instrumento ≠", "cuerpo"],
    ["lectura ≠", "hecho"],
    ["umbral ≠", "frontera"],
    ["código ≠", "enfermedad"],
    ["exactitud ≠", "beneficio"],
  ];
  const cards = steps
    .map(([title, lines], i) => {
      const x = 70 + i * 212;
      const tspans = lines.map((line, j) => `<tspan x="24" dy="${j === 0 ? 0 : 25}">${esc(line)}</tspan>`).join("");
      return `<g transform="translate(${x} 275)"><rect width="190" height="235" rx="22" fill="url(#card)"/><circle cx="38" cy="40" r="22" fill="#2d3f55"/><text x="38" y="48" fill="#fff" text-anchor="middle" font-size="20" font-weight="700">${String(i + 1).padStart(2, "0")}</text><text x="24" y="92" fill="#1f211e" font-size="${title.length > 11 ? 19 : 22}" font-weight="700">${esc(title)}</text><text x="24" y="166" fill="#4c5250" font-size="18">${tspans}</text></g>`;
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
  <title id="title">Cadena desde la señal hasta la consecuencia</title>
  <desc id="desc">Siete capas conectadas pero no automáticas: señal, instrumento, lectura, umbral, categoría, exactitud y consecuencia. Cada transición conserva un cortafuego: señal no es lesión, instrumento no es cuerpo, lectura no es hecho, umbral no es frontera, código no es enfermedad y exactitud no es beneficio.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#11161b"/><stop offset="1" stop-color="#1b2228"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e8edf2"/><stop offset="1" stop-color="#cbd5de"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6 0 12Z" fill="#e0a15f"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#2d3f55" opacity=".3"/>
  <circle cx="115" cy="850" r="250" fill="#8e5a3c" opacity=".18"/>
  <text x="92" y="92" fill="#9cc2d8" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-025 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="37" font-weight="700">Una imagen más nítida no demuestra una enfermedad más frecuente</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="24">Señal, instrumento, lectura, umbral, categoría, exactitud y consecuencia: ninguna capa hereda a las demás.</text>
  <path d="M205 390H1395" stroke="#e0a15f" stroke-width="4" stroke-dasharray="8 10" opacity=".7"/>
  <g filter="url(#shadow)" font-family="Arial, sans-serif">
    ${cards}
  </g>
  <g stroke="#e0a15f" stroke-width="4" marker-end="url(#arrow)">${arrows}</g>
  <g font-family="Arial, sans-serif" font-size="16" fill="#f0d3b0" text-anchor="middle">
    ${wallText}
  </g>
  <rect x="92" y="645" width="1416" height="150" rx="24" fill="#0f1317" stroke="#5b7f9a" stroke-width="2"/>
  <text x="125" y="696" fill="#9cc2d8" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="3">CONVERGENCIA LEGÍTIMA</text>
  <text x="125" y="744" fill="#f4f1e8" font-family="Georgia, serif" font-size="28">La confianza crece cuando lector, umbral, referencia y desenlace se declaran y coinciden;</text>
  <text x="125" y="778" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="19">disminuye cuando una imagen, un código, una prueba más sensible o un algoritmo sustituyen a la comparación de desenlaces.</text>
  <text x="1505" y="850" fill="#7f8c88" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · historia de la evidencia, sin indicaciones de pruebas ni tratamientos</text>
</svg>
`;
}

function matrix() {
  const rows = [
    ["Rayos X y daños", "1895–1950", "Röntgen · Sansare · Duffin", "difusión y daño fechados", "numerador sin denominador"],
    ["Placa y lectores", "1947–1960", "JAMA · PHR · Lysen", "desacuerdo medido", "cifras vía historia"],
    ["Química clínica", "1919–1947", "JBC · Rosenfeld · AJCP", "método y variación", "textos no leídos"],
    ["Hematología", "1852–2026", "Haematologica", "conteo manual a electrónico", "más variables, más falsos +"],
    ["Patología", "2001–2015", "ALTS · Elmore", "concordancia con consenso", "la referencia también varía"],
    ["Clasificación", "1893–2022", "CIE · OMS · NHANES", "códigos y prevalencias", "código no es enfermedad"],
    ["Ultrasonido · TC", "1958–2012", "Lancet · BJR · Nobel", "instrumento y riesgo", "observacional; operador"],
    ["Resonancia", "1971–2007", "Science · Nature · J Urol", "señal, imagen, crédito", "archivo del Nobel cerrado"],
    ["PSA", "1987–2010", "NEJM · J Urol · JNCI", "continuo y sobrediagnóstico", "ensayos discordantes"],
    ["Troponina", "2000–2018", "JACC · Circulation · Lancet", "la prueba cambia la enfermedad", "un ensayo de desenlace"],
    ["Incidentalomas", "2002–2016", "NIH · Rotterdam · Corea", "reservorio visible", "ecológico; sin histología"],
    ["IA en imagen", "2018–2026", "BMJ · Nat Med · MASAI", "métricas y sesgos", "sin mortalidad"],
  ];
  const body = rows
    .map(([name, period, archive, product, limit], i) => {
      const y = 282 + i * 46;
      const fill = i % 2 === 0 ? "#f7f9fb" : "#e3e9ee";
      return `<g transform="translate(0 ${y})"><rect x="92" width="1416" height="46" fill="${fill}"/><text x="112" y="21" fill="#2d3f55" font-weight="700">${esc(name)}</text><text x="112" y="39" fill="#5a6461" font-size="13">${esc(period)}</text><text x="392" y="29" fill="#252722">${esc(archive)}</text><text x="760" y="29" fill="#252722">${esc(product)}</text><text x="1122" y="29" fill="#8e5a3c">${esc(limit)}</text></g>`;
    })
    .join("\n      ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de imagen, laboratorio y clasificación</title>
  <desc id="desc">Doce expedientes comparados por periodo, archivo, producto mejor resuelto y límite. La tabla no forma una escalera de progreso ni reparte prioridad.</desc>
  <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e2e8ee"/><stop offset="1" stop-color="#c7d2db"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect x="58" y="40" width="1484" height="830" rx="28" fill="#f3f6f9" stroke="#2d3f55" stroke-width="2"/>
  <text x="92" y="94" fill="#3f5f7a" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">MED-025 · MATRIZ DE EVIDENCIA</text>
  <text x="92" y="145" fill="#1c2228" font-family="Georgia, serif" font-size="42" font-weight="700">Doce archivos, doce lectores, ninguna transparencia</text>
  <text x="92" y="183" fill="#4c5250" font-family="Arial, sans-serif" font-size="20">Qué tipo de evidencia sostiene cada expediente y dónde debe detenerse la inferencia.</text>
  <g font-family="Arial, sans-serif" font-size="16">
    <rect x="92" y="222" width="1416" height="56" rx="10" fill="#2d3f55"/>
    <g fill="#eef3f7" font-size="18" font-weight="700"><text x="112" y="257">EXPEDIENTE</text><text x="392" y="257">ARCHIVO</text><text x="760" y="257">PRODUCTO RESUELTO</text><text x="1122" y="257">LÍMITE</text></g>
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
console.log("Visuales de MED-025 generadas en assets/visuales");
