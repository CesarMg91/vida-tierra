// Genera las visuales de MED-033 (medicina digital e inteligencia artificial) de forma determinista:
// misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-med-033-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-033-medicina-digital-inteligencia-artificial";
const CHAIN = "cadena-datos-responsabilidad-med-033.svg";
const MATRIX = "matriz-medicina-digital-ia-med-033.svg";

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

// Portada: a la izquierda, una retícula de celdas cuadradas con huecos y tonos desiguales;
// al centro, haces de curvas que salen juntas y se separan poco a poco; a la derecha,
// un anillo de nodos con un hueco abierto. Todo sobre gradientes.
// Ningún cuerpo, órgano, rostro, robot, cerebro, pantalla, texto ni dato.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(33033);
  const parts = [];

  // Retícula de celdas con huecos (registros incompletos, sin representar ninguno).
  const cell = 22;
  for (let gx = 0; gx < 24; gx += 1) {
    for (let gy = 0; gy < 42; gy += 1) {
      const x = 40 + gx * cell;
      const y = 10 + gy * cell;
      if (rand() < 0.18 + gx * 0.012) continue;
      const tone = rand();
      const color = tone < 0.55 ? "#5fa8c4" : tone < 0.85 ? "#7fc2b0" : "#e0a35f";
      const fade = Math.max(0.1, 1 - gx / 26);
      parts.push(`<rect x="${x}" y="${y}" width="${cell - 6}" height="${cell - 6}" rx="3" fill="${color}" fill-opacity="${f((0.2 + rand() * 0.5) * fade)}"/>`);
    }
  }

  // Haces de curvas: arrancan juntas y se separan, sin graficar cifra alguna.
  for (let k = 0; k < 26; k += 1) {
    const y0 = H / 2 + (k - 13) * 6;
    const spread = (k - 13) * (8 + rand() * 10);
    const x0 = W * 0.36;
    const x3 = W * 0.7;
    const c1 = `${f(x0 + 140)} ${f(y0 + rand() * 10 - 5)}`;
    const c2 = `${f(x3 - 160)} ${f(y0 + spread * 0.6)}`;
    const end = `${f(x3)} ${f(y0 + spread)}`;
    const warm = k % 5 === 0;
    parts.push(`<path d="M${f(x0)} ${f(y0)}C${c1} ${c2} ${end}" fill="none" stroke="${warm ? "#e3a56c" : "#9fd0e0"}" stroke-opacity="${f(0.25 + rand() * 0.4)}" stroke-width="${f(1.2 + rand() * 1.4)}"/>`);
  }

  // Anillo de nodos con un hueco abierto y enlaces entre vecinos.
  const cx = W * 0.85;
  const cy = H / 2;
  const nodes = [];
  for (let i = 0; i < 22; i += 1) {
    const a = (i / 22) * Math.PI * 2 + 0.3;
    if (a > 5.4 && a < 6.2) continue;
    const r = 170 + rand() * 40;
    nodes.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  for (let i = 0; i < nodes.length - 1; i += 1) {
    const [ax, ay] = nodes[i];
    const [bx, by] = nodes[i + 1];
    parts.push(`<line x1="${f(ax)}" y1="${f(ay)}" x2="${f(bx)}" y2="${f(by)}" stroke="#9fd0e0" stroke-opacity="${f(0.2 + rand() * 0.3)}" stroke-width="1.6"/>`);
  }
  for (const [x, y] of nodes) parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(4 + rand() * 6)}" fill="${rand() < 0.6 ? "#9fd0e0" : "#efb88a"}" fill-opacity="${f(0.55 + rand() * 0.35)}"/>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Celdas, curvas que se separan y un anillo abierto: de los datos a la responsabilidad</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, una retícula de celdas cuadradas con huecos y tonos desiguales; al centro, haces de curvas que salen juntas y se separan; a la derecha, un anillo de nodos con un hueco abierto, sobre gradientes. No representa cuerpos, órganos, rostros, robots, cerebros, pantallas, datos ni un acontecimiento real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#0e1a22"/><stop offset=".55" stop-color="#141a24"/><stop offset="1" stop-color="#1f1a1d"/></linearGradient>
    <radialGradient id="glow" cx=".5" cy=".5" r=".35"><stop stop-color="#2f5a6a" stop-opacity=".45"/><stop offset="1" stop-color="#2f5a6a" stop-opacity="0"/></radialGradient>
    <radialGradient id="glow2" cx=".85" cy=".5" r=".25"><stop stop-color="#6a4a3a" stop-opacity=".3"/><stop offset="1" stop-color="#6a4a3a" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

