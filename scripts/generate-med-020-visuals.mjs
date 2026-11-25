// Genera las visuales de MED-020 de forma determinista: misma semilla, mismo archivo.
// Uso: node scripts/generate-med-020-visuals.mjs [--png]
//   sin argumentos: escribe los tres SVG;
//   --png: además rasteriza la portada a PNG con sharp (1672 × 941).
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "assets", "visuales");
const HERO = "hero-med-020-estadistica-vacunacion-epidemiologia";
const CHAIN = "cadena-poblacion-desigualdad-med-020.svg";
const MATRIX = "matriz-estadistica-vacunacion-epidemiologia-med-020.svg";

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

// Portada: una población de puntos; un marco (denominador) cuenta sólo una parte;
// un segundo marco (comparación) se superpone; los puntos fuera quedan tenues.
function hero() {
  const W = 1672;
  const H = 941;
  const rand = rng(2020);
  const cols = 52;
  const rows = 29;
  const gx = W / (cols + 1);
  const gy = H / (rows + 1);
  const frameA = { x: W * 0.34, y: H * 0.2, w: W * 0.3, h: H * 0.56 };
  const frameB = { x: W * 0.58, y: H * 0.28, w: W * 0.27, h: H * 0.5 };
  const inside = (fr, x, y) => x > fr.x && x < fr.x + fr.w && y > fr.y && y < fr.y + fr.h;
  const parts = [];
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const x = gx * (c + 1) + (rand() - 0.5) * gx * 0.5;
      const y = gy * (r + 1) + (rand() - 0.5) * gy * 0.5;
      const inA = inside(frameA, x, y);
      const inB = inside(frameB, x, y);
      const radius = 2.2 + rand() * 2.4;
      if (inA || inB) {
        const event = rand() < (inA ? 0.11 : 0.04);
        const fill = event ? (inA ? "#e2a44f" : "#d9785b") : "#e9e2cf";
        parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(radius + 0.6)}" fill="${fill}" fill-opacity="${event ? 0.95 : 0.78}"/>`);
      } else if (x < W * 0.2 && rand() < 0.55) {
        parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(radius)}" fill="none" stroke="#6f8a86" stroke-opacity=".35" stroke-width="1"/>`);
      } else {
        parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(radius)}" fill="#7fa9a0" fill-opacity="${f(0.16 + rand() * 0.18)}"/>`);
      }
    }
  }
  const frame = (fr, color, dash) =>
    `<rect x="${f(fr.x)}" y="${f(fr.y)}" width="${f(fr.w)}" height="${f(fr.h)}" rx="18" fill="none" stroke="${color}" stroke-width="3" stroke-opacity=".85"${dash ? ' stroke-dasharray="14 10"' : ""}/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Una población de puntos y dos marcos que deciden quién cuenta</title>
  <desc id="desc">Composición generativa abstracta: una retícula de puntos representa a una población; un marco continuo y otro discontinuo seleccionan grupos que se cuentan y se comparan; algunos puntos dentro de los marcos están coloreados como eventos; los de fuera quedan tenues y, a la izquierda, sin relleno, como personas no contadas. No representa datos, un país, una vacuna ni un resultado.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#10181a"/><stop offset=".6" stop-color="#14211f"/><stop offset="1" stop-color="#0c1312"/></linearGradient>
    <radialGradient id="glow" cx=".55" cy=".48" r=".5"><stop stop-color="#2f5f55" stop-opacity=".45"/><stop offset="1" stop-color="#2f5f55" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
  ${frame(frameA, "#e2a44f", false)}
  ${frame(frameB, "#8fd3c6", true)}
</svg>
`;
}

