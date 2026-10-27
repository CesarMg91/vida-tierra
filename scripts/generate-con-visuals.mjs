// Genera las visuales de la serie CON de forma determinista: misma semilla, mismo archivo.
// Uso: node scripts/generate-con-visuals.mjs [--png]
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");

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

function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(2610);
  const palette = ["#e9b65c", "#5fb3a1", "#d9785b", "#9cb7d8", "#efe6d2"];
  const parts = [];
  // Estructura subyacente: red de nodos que no coincide con la cuadrícula de íconos.
  const nodes = [];
  for (let i = 0; i < 230; i += 1) {
    const x = W * 0.34 + rand() * W * 0.7;
    const y = rand() * H;
    nodes.push([x, y]);
  }
  for (let i = 0; i < nodes.length; i += 1) {
    const [x1, y1] = nodes[i];
    const near = nodes
      .map(([x, y], j) => [Math.hypot(x - x1, y - y1), j])
      .filter(([d, j]) => j > i && d < 120)
      .slice(0, 3);
    for (const [d, j] of near) {
      const [x2, y2] = nodes[j];
      parts.push(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="#4fa79a" stroke-opacity="${f(0.55 - d / 300)}" stroke-width="1.2"/>`);
    }
  }
  for (const [x, y] of nodes) {
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(1.6 + rand() * 2.6)}" fill="#8fd3c6" fill-opacity="${f(0.45 + rand() * 0.5)}"/>`);
  }
  // Interfaz: íconos limpios que se deshacen en partículas al cruzar la franja.
  const cell = 104;
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      const x = 70 + col * cell;
      const y = 40 + row * cell + (col % 2) * 8;
      const seam = 0.38 + row * 0.022;
      const t = x / W;
      const color = palette[Math.floor(rand() * palette.length)];
      if (t < seam - 0.08) {
        const shape = rand();
        parts.push(`<rect x="${x}" y="${y}" width="64" height="64" rx="16" fill="${color}" fill-opacity=".92"/>`);
        if (shape < 0.35) parts.push(`<rect x="${x + 16}" y="${y + 20}" width="32" height="24" rx="4" fill="#17242a" fill-opacity=".55"/>`);
        else if (shape < 0.7) parts.push(`<circle cx="${x + 32}" cy="${y + 32}" r="14" fill="#17242a" fill-opacity=".5"/>`);
        else parts.push(`<path d="M${x + 18} ${y + 44}L${x + 32} ${y + 18}L${x + 46} ${y + 44}Z" fill="#17242a" fill-opacity=".5"/>`);
      } else if (t < seam + 0.1) {
        const k = (t - (seam - 0.08)) / 0.18;
        for (let p = 0; p < 26; p += 1) {
          const px = x + rand() * 64 + k * rand() * 120;
          const py = y + rand() * 64 + (rand() - 0.5) * k * 60;
          parts.push(`<rect x="${f(px)}" y="${f(py)}" width="${f(5 + rand() * 8 * (1 - k))}" height="${f(5 + rand() * 8 * (1 - k))}" rx="2" fill="${color}" fill-opacity="${f(0.85 - k * 0.6)}"/>`);
        }
      }
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Una interfaz de íconos sobre una estructura que no se le parece</title>
  <desc id="desc">Composición generativa abstracta: a la derecha, íconos limpios en cuadrícula; en el centro se deshacen en partículas; a la izquierda, una red de nodos con otra geometría. No representa un resultado ni un dato.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset=".55" stop-color="#13262a"/><stop offset="1" stop-color="#0c1517"/></linearGradient>
    <radialGradient id="glow" cx=".62" cy=".45" r=".55"><stop stop-color="#2c6d64" stop-opacity=".55"/><stop offset="1" stop-color="#2c6d64" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <g transform="translate(${W} 0) scale(-1 1)">
  ${parts.join("\n  ")}
  </g>
</svg>
`;
}

const chainCon001 = {
  steps: [
    ["Modelo", "mundo, percepciones y pagos supuestos"],
    ["Resultado", "teorema o simulación dentro del modelo"],
    ["Alcance", "condiciones bajo las que vale"],
    ["Interpretación", "lectura como teoría de la percepción"],
    ["Salto", "tesis sobre qué existe"],
    ["Prueba", "observación que separaría rivales"],
  ],
  firewalls: ["≠ organismo", "≠ todos los mundos", "≠ percepción falsa", "≠ metafísica", "≠ confirmación"],
  title: "Cadena desde un modelo evolutivo hasta una tesis sobre la realidad",
  kicker: "CON-001 · CADENA DE INFERENCIA",
  headline: "Un teorema sobre pagos no es una tesis sobre lo que existe",
  legend: "Verde: lo que se demuestra o simula. Ocre: lo que se interpreta o afirma. Azul: lo que podría decidirlo.",
};

const chainCon002 = {
  steps: [
    ["Modelo", "teoría, dimensión y signo de la constante cosmológica"],
    ["Resultado", "derivación, conjetura o cálculo dentro del modelo"],
    ["Alcance", "régimen y entradas que el resultado supone"],
    ["Interpretación", "lectura como espacio-tiempo emergente"],
    ["Salto", "tesis sobre qué existe o qué lo reemplaza"],
    ["Prueba", "observación que separaría rivales"],
  ],
  firewalls: ["≠ nuestro universo", "≠ toda la física", "≠ ilusorio", "≠ metafísica", "≠ confirmación"],
  title: "Cadena desde un modelo de física teórica hasta una tesis sobre la realidad",
  kicker: "CON-002 · CADENA DE INFERENCIA",
  headline: "Una reformulación no es una tesis sobre lo que existe",
  legend: "Verde: lo que se deriva o calcula. Ocre: lo que se interpreta o afirma. Azul: lo que podría decidirlo.",
};

function chain({ steps, firewalls, title, kicker, headline, legend } = chainCon001) {
  const x0 = 92;
  const w = 222;
  const gap = 18;
  const cards = steps
    .map(([title, text], i) => {
      const x = x0 + i * (w + gap);
      const fill = i < 3 ? "#e8f1ee" : i < 5 ? "#f3e6cf" : "#e6ecf5";
      return `<g filter="url(#shadow)"><rect x="${x}" y="300" width="${w}" height="250" rx="18" fill="${fill}"/></g>
  <text x="${x + 22}" y="350" fill="#2f6f66" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="2">${String(i + 1).padStart(2, "0")}</text>
  <text x="${x + 22}" y="392" fill="#14201f" font-family="Georgia, serif" font-size="21" font-weight="700">${title}</text>
  <foreignObject x="${x + 22}" y="410" width="${w - 44}" height="120"><p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;font:20px/1.35 Arial,sans-serif;color:#34403e">${text}</p></foreignObject>`;
    })
    .join("\n  ");
  const walls = firewalls
    .map((label, i) => {
      const x = x0 + (i + 1) * (w + gap) - gap / 2;
      return `<line x1="${x}" y1="580" x2="${x}" y2="640" stroke="#d9785b" stroke-width="3"/>
  <text x="${x}" y="676" text-anchor="middle" fill="#f0b39c" font-family="Arial, sans-serif" font-size="19">${label}</text>`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title>
  <desc id="desc">Seis capas: modelo, resultado, alcance, interpretación, salto metafísico y prueba. Entre cada par hay un cortafuegos que impide heredar la confianza de la capa anterior.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset="1" stop-color="#16282b"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".3"/></filter>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">${kicker}</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="46" font-weight="700">${headline}</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="24">Cada paso añade supuestos; la confianza de un paso no viaja sola al siguiente.</text>
  ${cards}
  ${walls}
  <text x="92" y="790" fill="#9fb0ab" font-family="Arial, sans-serif" font-size="20">${legend}</text>
</svg>
`;
}

function heroSpacetime() {
  const W = 1672;
  const H = 941;
  const rand = rng(2710);
  const parts = [];
  // Pozo de curvatura: desplaza la cuadrícula hacia un centro, como una masa en un diagrama de incrustación.
  const cx = W * 0.66;
  const cy = H * 0.56;
  const warp = (x, y) => {
    const dx = cx - x;
    const dy = cy - y;
    const r = Math.hypot(dx, dy) || 1;
    // El factor r²/(r² + 90²) anula el desplazamiento cerca del centro: las líneas no se cruzan.
    const k = 64 * Math.exp(-(r * r) / (2 * 200 * 200)) * ((r * r) / (r * r + 90 * 90));
    return [x + (dx / r) * k, y + (dy / r) * k];
  };
  // Frontera diagonal donde el continuo deja de ser la descripción.
  const seam = (y) => W * 0.72 + W * 0.1 * (y / H);
  const step = 46;
  const x0 = W * 0.36;
  // Continuo: líneas de la cuadrícula hasta la frontera, desvaneciéndose hacia la izquierda.
  for (let y = -step; y <= H + step; y += step) {
    const pts = [];
    for (let x = x0; x <= seam(y); x += 8) pts.push(warp(x, y));
    parts.push(`<polyline points="${pts.map(([a, b]) => `${f(a)},${f(b)}`).join(" ")}" fill="none" stroke="url(#fadeX)" stroke-width="1.4"/>`);
  }
  for (let x = x0; x <= W; x += step) {
    const pts = [];
    for (let y = -step; y <= H + step; y += 8) if (x <= seam(y)) pts.push(warp(x, y));
    if (pts.length > 1) parts.push(`<polyline points="${pts.map(([a, b]) => `${f(a)},${f(b)}`).join(" ")}" fill="none" stroke="url(#fadeX)" stroke-width="1.4"/>`);
  }
  // Puntos: las intersecciones sobreviven como sucesos discretos que se dispersan.
  const scattered = [];
  for (let y = -step; y <= H + step; y += step) {
    for (let x = x0; x <= W + step; x += step) {
      const s = seam(y);
      if (x < s - step || x > s + W * 0.2) continue;
      const k = Math.max(0, (x - (s - step)) / (W * 0.2));
      const [wx, wy] = warp(x, y);
      const px = wx + (rand() - 0.5) * 40 * k;
      const py = wy + (rand() - 0.5) * 40 * k;
      scattered.push([px, py]);
      parts.push(`<circle cx="${f(px)}" cy="${f(py)}" r="${f(2.2 + rand() * 2.4)}" fill="#e9b65c" fill-opacity="${f(0.9 - k * 0.35)}"/>`);
    }
  }
  // Facetas: más allá, los puntos se unen en triángulos de otra geometría.
  const far = scattered.filter(([x, y]) => x > seam(y) + W * 0.05);
  for (let i = 0; i < far.length; i += 1) {
    const [x1, y1] = far[i];
    const near = far
      .map(([x, y], j) => [Math.hypot(x - x1, y - y1), j])
      .filter(([d, j]) => j !== i && d < 110)
      .sort((a, b) => a[0] - b[0])
      .slice(0, 2);
    if (near.length === 2) {
      const [, a] = near[0];
      const [, b] = near[1];
      parts.push(`<path d="M${f(x1)} ${f(y1)}L${f(far[a][0])} ${f(far[a][1])}L${f(far[b][0])} ${f(far[b][1])}Z" fill="#9cb7d8" fill-opacity="${f(0.05 + rand() * 0.12)}" stroke="#9cb7d8" stroke-opacity=".55" stroke-width="1"/>`);
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Un continuo que se curva y se deshace en puntos y facetas</title>
  <desc id="desc">Composición generativa abstracta: una cuadrícula lisa curvada por un pozo se interrumpe en una frontera diagonal; sus cruces siguen como puntos dispersos que, más lejos, se unen en triángulos. No representa un resultado, un modelo ni una estructura física real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset=".55" stop-color="#13262a"/><stop offset="1" stop-color="#0c1517"/></linearGradient>
    <radialGradient id="glow" cx=".66" cy=".56" r=".5"><stop stop-color="#2c6d64" stop-opacity=".5"/><stop offset="1" stop-color="#2c6d64" stop-opacity="0"/></radialGradient>
    <linearGradient id="fadeX" gradientUnits="userSpaceOnUse" x1="${f(x0)}" y1="0" x2="${f(W * 0.62)}" y2="0"><stop stop-color="#8fd3c6" stop-opacity="0"/><stop offset="1" stop-color="#8fd3c6" stop-opacity=".75"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

function planckTests() {
  // Eje logarítmico de energía en GeV: de 10^0 a 10^20.
  const X0 = 120;
  const X1 = 1480;
  const ex = (exp) => X0 + ((X1 - X0) * exp) / 20;
  const ticks = [0, 5, 10, 15]
    .map((e) => `<line x1="${f(ex(e))}" y1="300" x2="${f(ex(e))}" y2="312" stroke="#9fb0ab" stroke-width="2"/>
  <text x="${f(ex(e))}" y="340" text-anchor="middle" fill="#9fb0ab" font-family="Arial, sans-serif" font-size="19">10${["⁰", "⁵", "¹⁰", "¹⁵", "²⁰"][e / 5]} GeV</text>`)
    .join("\n  ");
  const photon = ex(Math.log10(31));
  const planck = ex(Math.log10(1.22e19));
  const bound = ex(Math.log10(7.6 * 1.22e19));
  const panel = (x, title, lines, source) => `<g filter="url(#shadow)"><rect x="${x}" y="470" width="420" height="300" rx="18" fill="#e8f1ee"/></g>
  <text x="${x + 26}" y="516" fill="#14201f" font-family="Georgia, serif" font-size="25" font-weight="700">${title}</text>
  <foreignObject x="${x + 26}" y="534" width="368" height="190"><p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;font:20px/1.4 Arial,sans-serif;color:#34403e">${lines}</p></foreignObject>
  <text x="${x + 26}" y="748" fill="#2f6f66" font-family="Arial, sans-serif" font-size="17">${source}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Tres pruebas que llegan a la escala de Planck sin encontrar desviación</title>
  <desc id="desc">Eje de energía de 1 a 10 elevado a 20 GeV: el fotón de 31 GeV de GRB 090510 está diecisiete órdenes de magnitud por debajo de la energía de Planck, pero la distancia recorrida amplifica el efecto y el límite a una violación lineal de Lorentz queda por encima de 7.6 veces esa energía. Tres paneles resumen los estallidos de rayos gamma, GW170817 y el Holometer.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset="1" stop-color="#16282b"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".3"/></filter>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#e9b65c"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">CON-002 · PRUEBAS OBSERVACIONALES</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">La escala de Planck no es intocable</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="24">Ninguna prueba ha visto desviación; cada una descarta modelos concretos, no la idea general de emergencia.</text>
  <line x1="${X0}" y1="300" x2="${X1}" y2="300" stroke="#9fb0ab" stroke-width="2"/>
  ${ticks}
  <rect x="${f(planck)}" y="252" width="${f(X1 - planck)}" height="48" fill="#d9785b" fill-opacity=".38"/>
  <path d="M${f(bound)} 290L${f(bound + 10)} 300L${f(bound)} 310L${f(bound - 10)} 300Z" fill="#e9b65c"/>
  <text x="${f(bound + 12)}" y="340" text-anchor="end" fill="#e9b65c" font-family="Arial, sans-serif" font-size="19">límite: más de 7.6 veces</text>
  <circle cx="${f(photon)}" cy="300" r="10" fill="#e9b65c"/>
  <text x="${f(photon)}" y="282" text-anchor="middle" fill="#f3e6cf" font-family="Arial, sans-serif" font-size="19">fotón de 31 GeV</text>
  <line x1="${f(planck)}" y1="232" x2="${f(planck)}" y2="300" stroke="#f4f1e8" stroke-width="2" stroke-dasharray="6 5"/>
  <text x="${f(planck - 12)}" y="226" text-anchor="end" fill="#f4f1e8" font-family="Arial, sans-serif" font-size="19">energía de Planck ≈ 1.2 × 10¹⁹ GeV</text>
  <path d="M${f(photon)} 316 C ${f(photon + 60)} 400, ${f(bound - 200)} 400, ${f(bound - 40)} 352" fill="none" stroke="#e9b65c" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="${f((photon + bound) / 2)}" y="436" text-anchor="middle" fill="#e9b65c" font-family="Arial, sans-serif" font-size="20">la distancia cosmológica amplifica un retraso minúsculo: la prueba alcanza la escala de Planck</text>
  ${panel(92, "Estallidos de rayos gamma", "Fotones de energía muy distinta llegaron casi juntos tras miles de millones de años luz. Una violación lineal de Lorentz debe aparecer, si existe, por encima de 7.6 veces la energía de Planck.", "Fermi 2009; Vasileiou y col. 2013")}
  ${panel(590, "GW170817", "Ondas gravitacionales y rayos gamma llegaron con 1.74 ± 0.05 s de diferencia. La velocidad de la gravedad y la de la luz difieren en menos de unas partes en 10¹⁵.", "LIGO, Virgo y Fermi 2017")}
  ${panel(1088, "Holometer", "Dos interferómetros de 40 m buscaron temblores correlacionados de posición por debajo del tiempo de Planck. No los encontraron y acotaron modelos de ruido de cizalla.", "Chou y col. 2016, 2017")}
  <text x="92" y="838" fill="#9fb0ab" font-family="Arial, sans-serif" font-size="19">Escala logarítmica. Franja sombreada: energías por encima de la de Planck. Los programas que conservan la invariancia de Lorentz no predicen estas señales.</text>
</svg>
`;
}

fs.mkdirSync(OUT, { recursive: true });
const heroSvg = hero();
fs.writeFileSync(path.join(OUT, "hero-con-001-percepcion-interfaz.svg"), heroSvg);
fs.writeFileSync(path.join(OUT, "cadena-modelo-prueba-con-001.svg"), chain());
const heroSpacetimeSvg = heroSpacetime();
fs.writeFileSync(path.join(OUT, "hero-con-002-espacio-tiempo.svg"), heroSpacetimeSvg);
fs.writeFileSync(path.join(OUT, "cadena-modelo-prueba-con-002.svg"), chain(chainCon002));
fs.writeFileSync(path.join(OUT, "escala-pruebas-espacio-tiempo-con-002.svg"), planckTests());

// --png rasteriza todas las portadas; --png=con-002 sólo las indicadas, para no reescribir PNG ya auditados.
const pngArg = process.argv.find((arg) => arg.startsWith("--png"));
if (pngArg) {
  const only = pngArg.includes("=") ? pngArg.split("=")[1] : null;
  const heroes = [
    ["con-001", heroSvg, "hero-con-001-percepcion-interfaz.png"],
    ["con-002", heroSpacetimeSvg, "hero-con-002-espacio-tiempo.png"],
  ].filter(([key]) => !only || key === only);
  const { chromium } = await import("@playwright/test");
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1672, height: 941 } });
  for (const [, svg, file] of heroes) {
    await page.setContent(`<html><body style="margin:0">${svg}</body></html>`);
    await page.screenshot({ path: path.join(OUT, file) });
  }
  await browser.close();
}
console.log("Visuales CON generadas en assets/visuales");
