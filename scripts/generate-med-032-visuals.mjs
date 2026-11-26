// Genera las visuales de MED-032 (salud global, determinantes y pandemias) de forma determinista:
// misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-med-032-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-032-salud-global-determinantes-pandemias";
const CHAIN = "cadena-biologia-cooperacion-med-032.svg";
const MATRIX = "matriz-salud-global-med-032.svg";

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

// Portada: a la izquierda, un campo de puntos cuya densidad cambia en franjas irregulares;
// al centro, una escalera de barras verticales que desciende con un borde dentado; a la derecha,
// arcos que unen nodos distantes, unos completos y otros interrumpidos. Todo sobre gradientes.
// Ningún mapa, cuerpo, persona, insecto, virus dibujado, texto ni dato.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(32032);
  const parts = [];

  // Campo de puntos con densidad variable en franjas onduladas.
  for (let i = 0; i < 1500; i += 1) {
    const x = rand() * W * 0.38;
    const y = rand() * H;
    const band = 0.5 + 0.5 * Math.sin(y / 70 + Math.sin(x / 140) * 1.6);
    if (rand() > 0.25 + band * 0.75) continue;
    const fade = Math.max(0, 1 - x / (W * 0.4));
    const warm = band > 0.62;
    const color = warm ? (rand() < 0.5 ? "#e0a35f" : "#c9784f") : rand() < 0.5 ? "#6fb8a6" : "#4f9a8f";
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(1.6 + rand() * 3.2)}" fill="${color}" fill-opacity="${f((0.25 + rand() * 0.5) * (0.35 + fade * 0.65))}"/>`);
  }

  // Escalera de barras: altura descendente con ruido; cada barra lleva un halo tenue.
  const bars = 15;
  for (let i = 0; i < bars; i += 1) {
    const x = W * 0.41 + i * 22;
    const h = 560 - i * 27 + (rand() - 0.5) * 34;
    const y = H / 2 + 280 - h;
    parts.push(`<rect x="${f(x)}" y="${f(y)}" width="14" height="${f(h)}" rx="4" fill="${i < 7 ? "#7cc4b4" : "#e3a56c"}" fill-opacity="${f(0.35 + (1 - i / bars) * 0.45)}"/>`);
    parts.push(`<rect x="${f(x - 3)}" y="${f(y - 6)}" width="20" height="${f(h + 12)}" rx="7" fill="none" stroke="#f1dcb2" stroke-opacity="${f(0.08 + rand() * 0.1)}"/>`);
  }

  // Nodos a la derecha y arcos entre pares lejanos; algunos arcos quedan interrumpidos.
  const nodes = [];
  for (let i = 0; i < 26; i += 1) nodes.push([W * 0.66 + rand() * W * 0.31, 70 + rand() * (H - 140)]);
  for (let k = 0; k < 34; k += 1) {
    const a = nodes[Math.floor(rand() * nodes.length)];
    const b = nodes[Math.floor(rand() * nodes.length)];
    if (a === b) continue;
    const mx = (a[0] + b[0]) / 2;
    const my = (a[1] + b[1]) / 2 - 60 - rand() * 120;
    const broken = rand() < 0.4;
    parts.push(`<path d="M${f(a[0])} ${f(a[1])}Q${f(mx)} ${f(my)} ${f(b[0])} ${f(b[1])}" fill="none" stroke="${broken ? "#e3a56c" : "#9fd0c4"}" stroke-opacity="${f(0.25 + rand() * 0.35)}" stroke-width="${f(1.2 + rand() * 1.6)}"${broken ? ` stroke-dasharray="${f(18 + rand() * 30)} ${f(14 + rand() * 40)}"` : ""}/>`);
  }
  for (const [x, y] of nodes) parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(4 + rand() * 5)}" fill="${rand() < 0.5 ? "#9fd0c4" : "#efb88a"}" fill-opacity="${f(0.55 + rand() * 0.35)}"/>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Densidades, escalones y arcos: de la exposición a la cooperación</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, un campo de puntos con densidad variable en franjas onduladas; al centro, una escalera de barras verticales que desciende con un borde irregular; a la derecha, nodos unidos por arcos, unos completos y otros interrumpidos, sobre gradientes. No representa mapas, países, personas, insectos, virus, datos ni un acontecimiento real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#0f1d1b"/><stop offset=".5" stop-color="#151a22"/><stop offset="1" stop-color="#20181a"/></linearGradient>
    <radialGradient id="glow" cx=".5" cy=".55" r=".35"><stop stop-color="#3d5e58" stop-opacity=".45"/><stop offset="1" stop-color="#3d5e58" stop-opacity="0"/></radialGradient>
    <radialGradient id="glow2" cx=".82" cy=".4" r=".3"><stop stop-color="#6a4a3a" stop-opacity=".3"/><stop offset="1" stop-color="#6a4a3a" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

const LAYERS = ["biología", "exposición", "desigualdad", "sistema", "intervención", "medición", "cooperación"];

