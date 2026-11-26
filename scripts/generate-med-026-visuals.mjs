// Genera las visuales de MED-026 (transfusión, trauma y cuidados críticos) de forma determinista:
// misma semilla, mismo archivo. Sin modelos de imagen ni servicios externos.
// Uso: node scripts/generate-med-026-visuals.mjs [--png]
//   --png rasteriza la portada con sharp (ya instalado) a 1672 × 941.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-026-transfusion-trauma-cuidados-criticos";
const CHAIN = "cadena-infraestructura-dano-med-026.svg";
const MATRIX = "matriz-transfusion-trauma-criticos-med-026.svg";

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

// Portada: desde la izquierda, muchas líneas finas convergen hacia un trazo horizontal ondulado y
// sostenido (lo que la infraestructura mantiene); a la derecha, el trazo se abre en una franja de puntos
// dispersos (lo que sobrevive y lo que se daña). Ninguna sangre, cuerpo, monitor, curva fisiológica real,
// texto ni dato.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(26026);
  const parts = [];
  const cy = H * 0.52;
  const wave = (x) => cy + Math.sin(x / 70) * 18 + Math.sin(x / 23) * 5;
  for (let i = 0; i < 140; i += 1) {
    const y0 = rand() * H;
    const x1 = W * (0.42 + rand() * 0.08);
    const y1 = wave(x1) + (rand() - 0.5) * 10;
    const c1 = W * (0.12 + rand() * 0.18);
    const color = rand() < 0.55 ? "#d9867a" : "#c9a35f";
    parts.push(`<path d="M0 ${f(y0)} C${f(c1)} ${f(y0)} ${f(x1 * 0.7)} ${f(y1)} ${f(x1)} ${f(y1)}" fill="none" stroke="${color}" stroke-opacity="${f(0.08 + rand() * 0.22)}" stroke-width="${f(0.8 + rand() * 1.4)}"/>`);
  }
  const pts = [];
  for (let x = W * 0.42; x <= W * 0.74; x += 6) pts.push(`${f(x)} ${f(wave(x))}`);
  parts.push(`<polyline points="${pts.join(" ")}" fill="none" stroke="#f0d9b5" stroke-opacity=".18" stroke-width="14" stroke-linecap="round"/>`);
  parts.push(`<polyline points="${pts.join(" ")}" fill="none" stroke="#f0d9b5" stroke-opacity=".85" stroke-width="3.2" stroke-linecap="round"/>`);
  for (let i = 0; i < 900; i += 1) {
    const x = W * 0.74 + Math.pow(rand(), 0.8) * W * 0.26;
    const spread = ((x - W * 0.74) / (W * 0.26)) * H * 0.42 + 8;
    const y = wave(x) + (rand() - 0.5) * 2 * spread;
    const warm = rand() < 0.5;
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(1 + rand() * 2.4)}" fill="${warm ? "#e8a48f" : "#9cc2d8"}" fill-opacity="${f(0.2 + rand() * 0.5)}"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Lo que la infraestructura sostiene y lo que deja después</title>
  <desc id="desc">Composición generativa abstracta: muchas líneas finas convergen desde la izquierda hacia un trazo horizontal ondulado y sostenido, que a la derecha se abre en una franja de puntos dispersos. No representa sangre, cuerpos, monitores, curvas fisiológicas reales, datos ni un acontecimiento real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#1c1214"/><stop offset=".55" stop-color="#141a1f"/><stop offset="1" stop-color="#111a1c"/></linearGradient>
    <radialGradient id="glow" cx=".58" cy=".52" r=".32"><stop stop-color="#5a3a3a" stop-opacity=".45"/><stop offset="1" stop-color="#5a3a3a" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