function chain() {
  const steps = [
    ["Población", ["quién define", "el grupo", "y con qué fin"]],
    ["Exposición", ["qué recibió", "qué material", "cómo se verificó"]],
    ["Denominador", ["numerador", "base · periodo", "criterio de caso"]],
    ["Comparación", ["cómo se", "formaron los", "grupos"]],
    ["Efecto", ["qué cantidad", "directo · total", "incertidumbre"]],
    ["Implementación", ["producción", "coerción", "aceptación"]],
    ["Desigualdad", ["quién falta", "quién carga", "quién gana"]],
  ];
  const firewalls = [["lista ≠", "población"], ["etiqueta ≠", "exposición"], ["numerador ≠", "tasa"], ["contraste ≠", "causa"], ["ensayo ≠", "cada lote"], ["promedio ≠", "beneficio"]];
  const cards = steps
    .map(([name, lines], i) => {
      const x = 70 + i * 212;
      const size = name.length > 11 ? 19 : 22;
      return `<g transform="translate(${x} 275)"><rect width="190" height="235" rx="22" fill="url(#card)"/><circle cx="38" cy="40" r="22" fill="#2d493d"/><text x="38" y="48" fill="#fff" text-anchor="middle" font-size="20" font-weight="700">${String(i + 1).padStart(2, "0")}</text><text x="24" y="92" fill="#1f211e" font-size="${size}" font-weight="700">${esc(name)}</text><text x="24" y="166" fill="#514c42" font-size="18"><tspan x="24">${esc(lines[0])}</tspan><tspan x="24" dy="25">${esc(lines[1])}</tspan><tspan x="24" dy="25">${esc(lines[2])}</tspan></text></g>`;
    })
    .join("\n    ");
  const arrows = steps.slice(0, -1).map((_, i) => `<path d="M${260 + i * 212} 390H${278 + i * 212}"/>`).join("");
  const walls = firewalls
    .map(([a, b], i) => {
      const x = 271 + i * 212;
      return `<text x="${x}" y="550"><tspan x="${x}">${esc(a)}</tspan><tspan x="${x}" dy="21">${esc(b)}</tspan></text>`;
    })
    .join("\n    ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Cadena desde población hasta desigualdad</title>
  <desc id="desc">Siete capas conectadas pero no automáticas: población, exposición, denominador, comparación, efecto, implementación y desigualdad. Cada transición conserva un cortafuego inferencial.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#141816"/><stop offset="1" stop-color="#1f231d"/></linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#f2e5c6"/><stop offset="1" stop-color="#dfcc9f"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000" flood-opacity=".28"/></filter>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0L12 6 0 12Z" fill="#c78344"/></marker>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1450" cy="70" r="240" fill="#2d493d" opacity=".28"/>
  <circle cx="115" cy="850" r="250" fill="#8e562e" opacity=".18"/>
  <text x="92" y="92" fill="#d7a45f" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-020 · CADENA DE INFERENCIA</text>
  <text x="92" y="152" fill="#fff8e8" font-family="Georgia, serif" font-size="46" font-weight="700">Una cifra agregada no convierte una población en un efecto</text>
  <text x="92" y="198" fill="#cfc7b5" font-family="Arial, sans-serif" font-size="24">Contar exige definir el grupo y la base; atribuir exige comparar bien; aplicar exige mirar a quién.</text>
  <path d="M205 390H1395" stroke="#c78344" stroke-width="4" stroke-dasharray="8 10" opacity=".75"/>
  <g filter="url(#shadow)" font-family="Arial, sans-serif">
    ${cards}
  </g>
  <g stroke="#c78344" stroke-width="4" marker-end="url(#arrow)">${arrows}</g>
  <g font-family="Arial, sans-serif" font-size="16" fill="#e6d8b8" text-anchor="middle">
    ${walls}
  </g>
  <rect x="92" y="645" width="1416" height="150" rx="24" fill="#111310" stroke="#517462" stroke-width="2"/>
  <text x="125" y="696" fill="#8eb09d" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="3">CIFRA LEGÍTIMA</text>
  <text x="125" y="744" fill="#fff8e8" font-family="Georgia, serif" font-size="28">La fuerza aumenta cuando grupo, base, asignación, efecto y exclusiones permanecen visibles</text>
  <text x="125" y="778" fill="#cfc7b5" font-family="Arial, sans-serif" font-size="19">y disminuye cuando un promedio, un modelo o una ley sustituyen comparación, medición y distribución.</text>
  <text x="1505" y="850" fill="#8d8779" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Diagrama editorial · sin escala epidemiológica · no recomienda</text>
</svg>
`;
}

function matrix() {
  const rows = [
    ["Londres 1662", "listas parroquiales", "regularidades", "causa sin médico; sin censo"],
    ["Inoculación 1714–1766", "cartas, informes, modelo", "riesgo comparado", "clase; clasificación"],
    ["Vacuna 1796–1902", "tratado, granjas, genomas", "difusión", "material incierto; niños portadores"],
    ["Louis 1835", "series clínicas", "contraste numérico", "sin aleatorización"],
    ["Viena 1847", "tablas por clínica", "asignación alterna", "antes-después; sin agente"],
    ["Londres 1849–1855", "Tabla IX, informes", "experimento natural", "casas, no personas"],
    ["Nightingale 1854–1858", "tablas y diagramas", "argumento de reforma", "retórica ≠ estimación"],
    ["Obligación 1853–1905", "leyes, sentencias, protestas", "implementación", "carga por clase y raza"],
    ["Tabaco 1950–1965", "casos y controles, cohorte", "convergencia causal", "duda organizada; «criterios»"],
    ["Salk 1954–1955", "ensayo con placebo", "efecto aleatorizado", "voluntarios; Cutter"],
    ["Erradicación 1966–1980", "vigilancia, correspondencia", "buscar y contener", "decisión local"],
    ["2006–2026", "registros nacionales", "grandes denominadores", "vacunado sano; política aparte"],
  ];
  const head = ["Expediente", "Archivo", "Producto", "Límite decisivo"];
  const xs = [92, 470, 860, 1170];
  const y0 = 250;
  const rh = 47;
  const body = rows
    .map((r, i) => {
      const y = y0 + i * rh;
      const bg = i % 2 === 0 ? `<rect x="80" y="${y - 31}" width="1440" height="${rh}" rx="8" fill="#1b211d"/>` : "";
      return `${bg}<text y="${y}" font-family="Arial, sans-serif" font-size="19"><tspan x="${xs[0]}" fill="#fff8e8" font-weight="700">${esc(r[0])}</tspan><tspan x="${xs[1]}" fill="#cfc7b5">${esc(r[1])}</tspan><tspan x="${xs[2]}" fill="#8eb09d">${esc(r[2])}</tspan><tspan x="${xs[3]}" fill="#e2a44f">${esc(r[3])}</tspan></text>`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Matriz de doce expedientes de conteo, comparación y límite</title>
  <desc id="desc">Tabla editorial de MED-020: doce expedientes entre 1662 y 2026 con su archivo dominante, el producto mejor resuelto y el límite decisivo. Las filas no forman una escala de progreso ni puntúan instituciones o países.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#141816"/><stop offset="1" stop-color="#1f231d"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="92" y="92" fill="#d7a45f" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">MED-020 · MATRIZ DE EXPEDIENTES</text>
  <text x="92" y="148" fill="#fff8e8" font-family="Georgia, serif" font-size="40" font-weight="700">Qué contó cada archivo y qué no puede heredar</text>
  <text y="205" font-family="Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="2" fill="#8d8779">${head.map((h, i) => `<tspan x="${xs[i]}">${esc(h.toUpperCase())}</tspan>`).join("")}</text>
  <path d="M80 220H1520" stroke="#517462" stroke-width="2"/>
  ${body}
  <text x="1505" y="870" fill="#8d8779" text-anchor="end" font-family="Arial, sans-serif" font-size="16">Síntesis editorial · sin puntuaciones · no recomienda</text>
</svg>
`;
}

fs.mkdirSync(OUT, { recursive: true });
const heroSvg = hero();
fs.writeFileSync(path.join(OUT, `${HERO}.svg`), heroSvg);
fs.writeFileSync(path.join(OUT, CHAIN), chain());
fs.writeFileSync(path.join(OUT, MATRIX), matrix());
console.log(`SVG escritos: ${HERO}.svg, ${CHAIN}, ${MATRIX}`);

if (process.argv.includes("--png")) {
  const { default: sharp } = await import("sharp");
  const target = path.join(OUT, `${HERO}.png`);
  await sharp(Buffer.from(heroSvg), { density: 72 }).resize(1672, 941).png({ compressionLevel: 9 }).toFile(target);
  console.log(`PNG escrito: ${HERO}.png (${fs.statSync(target).size} bytes)`);
}
