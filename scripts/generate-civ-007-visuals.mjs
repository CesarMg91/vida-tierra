// Genera las visuales de CIV-007 (urbanismos comparados)
// de forma determinista: misma semilla, mismo archivo. Sin modelos de imagen ni
// servicios externos. La matriz se construye desde content/civilization-urbanisms.json
// para que el visual y el módulo público no se separen.
// Uso: node scripts/generate-civ-007-visuals.mjs [--png]
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "assets", "visuales");
const DATA = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-urbanisms.json"), "utf8"));
const f = (n) => Number(n.toFixed(1));

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

const esc = (text) => String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Portada: siete láminas de prospección con trazas urbanas genéricas —retícula,
// puntos dispersos, racimo de montículos, recintos curvos, líneas de presa,
// terrazas y un núcleo con plaza— sobre un mismo fondo. Cada lámina tiene su
// propia densidad y su propia regla; ninguna es el plano de un sitio real, ni hay
// texto ni personas.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(7007);
  const parts = [];
  const ink = "#d9b46b";
  const sage = "#9fbf9a";
  const clay = "#c98a5e";
  const ash = "#b8743f";

  // Fondo: curvas de nivel genéricas, no un territorio.
  for (let k = 0; k < 14; k += 1) {
    let d = `M0 ${f(60 + k * 64)}`;
    for (let x = 0; x <= W; x += 56) d += `L${x} ${f(60 + k * 64 + Math.sin(x / 210 + k * 0.7) * 16 + (rand() - 0.5) * 5)}`;
    parts.push(`<path d="${d}" fill="none" stroke="#3d3426" stroke-opacity=".55" stroke-width="1"/>`);
  }

  const plates = Array.from({ length: 7 }, (_, i) => ({ x: 60 + i * 225, y: 150 + (i % 2) * 80, w: 195, h: 470, i }));
  for (const p of plates) {
    parts.push(`<rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" fill="#12100d" fill-opacity=".84" stroke="#7d6646" stroke-width="1.4"/>`);
    const cx = p.x + p.w / 2;
    const cy = p.y + p.h / 2;
    if (p.i === 0) {
      // retícula densa con cuadras
      for (let r = 0; r < 12; r += 1) for (let c = 0; c < 5; c += 1) if (rand() > 0.12) parts.push(`<rect x="${p.x + 14 + c * 35}" y="${p.y + 16 + r * 37}" width="28" height="30" fill="none" stroke="${ink}" stroke-opacity=".7"/>`);
    } else if (p.i === 1) {
      // puntos dispersos de baja densidad con calzadas
      for (let k = 0; k < 70; k += 1) parts.push(`<circle cx="${f(p.x + 10 + rand() * (p.w - 20))}" cy="${f(p.y + 10 + rand() * (p.h - 20))}" r="${f(1.5 + rand() * 2)}" fill="${sage}" fill-opacity=".8"/>`);
      parts.push(`<path d="M${p.x + 20} ${p.y + 60}L${cx} ${cy}L${p.x + p.w - 20} ${p.y + p.h - 50}M${cx} ${cy}L${p.x + 30} ${p.y + p.h - 30}" stroke="${sage}" stroke-opacity=".5" stroke-width="2"/>`);
    } else if (p.i === 2) {
      // racimo de montículos discretos
      for (let k = 0; k < 11; k += 1) {
        const mx = p.x + 30 + rand() * (p.w - 60);
        const my = p.y + 40 + rand() * (p.h - 80);
        const r = 12 + rand() * 16;
        parts.push(`<ellipse cx="${f(mx)}" cy="${f(my)}" rx="${f(r)}" ry="${f(r * 0.7)}" fill="#1d1813" stroke="${clay}" stroke-opacity=".8" stroke-width="1.4"/>`);
      }
    } else if (p.i === 3) {
      // recintos curvos concéntricos y pocas casas
      for (let k = 0; k < 4; k += 1) parts.push(`<path d="M${cx - 70 + k * 12} ${cy + 40}C${cx - 80 + k * 12} ${cy - 120 + k * 20} ${cx + 80 - k * 12} ${cy - 120 + k * 20} ${cx + 70 - k * 12} ${cy + 40}" fill="none" stroke="${ash}" stroke-opacity=".75" stroke-width="${3 - k * 0.5}"/>`);
      for (let k = 0; k < 9; k += 1) parts.push(`<circle cx="${f(p.x + 20 + rand() * (p.w - 40))}" cy="${f(cy + 80 + rand() * 120)}" r="4" fill="none" stroke="${ash}" stroke-opacity=".5"/>`);
    } else if (p.i === 4) {
      // líneas de presa y un recinto rectangular
      parts.push(`<rect x="${cx - 55}" y="${p.y + p.h - 170}" width="110" height="120" fill="none" stroke="${ink}" stroke-opacity=".8" stroke-width="2"/>`);
      for (let k = 0; k < 6; k += 1) {
        const yy = p.y + 40 + k * 42;
        parts.push(`<path d="M${f(p.x + 15 + rand() * 30)} ${yy}L${f(p.x + p.w - 15 - rand() * 30)} ${f(yy + 10 + rand() * 10)}" stroke="${sage}" stroke-opacity=".75" stroke-width="3"/>`);
      }
    } else if (p.i === 5) {
      // terrazas en curvas paralelas
      for (let k = 0; k < 16; k += 1) {
        const yy = p.y + 30 + k * 27;
        parts.push(`<path d="M${p.x + 12} ${yy}C${p.x + 60} ${yy - 12} ${p.x + 130} ${yy + 12} ${p.x + p.w - 12} ${yy - 4}" fill="none" stroke="${clay}" stroke-opacity=".6" stroke-width="1.2"/>`);
      }
    } else {
      // núcleo con plaza y montículo mayor, casas alrededor
      parts.push(`<rect x="${cx - 40}" y="${cy - 40}" width="80" height="80" fill="none" stroke="${ink}" stroke-opacity=".85" stroke-width="1.6"/>`);
      parts.push(`<path d="M${cx - 30} ${cy - 70}L${cx} ${cy - 110}L${cx + 30} ${cy - 70}Z" fill="#1d1813" stroke="${ash}" stroke-opacity=".9" stroke-width="1.6"/>`);
      for (let k = 0; k < 26; k += 1) {
        const a = rand() * Math.PI * 2;
        const rr = 80 + rand() * 120;
        parts.push(`<rect x="${f(cx + Math.cos(a) * rr * 0.45)}" y="${f(cy + Math.sin(a) * rr)}" width="7" height="5" fill="none" stroke="${sage}" stroke-opacity=".7"/>`);
      }
    }
    // Regla con un número distinto de marcas: cada caso se mide a otra escala.
    const ticks = 3 + p.i;
    let ruler = `<path d="M${p.x + 10} ${p.y + p.h + 22}H${p.x + p.w - 10}" stroke="${ash}" stroke-opacity=".7" stroke-width="1.4"/>`;
    for (let k = 0; k <= ticks; k += 1) {
      const tx = p.x + 10 + (k * (p.w - 20)) / ticks;
      ruler += `<path d="M${f(tx)} ${p.y + p.h + 16}V${p.y + p.h + 28}" stroke="${ash}" stroke-opacity=".7" stroke-width="1.2"/>`;
    }
    parts.push(ruler);
  }

  for (let k = 0; k < 200; k += 1) {
    parts.push(`<circle cx="${f(rand() * W)}" cy="${f(rand() * H)}" r="${f(0.6 + rand() * 1.3)}" fill="#e2c48c" fill-opacity="${f(rand() * 0.3)}"/>`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Siete láminas de trazas urbanas con escalas distintas</title>
  <desc id="desc">Composición generativa abstracta para CIV-007: siete láminas sobre un fondo de curvas de nivel. Cada una guarda una traza genérica —retícula densa, puntos dispersos con calzadas, racimo de montículos, recintos curvos, líneas de presa con un recinto, terrazas y un núcleo con plaza y montículo— y bajo cada lámina hay una regla con un número distinto de marcas, porque cada caso se mide a otra escala. No representa el plano de ningún sitio real, ni personas, ni texto.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0d0c0a"/><stop offset=".6" stop-color="#15130f"/><stop offset="1" stop-color="#0b0d0c"/></linearGradient>
    <radialGradient id="glow" cx=".45" cy=".35" r=".6"><stop stop-color="#5a4a30" stop-opacity=".38"/><stop offset="1" stop-color="#5a4a30" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

const STYLE = `.k{font:19px Consolas,monospace;letter-spacing:2px;fill:#c39456}.h{font:24px Georgia,serif;fill:#efe3d1}.t{font:19px Arial,sans-serif;fill:#c9c2b8}.l{font:16px Arial,sans-serif;fill:#d6a27b}.small{font:14px Consolas,monospace;fill:#91ad92}.cell{font:13px Arial,sans-serif;fill:#151310}.head{font:13px Consolas,monospace;letter-spacing:1px;fill:#c39456}.row{font:15px Arial,sans-serif;fill:#e6dccd}.rule{stroke:#8b6a43;stroke-width:2}.dash{stroke:#a96545;stroke-width:2;stroke-dasharray:8 8;fill:none}`;

function chain() {
  const steps = [
    ["Densidad", "estructuras/ha ×", "coetáneo × personas"],
    ["Extensión", "prospección,", "LiDAR, geofísica"],
    ["Monumento", "volumen y", "energética"],
    ["Plan", "retícula, obra", "común, secuencia"],
    ["Desigualdad", "Gini de áreas,", "ajuares, dieta"],
    ["Gobernanza", "textos, palacios,", "espacios"],
    ["Abasto", "campos, agua,", "isótopos, depósitos"],
  ];
  const leaps = ["≠ extensión", "≠ población", "≠ Estado", "≠ soberano", "≠ clase", "≠ abasto"];
  const boxes = steps.map(([h, a, b], i) => {
    const x = 50 + i * 214;
    return `  <g transform="translate(${x} 300)"><rect width="190" height="150" fill="#141a19" stroke="#779176"/><text x="14" y="46" class="h">${esc(h)}</text><text x="14" y="86" class="small">${esc(a)}</text><text x="14" y="108" class="small">${esc(b)}</text></g>`;
  });
  const arrows = steps.slice(0, -1).map((_, i) => {
    const x = 50 + i * 214 + 190;
    return `  <path class="rule" d="M${x + 2} 375H${x + 20}"/><path d="M${x + 20} 369L${x + 24} 375L${x + 20} 381" fill="none" stroke="#8b6a43" stroke-width="2"/>`;
  });
  const jumps = leaps.map((l, i) => {
    const x = 50 + i * 214 + 95;
    return `  <path class="dash" d="M${x} 455C${x + 44} 555 ${x + 170} 555 ${x + 214} 455"/><text x="${x + 52}" y="594" class="l">${esc(l)}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Una ciudad no es un tamaño: siete dimensiones y sus saltos</title>
  <desc id="desc">Siete cajas —densidad, extensión, monumentalidad, planificación, desigualdad, gobernanza y abastecimiento— con el instrumento que mide cada una, unidas por líneas que indican el orden de lectura, no una herencia. Debajo, arcos discontinuos marcan lo que cada dimensión no hereda de la anterior: la densidad no da la extensión, la extensión no da la población, el monumento no da el Estado, el plan no da al soberano, el Gini no da la clase y la gobernanza no da el abastecimiento.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="50" y="96" class="k">CIV-007 · SIETE DIMENSIONES</text>
  <text x="50" y="150" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Una ciudad no es un tamaño</text>
  <text x="50" y="190" class="t">Cada caso urbano se mide en siete dimensiones, cada una con su instrumento y sus supuestos.</text>
${boxes.join("\n")}
${arrows.join("\n")}
${jumps.join("\n")}
  <text x="50" y="700" class="t">Gran Zimbabue tuvo muros monumentales y probablemente no más de 10 000 habitantes; Caral, monumentos sin cerámica.</text>
  <text x="50" y="736" class="t">Mohenjo-daro tuvo calles planeadas y un Gini residencial que bajó; Jenne-jeno fue un racimo sin ciudadela.</text>
  <text x="50" y="772" class="t">Un km² de LiDAR mide relieve, no personas; un Gini mide áreas de casas, no clases.</text>
</svg>
`;
}

const STATUS_FILL = { sostenido: "#a9c1a7", condicionado: "#d9bd8d", "no-demostrado": "#d79a70", "dato-ausente": "#6f6a62" };
const STATUS_LABEL = { sostenido: "sostenido", condicionado: "condicionado", "no-demostrado": "no demostrado", "dato-ausente": "dato ausente" };

function matrix() {
  const fields = ["DENSIDAD", "EXTENSIÓN", "MONUMENTO", "PLAN", "DESIGUALDAD", "GOBIERNO", "ABASTO"];
  const x0 = 420;
  const cw = 160;
  const y0 = 250;
  const rh = 58;
  const head = fields.map((h, c) => `<text x="${x0 + c * cw + 10}" y="${y0 - 14}" class="head">${esc(h)}</text>`).join("");
  const rows = DATA.cases.map((item, r) => {
    const y = y0 + r * rh;
    const label = `<text x="70" y="${y + 26}" class="row">${esc(item.title)}</text><text x="70" y="${y + 46}" class="small">${esc(item.region)}</text>`;
    const cells = item.steps.map((step, c) => `<rect x="${x0 + c * cw}" y="${y}" width="${cw - 8}" height="${rh - 8}" fill="${STATUS_FILL[step.status]}" fill-opacity=".9" stroke="#2c2720"/><text x="${x0 + c * cw + 10}" y="${y + 32}" class="cell"${step.status === "dato-ausente" ? ' fill="#e6dccd"' : ""}>${esc(STATUS_LABEL[step.status])}</text>`).join("");
    return `  <g>${label}${cells}</g>`;
  });
  const legend = Object.entries(STATUS_LABEL).map(([key, label], i) => `<rect x="${70 + i * 230}" y="808" width="22" height="22" fill="${STATUS_FILL[key]}"/><text x="${102 + i * 230}" y="825" class="t">${esc(label)}</text>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Nueve casos urbanos por siete dimensiones</title>
  <desc id="desc">Matriz de ${DATA.cases.length} casos urbanos (Mohenjo-daro y Harappa, Liangzhu y Erlitou, Teotihuacan, Tikal y Caracol, Caral y Chan Chan, Jenne-jeno, Gran Zimbabue, ciudades suajili y Cahokia) por siete dimensiones: densidad, extensión, monumentalidad, planificación, desigualdad, gobernanza y abastecimiento. Cada celda indica el estado de la dimensión en el módulo público: sostenido, condicionado, no demostrado o dato ausente. Ninguna fila está completa en verde y cada columna ordena los casos de otro modo.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="70" y="96" class="k">CIV-007 · MATRIZ DE CASOS</text>
  <text x="70" y="150" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Ninguna fila está completa</text>
  <text x="70" y="190" class="t">El estado es el de cada dimensión del archivo, no una calificación de la ciudad. «Dato ausente» no es baja densidad ni igualdad.</text>
  ${head}
${rows.join("\n")}
  ${legend}
</svg>
`;
}

const heroSvg = hero();
fs.writeFileSync(path.join(OUT, "hero-civ-007-urbanismos-comparados.svg"), heroSvg);
fs.writeFileSync(path.join(OUT, "cadena-forma-urbana-civ-007.svg"), chain());
fs.writeFileSync(path.join(OUT, "matriz-ciudades-dimensiones-civ-007.svg"), matrix());

if (process.argv.includes("--png")) {
  const { default: sharp } = await import("sharp");
  await sharp(Buffer.from(heroSvg)).png({ compressionLevel: 9 }).toFile(path.join(OUT, "hero-civ-007-urbanismos-comparados.png"));
}
console.log("CIV-007: visuales escritas en assets/visuales");