const LAYERS = ["datos", "modelo", "validación", "despliegue", "deriva", "equidad", "utilidad", "responsabilidad"];

function chain() {
  const lines = [
    ["expediente", "costo · creatinina", "oxímetro"],
    ["reglas · regresión", "redes · lenguaje", "etiqueta"],
    ["AUC 0.63", "ensayo pivotal", "examen"],
    ["umbral · alerta", "clínica · red", "flujo"],
    ["pandemia", "códigos", "calibración"],
    ["error por grupo", "sustituto", "instrumento"],
    ["ensayo", "comparador", "desenlace"],
    ["FDA · UE", "clínico", "¿quién responde?"],
  ];
  const walls = [
    ["datos ≠", "modelo"],
    ["modelo ≠", "validez"],
    ["validación ≠", "despliegue"],
    ["despliegue ≠", "estabilidad"],
    ["deriva ≠", "excepción"],
    ["exactitud ≠", "equidad"],
    ["aprobación ≠", "responsable"],
  ];
  const step = 186;
  const cards = LAYERS.map((title, i) => {
    const x = 60 + i * step;
    const tspans = lines[i].map((line, j) => `<tspan x="18" dy="${j === 0 ? 0 : 24}">${esc(line)}</tspan>`).join("");
    return `<g transform="translate(${x} 275)"><rect width="168" height="235" rx="20" fill="url(#card)"/><circle cx="34" cy="38" r="20" fill="#1f4a5c"/><text x="34" y="45" fill="#fff" text-anchor="middle" font-size="18" font-weight="700">${String(i + 1).padStart(2, "0")}</text><text x="18" y="92" fill="#1f211e" font-size="${title.length > 11 ? 17 : 20}" font-weight="700">${esc(title)}</text><text x="18" y="160" fill="#4c5250" font-size="15">${tspans}</text></g>`;
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
  <title id="title">Cadena desde los datos hasta la responsabilidad en la medicina digital</title>
  <desc id="desc">Ocho capas conectadas pero no automáticas: datos → modelo → validación → despliegue → deriva → equidad → utilidad → responsabilidad. Cada transición conserva un cortafuego: datos no es modelo, modelo no es validez, validación no es despliegue, despliegue no es estabilidad, la deriva no es una excepción, exactitud no es equidad y aprobación no es responsable; un modelo exacto no demuestra un beneficio.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#111821"/><stop offset="1" stop-color="#1b2229"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e6eef2"/><stop offset="1" stop-color="#c8d7de"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6 0 12Z" fill="#d9785b"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#1f4a5c" opacity=".3"/>
  <circle cx="115" cy="850" r="250" fill="#8e3f2e" opacity=".18"/>
  <text x="60" y="92" fill="#8fc9dc" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-033 · CADENA DE INFERENCIA</text>
  <text x="60" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="39" font-weight="700">Un modelo exacto no demuestra un beneficio ni asigna un responsable</text>
  <text x="60" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="22">${esc(LAYERS.join(" → "))}</text>
  <path d="M170 390H1430" stroke="#d9785b" stroke-width="4" stroke-dasharray="8 10" opacity=".7"/>
  <g filter="url(#shadow)" font-family="Arial, sans-serif">
    ${cards}
  </g>
  <g stroke="#d9785b" stroke-width="4" marker-end="url(#arrow)">${arrows}</g>
  <g font-family="Arial, sans-serif" font-size="15" fill="#f0c8b8" text-anchor="middle">
    ${wallText}
  </g>
  <rect x="60" y="645" width="1480" height="150" rx="24" fill="#0f1418" stroke="#4f7f8a" stroke-width="2"/>
  <text x="93" y="696" fill="#8fc9dc" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="3">CONVERGENCIA LEGÍTIMA</text>
  <text x="93" y="744" fill="#f4f1e8" font-family="Georgia, serif" font-size="27">Ningún eslabón hereda la fuerza del siguiente: una aprobación no es un beneficio medido.</text>
  <text x="93" y="778" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="19">La etiqueta elegida y el instrumento de medida atraviesan todas las capas: son decisiones, no datos neutros.</text>
  <text x="1540" y="850" fill="#7f8c88" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · historia de la evidencia, sin indicaciones clínicas ni orientación sobre sistemas</text>
</svg>
`;
}

function matrix() {
  // Filas: los títulos de la tabla «Qué podemos comparar» de MED-033, copiados literalmente.
  // Columnas: las ocho capas. Una marca indica que el expediente toca esa capa con evidencia propia; no gradúa nada.
  // Índices: 0 datos, 1 modelo, 2 validación, 3 despliegue, 4 deriva, 5 equidad, 6 utilidad, 7 responsabilidad.
  const rows = [
    ["Sistemas expertos", [0, 1, 2, 3, 6]],
    ["Expediente electrónico", [0, 1, 2, 3, 4, 6, 7]],
    ["Costo como sustituto", [0, 1, 2, 3, 5]],
    ["Filtración renal y raza", [0, 1, 2, 3, 5, 7]],
    ["Sepsis y deriva", [0, 1, 2, 3, 4, 5, 6]],
    ["IDx-DR", [0, 1, 2, 3, 6, 7]],
    ["FDA y software médico", [1, 2, 3, 4, 7]],
    ["Ley de IA y productos", [0, 1, 3, 4, 5, 7]],
    ["Reporte y ensayos", [0, 1, 2, 3, 5, 6]],
    ["Modelos de lenguaje", [0, 1, 2, 3, 6, 7]],
    ["Escribanía ambiental", [0, 2, 3, 6, 7]],
    ["Automatización y responsabilidad", [2, 3, 6, 7]],
  ];
  const colX = (j) => 640 + j * 112;
  const rowH = 44;
  const head = LAYERS.map((name, j) => `<text x="${colX(j)}" y="257" text-anchor="middle">${esc(name)}</text>`).join("");
  const body = rows
    .map(([name, marks], i) => {
      const y = 282 + i * rowH;
      const fill = i % 2 === 0 ? "#f7fafb" : "#e3eaee";
      const dots = marks.map((j) => `<circle cx="${colX(j)}" cy="${rowH / 2}" r="9" fill="#1f4a5c"/>`).join("");
      return `<g transform="translate(0 ${y})"><rect x="60" width="1480" height="${rowH}" fill="${fill}"/><text x="80" y="29" fill="#1f4a5c" font-weight="700">${esc(name)}</text>${dots}</g>`;
    })
    .join("\n      ");
  const grid = LAYERS.slice(1)
    .map((_, j) => `<line x1="${colX(j) + 56}" y1="282" x2="${colX(j) + 56}" y2="${282 + rows.length * rowH}"/>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de expedientes de medicina digital e inteligencia artificial</title>
  <desc id="desc">Doce expedientes de MED-033 cruzados con ocho capas: datos, modelo, validación, despliegue, deriva, equidad, utilidad y responsabilidad. Cada marca sólo indica que el expediente toca esa capa con evidencia propia; no gradúa fuerza de evidencia, no ordena sistemas ni empresas y no forma una escalera de progreso.</desc>
  <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#dde7ec"/><stop offset="1" stop-color="#c3d2d9"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect x="30" y="30" width="1540" height="850" rx="28" fill="#f3f7f9" stroke="#1f4a5c" stroke-width="2"/>
  <text x="60" y="86" fill="#2f6a7a" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">MED-033 · MATRIZ DE EVIDENCIA</text>
  <text x="60" y="137" fill="#1c2422" font-family="Georgia, serif" font-size="40" font-weight="700">Doce expedientes, ocho capas, ninguna escalera de progreso</text>
  <text x="60" y="177" fill="#4c5250" font-family="Arial, sans-serif" font-size="20">Qué capas toca cada expediente. Una marca es presencia, no fuerza ni ranking.</text>
  <g font-family="Arial, sans-serif" font-size="17">
    <rect x="60" y="222" width="1480" height="56" rx="10" fill="#1f4a5c"/>
    <g fill="#eef5f8" font-size="15" font-weight="700"><text x="80" y="257">EXPEDIENTE</text>${head}</g>
    <g>
      ${body}
    </g>
    <g stroke="#b7c7ce" stroke-width="1">${grid}</g>
  </g>
  <g font-family="Arial, sans-serif" font-size="15" fill="#5a6461"><circle cx="68" cy="852" r="7" fill="#1f4a5c"/><text x="82" y="857">el expediente toca la capa</text></g>
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
console.log("Visuales de MED-033 generadas en assets/visuales");
