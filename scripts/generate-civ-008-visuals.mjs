// Genera las visuales de CIV-008 (escrituras, notaciones y oralidad)
// de forma determinista: misma semilla, mismo archivo. Sin modelos de imagen ni
// servicios externos. La matriz se construye desde content/civilization-scripts.json
// para que el visual y el módulo público no se separen.
// Uso: node scripts/generate-civ-008-visuals.mjs [--png]
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "assets", "visuales");
const DATA = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-scripts.json"), "utf8"));
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

// Portada: seis bandas horizontales sobre un mismo fondo, una por soporte genérico
// —figuras de arcilla, impresiones en una tablilla lisa, grietas en hueso, cuerdas
// anudadas, incisiones en una tabla de madera y ondas de voz—. Ninguna marca copia
// un signo real de ningún sistema; no hay texto ni personas.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(8008);
  const parts = [];
  const ink = "#d9b46b";
  const sage = "#9fbf9a";
  const clay = "#c98a5e";
  const ash = "#b8743f";
  const bone = "#e6d6b4";

  // Fondo: líneas finas de renglón, sin escritura.
  for (let k = 0; k < 30; k += 1) {
    parts.push(`<path d="M0 ${f(20 + k * 31)}H${W}" stroke="#3d3426" stroke-opacity=".35" stroke-width="1"/>`);
  }

  const bands = Array.from({ length: 6 }, (_, i) => ({ y: 60 + i * 140, h: 112, i }));
  for (const b of bands) {
    parts.push(`<rect x="70" y="${b.y}" width="${W - 140}" height="${b.h}" fill="#12100d" fill-opacity=".82" stroke="#7d6646" stroke-width="1.2"/>`);
    const cy = b.y + b.h / 2;
    if (b.i === 0) {
      // figuras de arcilla: conos, esferas, discos
      for (let k = 0; k < 26; k += 1) {
        const x = 110 + k * 56 + rand() * 10;
        const kind = Math.floor(rand() * 3);
        if (kind === 0) parts.push(`<circle cx="${f(x)}" cy="${f(cy)}" r="${f(10 + rand() * 6)}" fill="#1d1813" stroke="${clay}" stroke-width="1.6"/>`);
        else if (kind === 1) parts.push(`<path d="M${f(x - 11)} ${f(cy + 14)}L${f(x)} ${f(cy - 18)}L${f(x + 11)} ${f(cy + 14)}Z" fill="#1d1813" stroke="${clay}" stroke-width="1.6"/>`);
        else parts.push(`<ellipse cx="${f(x)}" cy="${f(cy)}" rx="${f(14 + rand() * 4)}" ry="6" fill="#1d1813" stroke="${clay}" stroke-width="1.6"/>`);
      }
    } else if (b.i === 1) {
      // impresiones redondas y en cuña sobre una superficie lisa
      for (let k = 0; k < 34; k += 1) {
        const x = 110 + k * 43;
        const y = cy - 20 + (k % 2) * 34;
        if (rand() > 0.45) parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(6 + rand() * 4)}" fill="none" stroke="${ink}" stroke-opacity=".8" stroke-width="2"/>`);
        else parts.push(`<path d="M${f(x - 8)} ${f(y - 6)}L${f(x + 9)} ${f(y)}L${f(x - 8)} ${f(y + 6)}Z" fill="${ink}" fill-opacity=".55"/>`);
      }
    } else if (b.i === 2) {
      // grietas ramificadas en un hueso pulido
      parts.push(`<rect x="100" y="${b.y + 14}" width="${W - 200}" height="${b.h - 28}" rx="40" fill="#1a1712" stroke="${bone}" stroke-opacity=".5"/>`);
      for (let k = 0; k < 18; k += 1) {
        const x = 150 + k * 80;
        const len = 18 + rand() * 18;
        parts.push(`<path d="M${x} ${f(cy - len)}V${f(cy + len)}M${x} ${f(cy)}L${f(x + 14 + rand() * 12)} ${f(cy - 6 - rand() * 10)}" stroke="${bone}" stroke-opacity=".8" stroke-width="1.5" fill="none"/>`);
      }
    } else if (b.i === 3) {
      // cuerda principal con cuerdas colgantes y nudos
      parts.push(`<path d="M100 ${b.y + 18}H${W - 100}" stroke="${sage}" stroke-width="3"/>`);
      const colors = [sage, ink, clay, bone, ash];
      for (let k = 0; k < 64; k += 1) {
        const x = 115 + k * 23;
        const c = colors[Math.floor(rand() * colors.length)];
        const len = 50 + rand() * 40;
        parts.push(`<path d="M${x} ${b.y + 18}C${f(x - 3)} ${f(b.y + 40)} ${f(x + 3)} ${f(b.y + 60)} ${x} ${f(b.y + 18 + len)}" stroke="${c}" stroke-opacity=".75" stroke-width="1.6" fill="none"/>`);
        const knots = Math.floor(rand() * 4);
        for (let n = 0; n < knots; n += 1) parts.push(`<circle cx="${x}" cy="${f(b.y + 34 + n * 14 + rand() * 6)}" r="2.6" fill="${c}"/>`);
      }
    } else if (b.i === 4) {
      // tabla de madera con líneas incisas abstractas (sin glifos)
      for (let k = 0; k < 6; k += 1) parts.push(`<path d="M100 ${b.y + 18 + k * 16}C500 ${b.y + 12 + k * 16} 1100 ${b.y + 24 + k * 16} ${W - 100} ${b.y + 18 + k * 16}" stroke="#5b4630" stroke-width="1" fill="none"/>`);
      for (let k = 0; k < 90; k += 1) {
        const x = 110 + k * 16.4;
        const row = k % 2;
        const y = b.y + 28 + row * 40;
        parts.push(`<path d="M${f(x)} ${f(y)}l${f(4 + rand() * 4)} ${f(10 + rand() * 12)}" stroke="${ash}" stroke-opacity=".85" stroke-width="1.8"/>`);
      }
    } else {
      // ondas de voz: la oralidad como archivo sin signo gráfico
      for (let w = 0; w < 4; w += 1) {
        let d = `M100 ${cy}`;
        for (let x = 100; x <= W - 100; x += 10) d += `L${x} ${f(cy + Math.sin(x / (40 + w * 18) + w) * (12 + w * 7) * Math.sin(x / 400 + w))}`;
        parts.push(`<path d="${d}" fill="none" stroke="${w % 2 ? sage : ink}" stroke-opacity="${f(0.75 - w * 0.12)}" stroke-width="1.6"/>`);
      }
    }
  }

  for (let k = 0; k < 160; k += 1) {
    parts.push(`<circle cx="${f(rand() * W)}" cy="${f(rand() * H)}" r="${f(0.6 + rand() * 1.2)}" fill="#e2c48c" fill-opacity="${f(rand() * 0.28)}"/>`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Seis soportes de registro sin jerarquía</title>
  <desc id="desc">Composición generativa abstracta para CIV-008: seis bandas horizontales del mismo tamaño sobre un fondo de renglones vacíos. Cada banda guarda un soporte genérico —figuras de arcilla, impresiones redondas y en cuña, grietas en un hueso pulido, cuerdas colgantes con nudos de colores, incisiones en una tabla de madera y ondas de voz—. Ninguna marca copia un signo real de ningún sistema de escritura, y no hay texto ni personas. Las bandas tienen el mismo tamaño porque ningún soporte está por encima de otro.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0d0c0a"/><stop offset=".6" stop-color="#15130f"/><stop offset="1" stop-color="#0b0d0c"/></linearGradient>
    <radialGradient id="glow" cx=".5" cy=".4" r=".65"><stop stop-color="#5a4a30" stop-opacity=".34"/><stop offset="1" stop-color="#5a4a30" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
</svg>
`;
}

const STYLE = `.k{font:19px Consolas,monospace;letter-spacing:2px;fill:#c39456}.h{font:23px Georgia,serif;fill:#efe3d1}.t{font:19px Arial,sans-serif;fill:#c9c2b8}.l{font:16px Arial,sans-serif;fill:#d6a27b}.small{font:14px Consolas,monospace;fill:#91ad92}.cell{font:13px Arial,sans-serif;fill:#151310}.head{font:13px Consolas,monospace;letter-spacing:1px;fill:#c39456}.row{font:15px Arial,sans-serif;fill:#e6dccd}.rule{stroke:#8b6a43;stroke-width:2}.dash{stroke:#a96545;stroke-width:2;stroke-dasharray:8 8;fill:none}`;

function chain() {
  const steps = [
    ["Signo", "inventario,", "paleografía"],
    ["Sistema", "posición, orden,", "frecuencia"],
    ["Lengua", "rebus, nombres,", "bilingües"],
    ["Función", "género, contexto,", "aritmética"],
    ["Institución", "escribas,", "archivo, corte"],
    ["Lectura", "predicción", "reproducida"],
  ];
  const leaps = ["≠ sistema", "≠ lengua", "≠ función", "≠ Estado", "≠ lectura"];
  const boxes = steps.map(([h, a, b], i) => {
    const x = 60 + i * 252;
    return `  <g transform="translate(${x} 300)"><rect width="220" height="150" fill="#141a19" stroke="#779176"/><text x="16" y="46" class="h">${esc(h)}</text><text x="16" y="86" class="small">${esc(a)}</text><text x="16" y="108" class="small">${esc(b)}</text></g>`;
  });
  const arrows = steps.slice(0, -1).map((_, i) => {
    const x = 60 + i * 252 + 220;
    return `  <path class="rule" d="M${x + 4} 375H${x + 26}"/><path d="M${x + 26} 369L${x + 31} 375L${x + 26} 381" fill="none" stroke="#8b6a43" stroke-width="2"/>`;
  });
  const jumps = leaps.map((l, i) => {
    const x = 60 + i * 252 + 110;
    return `  <path class="dash" d="M${x} 455C${x + 52} 555 ${x + 200} 555 ${x + 252} 455"/><text x="${x + 80}" y="594" class="l">${esc(l)}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Un signo no es una lengua: seis niveles y sus saltos</title>
  <desc id="desc">Seis cajas —signo, sistema, lengua codificada, función, institución y desciframiento— con la prueba que corresponde a cada una, unidas por líneas que indican el orden de lectura, no una herencia. Debajo, arcos discontinuos marcan lo que cada nivel no hereda del anterior: el signo no da el sistema, el sistema no da la lengua, la lengua no da la función, la función no da el Estado y la institución no da la lectura.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="60" y="96" class="k">CIV-008 · SEIS NIVELES</text>
  <text x="60" y="150" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Un signo no es una lengua</text>
  <text x="60" y="190" class="t">Cada archivo de signos se mide en seis niveles, cada uno con su propia prueba.</text>
${boxes.join("\n")}
${arrows.join("\n")}
${jumps.join("\n")}
  <text x="60" y="700" class="t">La protocuneiforme contaba con más de mil signos y casi no anotaba la lengua; el quipu sumaba sin glifos.</text>
  <text x="60" y="736" class="t">Una entropía de tipo lingüístico no es una lectura; una madera del siglo XV no fecha la incisión.</text>
  <text x="60" y="772" class="t">El maya se descifró cuando sus lecturas empezaron a predecir textos nuevos.</text>
</svg>
`;
}

const STATUS_FILL = { sostenido: "#a9c1a7", condicionado: "#d9bd8d", "no-demostrado": "#d79a70", "dato-ausente": "#6f6a62" };
const STATUS_LABEL = { sostenido: "sostenido", condicionado: "condicionado", "no-demostrado": "no demostrado", "dato-ausente": "dato ausente" };

function matrix() {
  const fields = ["SIGNO", "SISTEMA", "LENGUA", "FUNCIÓN", "INSTITUCIÓN", "LECTURA"];
  const x0 = 470;
  const cw = 180;
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
  <title id="title">Nueve archivos de signos y oralidad por seis niveles</title>
  <desc id="desc">Matriz de ${DATA.cases.length} archivos (fichas y bullas, protocuneiforme de Uruk, huesos oraculares Shang, signos del Indo, bloque de Cascajal y San Andrés, escritura maya, quipus, rongorongo y tradiciones orales africanas) por seis niveles: signo, sistema, lengua codificada, función, institución y desciframiento o lectura crítica. Cada celda indica el estado del nivel en el módulo público: sostenido, condicionado, no demostrado o dato ausente. Ninguna fila está completa en verde y cada columna ordena los archivos de otro modo.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#0b1011"/><stop offset="1" stop-color="#171512"/></linearGradient>
    <style>${STYLE}</style>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="70" y="96" class="k">CIV-008 · MATRIZ DE ARCHIVOS</text>
  <text x="70" y="150" font-family="Georgia,serif" font-size="42" fill="#f2e7d6">Ninguna fila es una escalera</text>
  <text x="70" y="190" class="t">El estado es el del nivel en el archivo, no una calificación del sistema. «Dato ausente» no es «sin escritura» ni «sin historia».</text>
  ${head}
${rows.join("\n")}
  ${legend}
</svg>
`;
}

const heroSvg = hero();
fs.writeFileSync(path.join(OUT, "hero-civ-008-escrituras-notaciones-oralidad.svg"), heroSvg);
fs.writeFileSync(path.join(OUT, "cadena-signo-lengua-civ-008.svg"), chain());
fs.writeFileSync(path.join(OUT, "matriz-archivos-niveles-civ-008.svg"), matrix());

if (process.argv.includes("--png")) {
  const { default: sharp } = await import("sharp");
  await sharp(Buffer.from(heroSvg)).png({ compressionLevel: 9 }).toFile(path.join(OUT, "hero-civ-008-escrituras-notaciones-oralidad.png"));
}
console.log("CIV-008: visuales escritas en assets/visuales");
