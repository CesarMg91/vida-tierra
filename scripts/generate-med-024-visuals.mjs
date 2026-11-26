// Genera las visuales de MED-024 (farmacología, antibióticos y resistencia) de forma determinista:
// misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-med-024-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-024-farmacologia-antibioticos-resistencia";
const CHAIN = "cadena-sustancia-ecologia-med-024.svg";
const MATRIX = "matriz-farmacologia-resistencia-med-024.svg";

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

// Portada: a la izquierda, un campo denso de puntos con un claro circular (actividad en cultivo);
// al centro, anillos que se abren (dosis, series y comparaciones); a la derecha, una red de nodos
// enlazados que vuelve a poblar el espacio (genes que circulan). Ningún organismo, placa real,
// frasco, cuerpo, texto ni sustancia.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(24024);
  const parts = [];
  const cx = W * 0.24;
  const cy = H * 0.5;
  const clear = 190;
  for (let i = 0; i < 1500; i += 1) {
    const x = rand() * W * 0.5;
    const y = rand() * H;
    const d = Math.hypot(x - cx, y - cy);
    if (d < clear && rand() > 0.04) continue;
    const near = Math.max(0, 1 - Math.abs(d - clear) / 160);
    const color = rand() < 0.6 ? "#e2b35f" : "#c98a52";
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(1.2 + rand() * 2.6)}" fill="${color}" fill-opacity="${f(0.25 + near * 0.35 + rand() * 0.25)}"/>`);
  }
  parts.push(`<circle cx="${f(cx)}" cy="${f(cy)}" r="${clear}" fill="none" stroke="#f1dca8" stroke-opacity=".35" stroke-width="2"/>`);
  for (let r = 60; r < 520; r += 34) {
    const opacity = Math.max(0.05, 0.36 - r / 1700);
    parts.push(`<circle cx="${f(W * 0.5)}" cy="${f(cy)}" r="${r}" fill="none" stroke="#9cc2d8" stroke-opacity="${f(opacity)}" stroke-width="1.3" stroke-dasharray="${f(4 + r / 40)} ${f(6 + r / 60)}"/>`);
  }
  const nodes = [];
  for (let i = 0; i < 90; i += 1) {
    nodes.push([W * 0.58 + rand() * W * 0.4, 30 + rand() * (H - 60)]);
  }
  for (let i = 0; i < nodes.length; i += 1) {
    const [x1, y1] = nodes[i];
    for (let j = i + 1; j < nodes.length; j += 1) {
      const [x2, y2] = nodes[j];
      const d = Math.hypot(x2 - x1, y2 - y1);
      if (d < 120 && rand() < 0.55) parts.push(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="#d98a6b" stroke-opacity="${f(0.15 + (1 - d / 120) * 0.35)}" stroke-width="1.2"/>`);
    }
  }
  for (const [x, y] of nodes) parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(2.2 + rand() * 3)}" fill="#e98f6f" fill-opacity="${f(0.45 + rand() * 0.4)}"/>`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Del claro en el cultivo a la red que vuelve: sustancia, comparación y resistencia</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, un campo de puntos cálidos con un claro circular; en el centro, anillos punteados que se abren; a la derecha, una red de nodos enlazados. No representa organismos, placas de cultivo reales, fármacos, cuerpos, datos ni un acontecimiento real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#1b1710"/><stop offset=".5" stop-color="#121a20"/><stop offset="1" stop-color="#1d1414"/></linearGradient>
    <radialGradient id="glow" cx=".24" cy=".5" r=".3"><stop stop-color="#3a5a6d" stop-opacity=".5"/><stop offset="1" stop-color="#3a5a6d" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

function chain() {
  const steps = [
    ["Sustancia", ["alcaloide · colorante", "placa · ratón", "identidad"]],
    ["Dosis", ["titulación", "toxicidad", "intensidad"]],
    ["Serie", ["casos listados", "selección", "desenlace"]],
    ["Comparación", ["histórica · azar", "grupo control", "desenlace clínico"]],
    ["Regulación", ["1938 · 1962", "umbral legal", "eficacia"]],
    ["Vigilancia", ["notificación", "aislamiento", "numerador"]],
    ["Ecología", ["plásmidos", "hospital · granja", "selección"]],
  ];
  const walls = [
    ["sustancia ≠", "tratamiento"],
    ["dosis ≠", "efecto"],
    ["serie ≠", "efecto causal"],
    ["contraste ≠", "seguridad"],
    ["aprobado ≠", "seguro"],
    ["notificación ≠", "tasa"],
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
  <title id="title">Cadena desde la sustancia hasta la ecología de la resistencia</title>
  <desc id="desc">Siete capas conectadas pero no automáticas: sustancia, dosis-respuesta, serie, comparación, regulación, vigilancia y ecología. Cada transición conserva un cortafuego: sustancia no es tratamiento, dosis no es efecto, serie no es efecto causal, contraste no es seguridad, aprobado no es seguro y notificación no es tasa.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#121719"/><stop offset="1" stop-color="#1c2422"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e6eef0"/><stop offset="1" stop-color="#c9d8d6"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6 0 12Z" fill="#d9785b"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#24434a" opacity=".3"/>
  <circle cx="115" cy="850" r="250" fill="#8e3f2e" opacity=".18"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-024 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">Una placa sin bacterias no demuestra un tratamiento eficaz</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="24">Sustancia, dosis, serie, comparación, regla, notificación y ecología: ninguna capa hereda a las demás.</text>
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
  <text x="125" y="744" fill="#f4f1e8" font-family="Georgia, serif" font-size="28">La confianza crece cuando cadenas independientes coinciden y declaran control, contrafactual,</text>
  <text x="125" y="778" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="19">denominador e intervalo; disminuye cuando una placa, un caso, una ley o una cifra global sustituyen a la comparación.</text>
  <text x="1505" y="850" fill="#7f8c88" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · historia de la evidencia, sin indicaciones clínicas ni dosis</text>
</svg>
`;
}

function matrix() {
  const rows = [
    ["Morfina · quinina", "1805–1820", "química · síntesis", "sustancia medible", "medir no es comparar"],
    ["Withering", "1785", "libro · comentario", "serie completa declarada", "sin contraste"],
    ["Salvarsán", "1907–1910", "informes · historia", "cribado y series", "desenlace serológico"],
    ["Sulfonamidas", "1932–1945", "ratones · Lancet · FDA", "efecto con control histórico", "efectos modestos; formulación"],
    ["Penicilina", "1928–1945", "Fleming · Oxford · Peoria", "actividad y producción", "un caso no es tasa"],
    ["Estreptomicina", "1944–1952", "BMJ · archivos MRC", "contraste aleatorizado", "resistencia durante el ensayo"],
    ["Talidomida · 1962", "1957–1962", "cartas · ley · FDA", "señal y umbral legal", "daño de seguridad, ley de eficacia"],
    ["Farmacovigilancia", "1963–2026", "OMS · VigiBase", "señal", "numerador sin denominador"],
    ["Estafilococos", "1940–2021", "Nature · revisiones · GRAM", "olas fechadas", "aislamientos hospitalarios"],
    ["Plásmidos · granjas", "1950–2022", "genética · granja · modelos", "rutas de transferencia", "fracción no identificada"],
    ["Carga global", "2014–2025", "O'Neill · GRAM · GLASS", "magnitud con intervalos", "contrafactual y cobertura"],
  ];
  const body = rows
    .map(([name, period, archive, product, limit], i) => {
      const y = 282 + i * 50;
      const fill = i % 2 === 0 ? "#f7fbfa" : "#e3ecea";
      return `<g transform="translate(0 ${y})"><rect x="92" width="1416" height="50" fill="${fill}"/><text x="112" y="23" fill="#24434a" font-weight="700">${esc(name)}</text><text x="112" y="42" fill="#5a6461" font-size="14">${esc(period)}</text><text x="392" y="31" fill="#252722">${esc(archive)}</text><text x="760" y="31" fill="#252722">${esc(product)}</text><text x="1122" y="31" fill="#8e3f2e">${esc(limit)}</text></g>`;
    })
    .join("\n      ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de farmacología, antibióticos y resistencia</title>
  <desc id="desc">Once expedientes comparados por periodo, archivo, producto mejor resuelto y límite. La tabla no forma una escalera de progreso ni reparte prioridad.</desc>
  <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#dfe9e7"/><stop offset="1" stop-color="#c4d4d1"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect x="58" y="40" width="1484" height="830" rx="28" fill="#f3f8f7" stroke="#24434a" stroke-width="2"/>
  <text x="92" y="94" fill="#2f6f66" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">MED-024 · MATRIZ DE EVIDENCIA</text>
  <text x="92" y="145" fill="#1c2422" font-family="Georgia, serif" font-size="42" font-weight="700">Once archivos, once productos, ningún milagro fundacional</text>
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
console.log("Visuales de MED-024 generadas en assets/visuales");
