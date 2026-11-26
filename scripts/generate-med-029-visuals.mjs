// Genera las visuales de MED-029 (ensayos, regulación y medicina basada en evidencia) de forma
// determinista: misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-med-029-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-029-ensayos-regulacion-evidencia";
const CHAIN = "cadena-diseno-decision-med-029.svg";
const MATRIX = "matriz-ensayos-evidencia-med-029.svg";

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

// Portada: a la izquierda, columnas de marcas que alternan dos tonos (una regla de reparto
// sin personas); al centro, una retícula de casillas, unas llenas y otras sólo contorneadas
// (lo declarado frente a lo visible); a la derecha, puntos que convergen hacia un vértice
// (una suma). Ningún cuerpo, paciente, fármaco, documento, logotipo, dato ni acontecimiento real.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(29029);
  const parts = [];
  const colsL = 14;
  const rowsL = 22;
  const cwL = (W * 0.3) / colsL;
  const chL = (H - 120) / rowsL;
  for (let c = 0; c < colsL; c += 1) {
    for (let r = 0; r < rowsL; r += 1) {
      const even = (r + c) % 2 === 0;
      const jitter = rand() < 0.08;
      const color = even !== jitter ? "#7fb8c4" : "#e0a15f";
      const x = 50 + c * cwL + cwL / 2;
      const y = 60 + r * chL + chL / 2;
      parts.push(`<rect x="${f(x - 9)}" y="${f(y - 3)}" width="18" height="6" rx="3" fill="${color}" fill-opacity="${f(0.35 + rand() * 0.45)}"/>`);
    }
  }
  const gx = W * 0.36;
  const cols = 10;
  const rows = 12;
  const cw = (W * 0.27) / cols;
  const ch = (H - 140) / rows;
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const x = gx + c * cw + 4;
      const y = 70 + r * ch + 4;
      const filled = rand() < 0.55;
      parts.push(filled
        ? `<rect x="${f(x)}" y="${f(y)}" width="${f(cw - 8)}" height="${f(ch - 8)}" rx="5" fill="#cfd6d8" fill-opacity="${f(0.25 + rand() * 0.45)}"/>`
        : `<rect x="${f(x)}" y="${f(y)}" width="${f(cw - 8)}" height="${f(ch - 8)}" rx="5" fill="none" stroke="#cfd6d8" stroke-opacity=".35" stroke-width="1.5" stroke-dasharray="5 5"/>`);
    }
  }
  const vx = W * 0.95;
  const vy = H * 0.5;
  for (let i = 0; i < 700; i += 1) {
    const t = rand();
    const x = W * 0.66 + t * (vx - W * 0.66);
    const spread = (1 - t) * (H * 0.42);
    const y = vy + (rand() * 2 - 1) * spread * (rand() < 0.5 ? 1 : 0.6);
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(1.3 + rand() * 2.3)}" fill="#f4efe3" fill-opacity="${f(0.15 + t * 0.6)}"/>`);
  }
  parts.push(`<line x1="${f(W * 0.66)}" y1="${f(vy)}" x2="${f(vx)}" y2="${f(vy)}" stroke="#e0a15f" stroke-opacity=".55" stroke-width="2" stroke-dasharray="10 10"/>`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">De la alternancia a la suma: reparto, declaración y convergencia</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, columnas de marcas que alternan dos tonos con algunas irregularidades; en el centro, una retícula de casillas, unas llenas y otras sólo contorneadas con línea discontinua; a la derecha, puntos que convergen hacia un vértice sobre una línea discontinua. No representa personas, pacientes, fármacos, documentos, datos ni un acontecimiento real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#121516"/><stop offset=".5" stop-color="#16191d"/><stop offset="1" stop-color="#1b1715"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

function chain() {
  const steps = [
    ["Diseño", ["comparación", "desenlace", "fases"]],
    ["Asignación", ["alternancia", "azar oculto", "previsible"]],
    ["Consentimiento", ["Núremberg", "Belmont", "comités"]],
    ["Registro", ["ICMJE 2005", "ley 2007", "Helsinki"]],
    ["Publicación", ["lo hecho", "lo publicado", "desenlaces"]],
    ["Síntesis", ["Cochrane", "acumulativo", "GRADE"]],
    ["Decisión", ["aprobación", "guía", "paciente"]],
  ];
  const walls = [
    ["diseño ≠", "grupos iguales"],
    ["asignación ≠", "ética"],
    ["consentimiento ≠", "justificación"],
    ["registro ≠", "informe"],
    ["publicado ≠", "hecho"],
    ["síntesis ≠", "decisión"],
  ];
  const cards = steps
    .map(([title, lines], i) => {
      const x = 70 + i * 212;
      const tspans = lines.map((line, j) => `<tspan x="24" dy="${j === 0 ? 0 : 25}">${esc(line)}</tspan>`).join("");
      return `<g transform="translate(${x} 275)"><rect width="190" height="235" rx="22" fill="url(#card)"/><circle cx="38" cy="40" r="22" fill="#2d3f55"/><text x="38" y="48" fill="#fff" text-anchor="middle" font-size="20" font-weight="700">${String(i + 1).padStart(2, "0")}</text><text x="24" y="92" fill="#1f211e" font-size="${title.length > 11 ? 18 : 22}" font-weight="700">${esc(title)}</text><text x="24" y="166" fill="#4c5250" font-size="18">${tspans}</text></g>`;
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
  <title id="title">Cadena desde el diseño hasta la decisión</title>
  <desc id="desc">Siete capas conectadas pero no automáticas: diseño, asignación, consentimiento, registro, publicación, síntesis y decisión. Cada transición conserva un cortafuego: diseño no es grupos iguales, asignación no es ética, consentimiento no es justificación, registro no es informe, publicado no es hecho y síntesis no es decisión.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#11161b"/><stop offset="1" stop-color="#1b2228"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e8edf2"/><stop offset="1" stop-color="#cbd5de"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6 0 12Z" fill="#e0a15f"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#2d3f55" opacity=".3"/>
  <circle cx="115" cy="850" r="250" fill="#8e5a3c" opacity=".18"/>
  <text x="92" y="92" fill="#9cc2d8" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-029 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="37" font-weight="700">Un ensayo publicado no demuestra una evidencia completa</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="22">Diseño, asignación, consentimiento, registro, publicación, síntesis y decisión: ninguna capa hereda a las demás.</text>
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
  <text x="125" y="744" fill="#f4f1e8" font-family="Georgia, serif" font-size="25">La confianza crece cuando asignación oculta, consentimiento, registro y publicación completa coinciden;</text>
  <text x="125" y="778" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="19">disminuye cuando un ensayo célebre, una aprobación, lo publicado o un meta-análisis sustituyen a las capas que faltan.</text>
  <text x="1505" y="850" fill="#7f8c88" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · historia de la evidencia, sin indicaciones clínicas ni dosis</text>
</svg>
`;
}

function matrix() {
  const rows = [
    ["Lind", "1747–1795", "tratado · Milne · Tröhler", "comparación en paralelo", "historicidad abierta"],
    ["Alternancia", "1816–1947", "Chalmers 2001 y 2012", "240 ensayos imparciales", "previsible"],
    ["Fibiger", "1896–1898", "Hospitalstidende · BMJ", "asignación por calendario", "493 excluidos; sin cegamiento"],
    ["MRC 1948", "1946–1948", "MED-024", "azar oculto en sobres", "no inventó la comparación"],
    ["Núremberg · Helsinki", "1947–2024", "USHMM · AMM", "consentimiento, registro", "sin cumplimiento propio"],
    ["Beecher · Tuskegee", "1932–2018", "NEJM · CDC · QJE", "violación y legado", "desenlaces distintos"],
    ["Belmont", "1974–2000", "informe · CDC · Emanuel", "principios y comités", "norma estadounidense"],
    ["Regulación", "1962–2026", "21 CFR · JAMA · ICH", "fases y umbral", "un ensayo; sustitutos"],
    ["Cochrane", "1972–1993", "libro · BJOG · NYAS", "revisión mantenida", "hereda lo publicado"],
    ["Meta-análisis", "1959–1992", "NEJM · JAMA", "evidencia antes que práctica", "lectura retrospectiva"],
    ["EBM · GRADE", "1991–2018", "JAMA · BMJ · JCE", "lema y certeza explícita", "marca apropiable"],
    ["Sesgos · plataformas", "1959–2026", "NEJM · Lancet · Science", "lo hecho frente a lo publicado", "cumplimiento parcial"],
  ];
  const body = rows
    .map(([name, period, archive, product, limit], i) => {
      const y = 282 + i * 46;
      const fill = i % 2 === 0 ? "#f7f9fb" : "#e3e9ee";
      return `<g transform="translate(0 ${y})"><rect x="92" width="1416" height="46" fill="${fill}"/><text x="112" y="21" fill="#2d3f55" font-weight="700">${esc(name)}</text><text x="112" y="39" fill="#5a6461" font-size="13">${esc(period)}</text><text x="392" y="29" fill="#252722">${esc(archive)}</text><text x="760" y="29" fill="#252722">${esc(product)}</text><text x="1122" y="29" fill="#8e5a3c">${esc(limit)}</text></g>`;
    })
    .join("\n      ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de ensayos, regulación y medicina basada en evidencia</title>
  <desc id="desc">Doce expedientes comparados por periodo, archivo, producto mejor resuelto y límite. La tabla no forma una escalera de progreso ni reparte prioridad.</desc>
  <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e2e8ee"/><stop offset="1" stop-color="#c7d2db"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect x="58" y="40" width="1484" height="830" rx="28" fill="#f3f6f9" stroke="#2d3f55" stroke-width="2"/>
  <text x="92" y="94" fill="#3f5f7a" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">MED-029 · MATRIZ DE EVIDENCIA</text>
  <text x="92" y="145" fill="#1c2228" font-family="Georgia, serif" font-size="42" font-weight="700">Doce archivos, siete capas, ningún fundador</text>
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
console.log("Visuales de MED-029 generadas en assets/visuales");