function chain() {
  const steps = [
    ["Infraestructura", ["grupos · citrato", "banco · respirador", "sistema regional"]],
    ["Procedimiento", ["transfusión", "traqueostomía", "catéter"]],
    ["Serie", ["casos listados", "antes-después", "registro"]],
    ["Comparación", ["azar · ajuste", "tiempo modelado", "comparador"]],
    ["Protocolo", ["triaje · guía", "proporción · meta", "fecha de adopción"]],
    ["Resultado", ["vida · muerte", "plazo", "función"]],
    ["Daño", ["infección", "ventilador", "secuelas"]],
  ];
  const walls = [
    ["infraestructura ≠", "resultado"],
    ["posible ≠", "beneficioso"],
    ["serie ≠", "efecto"],
    ["asociación ≠", "protocolo probado"],
    ["meta ≠", "desenlace"],
    ["sobrevivir ≠", "sin daño"],
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
  <title id="title">Cadena desde la infraestructura hasta el daño</title>
  <desc id="desc">Siete capas conectadas pero no automáticas: infraestructura, procedimiento, serie, comparación, protocolo, resultado y daño. Cada transición conserva un cortafuego: infraestructura no es resultado, posible no es beneficioso, serie no es efecto, asociación no es protocolo probado, meta no es desenlace y sobrevivir no es estar sin daño.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#121719"/><stop offset="1" stop-color="#1c2422"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e6eef0"/><stop offset="1" stop-color="#c9d8d6"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6 0 12Z" fill="#d9785b"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#24434a" opacity=".3"/>
  <circle cx="115" cy="850" r="250" fill="#8e3f2e" opacity=".18"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-026 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">Una fisiología sostenida no demuestra una vida salvada</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="24">Infraestructura, procedimiento, serie, comparación, protocolo, resultado y daño: ninguna capa hereda a las demás.</text>
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
  <text x="125" y="744" fill="#f4f1e8" font-family="Georgia, serif" font-size="28">La confianza crece cuando cadenas independientes coinciden y declaran comparador, tiempo,</text>
  <text x="125" y="778" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="19">desenlace y daño; disminuye cuando un registro, una hora de oro, un monitor o una meta sustituyen a la comparación.</text>
  <text x="1505" y="850" fill="#7f8c88" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · historia de la evidencia, sin indicaciones clínicas, umbrales ni dosis</text>
</svg>
`;
}

function matrix() {
  const rows = [
    ["Primeras transfusiones", "1666–1668", "Phil. Trans. · sentencia", "procedimiento posible", "sin serie; regla, no eficacia"],
    ["Blundell", "1818–1829", "MCT · Lancet", "reposición entre personas", "sin grupos ni contraste"],
    ["ABO · citrato", "1901–1918", "Landsteiner · JEM · BMJ", "compatibilidad y conservación", "condición, no tasa"],
    ["Bancos · Drew", "1937–1950", "HHS · Love · Kendrick", "inventario y escala", "segregación sin base serológica"],
    ["Sangre contaminada", "1943–2024", "NEJM · IOM · Inquiry", "rastreo y decisiones", "estimaciones de infectados"],
    ["Larrey · Cannon", "1792–1994", "historia · JAMA · NEJM", "regla de triaje", "sin contraste histórico"],
    ["Guerra como laboratorio", "2001–2015", "registro · PROPPR", "hipótesis delimitada", "sesgo de supervivencia"],
    ["Sistemas · hora de oro", "1966–2010", "NAS · NEJM · AEM", "efecto de sistemas", "reloj sin respaldo"],
    ["Copenhague · UCI", "1929–1953", "Lancet · revisiones", "ventilación manual", "antes-después irreconciliable"],
    ["Monitorización", "1970–2020", "NEJM · JAMA · Lancet", "medición a la cabecera", "medir no es mejorar"],
    ["Ensayos que desmintieron", "1999–2023", "NEJM · CCM", "contrastes grandes", "comparador y época"],
    ["Daños nuevos", "1998–2013", "revisiones · cohortes", "daños nombrados", "asociación, no atribución"],
  ];
  const body = rows
    .map(([name, period, archive, product, limit], i) => {
      const y = 282 + i * 46;
      const fill = i % 2 === 0 ? "#f7fbfa" : "#e3ecea";
      return `<g transform="translate(0 ${y})"><rect x="92" width="1416" height="46" fill="${fill}"/><text x="112" y="21" fill="#24434a" font-weight="700">${esc(name)}</text><text x="112" y="39" fill="#5a6461" font-size="13">${esc(period)}</text><text x="392" y="29" fill="#252722">${esc(archive)}</text><text x="760" y="29" fill="#252722">${esc(product)}</text><text x="1122" y="29" fill="#8e3f2e">${esc(limit)}</text></g>`;
    })
    .join("\n      ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de transfusión, trauma y cuidados críticos</title>
  <desc id="desc">Doce expedientes comparados por periodo, archivo, producto mejor resuelto y límite. La tabla no forma una escalera de progreso ni reparte prioridad.</desc>
  <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#dfe9e7"/><stop offset="1" stop-color="#c4d4d1"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect x="58" y="40" width="1484" height="830" rx="28" fill="#f3f8f7" stroke="#24434a" stroke-width="2"/>
  <text x="92" y="94" fill="#2f6f66" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">MED-026 · MATRIZ DE EVIDENCIA</text>
  <text x="92" y="145" fill="#1c2422" font-family="Georgia, serif" font-size="42" font-weight="700">Doce archivos, doce productos, ningún rescate fundacional</text>
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
console.log("Visuales de MED-026 generadas en assets/visuales");