function chain() {
  const lines = [
    ["filaria · plasmodio", "VIH · ébola", "reservorio"],
    ["suelo · vector", "árbol hueco", "transmisión vertical"],
    ["grado laboral", "brecha 80/45", "colonia"],
    ["escuelas · OMS", "Alma-Ata", "registro civil"],
    ["DDT · GOBI", "antirretrovirales", "anillo"],
    ["exceso 14.8–18.2 M", "contrafactual", "proyección"],
    ["PEPFAR · COVAX", "PABS 20 %", "¿quién recibe?"],
  ];
  const walls = [
    ["biología ≠", "exposición"],
    ["exposición ≠", "causa social"],
    ["desigualdad ≠", "política"],
    ["sistema ≠", "servicio"],
    ["intervención ≠", "efecto"],
    ["cifra ≠", "reparto"],
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
  <title id="title">Cadena desde la biología hasta la cooperación en salud global</title>
  <desc id="desc">Siete capas conectadas pero no automáticas: biología → exposición → desigualdad → sistema → intervención → medición → cooperación. Cada transición conserva un cortafuego: biología no es exposición, exposición no es causa social, desigualdad no es política, sistema no es servicio, intervención no es efecto y una cifra no es un reparto; un tratado no es una dosis entregada.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#121719"/><stop offset="1" stop-color="#1c2422"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e6eef0"/><stop offset="1" stop-color="#c9d8d6"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6 0 12Z" fill="#d9785b"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#24434a" opacity=".3"/>
  <circle cx="115" cy="850" r="250" fill="#8e3f2e" opacity=".18"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-032 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">Una cifra global no demuestra una causa ni una cooperación</text>
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
  <text x="125" y="744" fill="#f4f1e8" font-family="Georgia, serif" font-size="28">Ningún eslabón hereda la fuerza del siguiente: un tratado no es una dosis entregada.</text>
  <text x="125" y="778" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="19">La historia colonial atraviesa las siete capas: es una variable con efectos medibles, no un telón de fondo.</text>
  <text x="1505" y="850" fill="#7f8c88" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · historia de la evidencia, sin indicaciones clínicas, dosis ni orientación de política</text>
</svg>
`;
}

function matrix() {
  // Filas: los títulos de la tabla «Qué podemos comparar» de MED-032, copiados literalmente.
  // Columnas: las siete capas. Una marca indica que el expediente toca esa capa; no gradúa nada.
  // Índices: 0 biología, 1 exposición, 2 desigualdad, 3 sistema, 4 intervención, 5 medición, 6 cooperación.
  const rows = [
    ["Medicina tropical", [0, 1, 2, 4, 5]],
    ["Rockefeller", [0, 1, 4, 5, 6]],
    ["OMS y salud global", [2, 3, 6]],
    ["Malaria", [0, 1, 3, 4, 5, 6]],
    ["Alma-Ata", [2, 3, 4, 6]],
    ["McKeown", [0, 1, 2, 3, 4, 5]],
    ["Whitehall", [0, 1, 2, 5]],
    ["VIH 1981–1998", [0, 1, 3, 4, 5]],
    ["Sudáfrica", [0, 1, 3, 4, 5, 6]],
    ["PEPFAR", [2, 3, 4, 5, 6]],
    ["Ébola", [0, 1, 3, 4, 5, 6]],
    ["COVID-19 y COVAX", [2, 3, 4, 5, 6]],
    ["Una Salud y el acuerdo", [0, 1, 2, 3, 4, 6]],
  ];
  const colX = (j) => 560 + j * 136;
  const rowH = 41;
  const head = LAYERS.map((name, j) => `<text x="${colX(j)}" y="257" text-anchor="middle">${esc(name)}</text>`).join("");
  const body = rows
    .map(([name, marks], i) => {
      const y = 282 + i * rowH;
      const fill = i % 2 === 0 ? "#f7fbfa" : "#e3ecea";
      const dots = marks.map((j) => `<circle cx="${colX(j)}" cy="${rowH / 2}" r="9" fill="#24434a"/>`).join("");
      return `<g transform="translate(0 ${y})"><rect x="92" width="1416" height="${rowH}" fill="${fill}"/><text x="112" y="27" fill="#24434a" font-weight="700">${esc(name)}</text>${dots}</g>`;
    })
    .join("\n      ");
  const grid = LAYERS.slice(1)
    .map((_, j) => `<line x1="${colX(j) + 68}" y1="282" x2="${colX(j) + 68}" y2="${282 + rows.length * rowH}"/>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de expedientes de salud global, determinantes y pandemias</title>
  <desc id="desc">Trece expedientes de MED-032 cruzados con siete capas: biología, exposición, desigualdad, sistema, intervención, medición y cooperación. Cada marca sólo indica que el expediente toca esa capa; no gradúa fuerza de evidencia, no forma una escalera de progreso ni reparte culpa.</desc>
  <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#dfe9e7"/><stop offset="1" stop-color="#c4d4d1"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect x="58" y="40" width="1484" height="830" rx="28" fill="#f3f8f7" stroke="#24434a" stroke-width="2"/>
  <text x="92" y="94" fill="#2f6f66" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">MED-032 · MATRIZ DE EVIDENCIA</text>
  <text x="92" y="145" fill="#1c2422" font-family="Georgia, serif" font-size="42" font-weight="700">Trece expedientes, siete capas, ninguna escalera de progreso</text>
  <text x="92" y="183" fill="#4c5250" font-family="Arial, sans-serif" font-size="20">Qué capas toca cada expediente. Una marca es presencia, no fuerza ni ranking.</text>
  <g font-family="Arial, sans-serif" font-size="17">
    <rect x="92" y="222" width="1416" height="56" rx="10" fill="#24434a"/>
    <g fill="#eef6f4" font-size="16" font-weight="700"><text x="112" y="257">EXPEDIENTE</text>${head}</g>
    <g>
      ${body}
    </g>
    <g stroke="#b7c9c5" stroke-width="1">${grid}</g>
  </g>
  <g font-family="Arial, sans-serif" font-size="15" fill="#5a6461"><circle cx="100" cy="845" r="7" fill="#24434a"/><text x="114" y="850">el expediente toca la capa</text></g>
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
console.log("Visuales de MED-032 generadas en assets/visuales");
