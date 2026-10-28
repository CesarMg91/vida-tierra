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

const chainCon003 = {
  steps: [
    ["Planteamiento", "qué se pregunta y en qué sentido de «fundamental»"],
    ["Resultado", "argumento, hallazgo, teoría o modelo"],
    ["Alcance", "qué datos o supuestos lo sostienen"],
    ["Interpretación", "lectura como postura sobre la mente"],
    ["Salto", "tesis sobre qué es lo fundamental"],
    ["Prueba", "predicción que separaría rivales"],
  ],
  firewalls: ["≠ dato", "≠ identidad", "≠ teoría confirmada", "≠ metafísica", "≠ confirmación"],
  title: "Cadena desde una pregunta sobre la mente hasta una tesis sobre lo fundamental",
  kicker: "CON-003 · CADENA DE INFERENCIA",
  headline: "Una correlación no es una metafísica",
  legend: "Verde: lo que se argumenta, mide o modela. Ocre: lo que se interpreta o afirma. Azul: lo que podría decidirlo.",
};

function heroConsciousness() {
  const W = 1672;
  const H = 941;
  const rand = rng(2810);
  const parts = [];
  // Campo de puntos tenues: sin agrupar, ninguno destaca.
  const dots = [];
  for (let i = 0; i < 900; i += 1) dots.push([W * 0.34 + rand() * W * 0.68, rand() * H]);
  // Regiones donde los puntos se agrupan y se iluminan.
  const centers = [[W * 0.58, H * 0.36, 150], [W * 0.8, H * 0.62, 190], [W * 0.66, H * 0.82, 110], [W * 0.92, H * 0.2, 120]];
  for (const [cx, cy, r] of centers) {
    parts.push(`<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r * 1.6)}" fill="url(#halo)"/>`);
  }
  for (const [x, y] of dots) {
    let pull = 0;
    let tx = x;
    let ty = y;
    for (const [cx, cy, r] of centers) {
      const d = Math.hypot(cx - x, cy - y);
      const w = Math.exp(-(d * d) / (2 * r * r));
      if (w > pull) {
        pull = w;
        tx = x + (cx - x) * w * 0.55;
        ty = y + (cy - y) * w * 0.55;
      }
    }
    const color = pull > 0.35 ? "#efe6d2" : pull > 0.12 ? "#e9b65c" : "#5fb3a1";
    parts.push(`<circle cx="${f(tx)}" cy="${f(ty)}" r="${f(1.1 + pull * 3.2 + rand() * 0.8)}" fill="${color}" fill-opacity="${f(0.18 + pull * 0.75)}"/>`);
  }
  // Arcos tenues entre regiones: relaciones sin forma definida.
  for (let i = 0; i < centers.length; i += 1) {
    const [x1, y1] = centers[i];
    const [x2, y2] = centers[(i + 1) % centers.length];
    const mx = (x1 + x2) / 2 + (rand() - 0.5) * 160;
    const my = (y1 + y2) / 2 + (rand() - 0.5) * 160;
    parts.push(`<path d="M${f(x1)} ${f(y1)}Q${f(mx)} ${f(my)} ${f(x2)} ${f(y2)}" fill="none" stroke="#9cb7d8" stroke-opacity=".22" stroke-width="1.2"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Muchos puntos tenues que se agrupan en regiones luminosas</title>
  <desc id="desc">Composición generativa abstracta: un campo de puntos tenues sobre fondo oscuro; en algunas regiones los puntos se acercan, cambian de color y brillan, unidas por arcos tenues. No representa un resultado, una teoría, una mente ni una estructura física real.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset=".55" stop-color="#13262a"/><stop offset="1" stop-color="#0c1517"/></linearGradient>
    <radialGradient id="halo"><stop stop-color="#e9b65c" stop-opacity=".16"/><stop offset="1" stop-color="#e9b65c" stop-opacity="0"/></radialGradient>
    <linearGradient id="fadeL" x1="0" y1="0" x2="1" y2="0"><stop offset=".3" stop-color="#101a1f"/><stop offset=".5" stop-color="#101a1f" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${parts.join("\n  ")}
  <rect width="${W}" height="${H}" fill="url(#fadeL)"/>
</svg>
`;
}

function debtsMatrix() {
  const cols = ["Fisicalismo", "Panpsiquismo", "Idealismo", "Realismo consciente"];
  const rows = [
    ["Dependencia cerebral", ["la produce", "la organiza", "es su apariencia", "es su interfaz"], ["ok", "ok", "ok", "ok"]],
    ["Por qué hay experiencia", ["deuda: problema difícil", "la supone", "la supone", "la supone"], ["debt", "ok", "ok", "ok"]],
    ["Mente unificada", ["la explica el cerebro", "deuda: combinación", "la explica la disociación", "por combinación de agentes"], ["ok", "debt", "ok", "open"]],
    ["Leyes regulares compartidas", ["las supone", "las supone", "deuda: derivarlas", "deuda: derivarlas"], ["ok", "ok", "debt", "debt"]],
    ["Predicción propia", ["no la necesita", "ninguna", "ninguna", "prometida (CON-005)"], ["ok", "none", "none", "open"]],
  ];
  const fills = { ok: "#e8f1ee", debt: "#f3d6c8", open: "#f3e6cf", none: "#e6ecf5" };
  const x0 = 360;
  const cw = 290;
  const y0 = 300;
  const rh = 96;
  const head = cols
    .map((c, j) => `<text x="${x0 + j * cw + cw / 2}" y="${y0 - 22}" text-anchor="middle" fill="#f4f1e8" font-family="Georgia, serif" font-size="24" font-weight="700">${c}</text>`)
    .join("\n  ");
  const body = rows
    .map(([label, cells, kinds], i) => {
      const y = y0 + i * rh;
      const tds = cells
        .map((txt, j) => `<rect x="${x0 + j * cw + 6}" y="${y + 6}" width="${cw - 12}" height="${rh - 12}" rx="12" fill="${fills[kinds[j]]}"/>
  <foreignObject x="${x0 + j * cw + 20}" y="${y + 14}" width="${cw - 40}" height="${rh - 28}"><p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;height:100%;display:flex;align-items:center;justify-content:center;text-align:center;font:${kinds[j] === "debt" ? "700 " : ""}19px/1.25 Arial,sans-serif;color:#22302e">${txt}</p></foreignObject>`)
        .join("\n  ");
      return `<foreignObject x="92" y="${y + 14}" width="250" height="${rh - 28}"><p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;height:100%;display:flex;align-items:center;font:20px/1.25 Arial,sans-serif;color:#c6d0cc">${label}</p></foreignObject>
  ${tds}`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Lo que los datos fijan y la deuda que cada postura deja abierta</title>
  <desc id="desc">Matriz de cinco filas y cuatro columnas: fisicalismo, panpsiquismo, idealismo y realismo consciente frente a la dependencia cerebral, por qué hay experiencia, la mente unificada, las leyes regulares compartidas y la predicción propia. Todas aceptan la dependencia cerebral; cada una deja una deuda distinta marcada en rojo claro.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset="1" stop-color="#16282b"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">CON-003 · DEUDAS DE CADA POSTURA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">Mismos datos, distinta deuda</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="24">Todas aceptan que la experiencia depende del cerebro. Difieren en lo que dejan sin explicar.</text>
  ${head}
  ${body}
  <text x="92" y="830" fill="#9fb0ab" font-family="Arial, sans-serif" font-size="19">Rojo claro: deuda principal. Ocre: abierto o prometido. Azul: sin predicción propia. Síntesis del expediente, no un resultado medido.</text>
</svg>
`;
}


const chainCon004 = {
  steps: [
    ["Registro", "qué hizo Lilly y con qué método"],
    ["Resultado", "medición, informe o relato"],
    ["Alcance", "animales, sujetos y controles"],
    ["Interpretación", "lo que Lilly concluyó"],
    ["Salto", "tesis sobre mente, lenguaje o realidad"],
    ["Prueba", "lo que otros midieron después"],
  ],
  firewalls: ["≠ habla", "≠ todos los casos", "≠ conclusión", "≠ metafísica", "≠ confirmación"],
  title: "Cadena desde el registro de Lilly hasta lo que otros probaron después",
  kicker: "CON-004 · CADENA DE INFERENCIA",
  headline: "Una pregunta audaz no es una respuesta",
  legend: "Verde: lo que se registró o midió. Ocre: lo que Lilly interpretó o afirmó. Azul: lo que otros pusieron a prueba.",
};

function heroLilly() {
  const W = 1672;
  const H = 941;
  const rand = rng(2910);
  const parts = [];
  // Agua quieta: ondas concéntricas que se abren desde un punto de flotación.
  const cx = W * 0.7;
  const cy = H * 0.58;
  for (let i = 1; i <= 26; i += 1) {
    const rx = i * 34 + rand() * 6;
    const ry = rx * 0.32;
    parts.push(`<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${f(rx)}" ry="${f(ry)}" fill="none" stroke="#8fd3c6" stroke-opacity="${f(0.55 - i * 0.019)}" stroke-width="${f(1.6 - i * 0.03)}"/>`);
  }
  // Trazos de sonido: silbidos como curvas moduladas en la parte alta, cada vez más tenues.
  for (let k = 0; k < 7; k += 1) {
    const y0 = H * 0.12 + k * 34;
    const amp = 10 + rand() * 18;
    const freq = 0.012 + rand() * 0.02;
    const phase = rand() * Math.PI * 2;
    const pts = [];
    for (let x = W * 0.42; x <= W * 0.98; x += 6) {
      const env = Math.sin(((x - W * 0.42) / (W * 0.56)) * Math.PI);
      pts.push(`${f(x)},${f(y0 + Math.sin(x * freq + phase) * amp * env)}`);
    }
    parts.push(`<polyline points="${pts.join(" ")}" fill="none" stroke="${k % 2 ? "#e9b65c" : "#9cb7d8"}" stroke-opacity="${f(0.5 - k * 0.05)}" stroke-width="1.4"/>`);
  }
  // Clics: pequeños pulsos verticales a lo largo de una línea.
  for (let i = 0; i < 60; i += 1) {
    const x = W * 0.46 + rand() * W * 0.5;
    const y = H * 0.4 + (rand() - 0.5) * 20;
    const h = 4 + rand() * 18;
    parts.push(`<line x1="${f(x)}" y1="${f(y - h)}" x2="${f(x)}" y2="${f(y + h)}" stroke="#efe6d2" stroke-opacity="${f(0.15 + rand() * 0.35)}" stroke-width="1.2"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Ondas en agua oscura bajo trazos de sonido</title>
  <desc id="desc">Composición generativa abstracta: ondas concéntricas que se abren en agua quieta y oscura; arriba, curvas moduladas y pulsos breves que evocan silbidos y clics. No representa un registro real, un tanque concreto ni un dato.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset=".55" stop-color="#11252a"/><stop offset="1" stop-color="#0b1416"/></linearGradient>
    <radialGradient id="glow" cx=".7" cy=".58" r=".45"><stop stop-color="#2c6d64" stop-opacity=".45"/><stop offset="1" stop-color="#2c6d64" stop-opacity="0"/></radialGradient>
    <linearGradient id="fadeL" x1="0" y1="0" x2="1" y2="0"><stop offset=".3" stop-color="#101a1f"/><stop offset=".52" stop-color="#101a1f" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
  <rect width="${W}" height="${H}" fill="url(#fadeL)"/>
</svg>
`;
}

function lillyLines() {
  const lines = [
    ["Neurofisiología", "forma de onda no lesiva (Science, 1955)", "trabajo técnico publicado", "ok"],
    ["Aislamiento", "tanque de flotación; informe en primera persona (1956)", "flotación reduce estrés a corto plazo; sin cegamiento", "partial"],
    ["Delfines", "sonidos, intercambios, auxilio, imitación (Science, 1961–1965)", "«hablarán con humanos»: no; cognición rica: sí, por otros", "partial"],
    ["St. Thomas", "convivencia de 1965 con el delfín Peter", "cierre por recorte de fondos; fallas éticas y de bienestar", "fail"],
    ["Autoexperimentos", "LSD, ketamina, «entidades», metaprogramación", "disociación medible en ensayos; las entidades no son dato", "fail"],
  ];
  const fills = { ok: "#e8f1ee", partial: "#f3e6cf", fail: "#f3d6c8" };
  const y0 = 262;
  const rh = 104;
  const rows = lines
    .map(([name, did, kept, kind], i) => {
      const y = y0 + i * rh;
      return `<text x="92" y="${y + 58}" fill="#f4f1e8" font-family="Georgia, serif" font-size="25" font-weight="700">${name}</text>
  <rect x="380" y="${y + 8}" width="520" height="${rh - 16}" rx="12" fill="#e6ecf5"/>
  <foreignObject x="400" y="${y + 16}" width="480" height="${rh - 32}"><p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;height:100%;display:flex;align-items:center;font:19px/1.3 Arial,sans-serif;color:#22302e">${did}</p></foreignObject>
  <rect x="920" y="${y + 8}" width="588" height="${rh - 16}" rx="12" fill="${fills[kind]}"/>
  <foreignObject x="940" y="${y + 16}" width="548" height="${rh - 32}"><p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;height:100%;display:flex;align-items:center;font:${kind === "fail" ? "700 " : ""}19px/1.3 Arial,sans-serif;color:#22302e">${kept}</p></foreignObject>`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Las cinco líneas de trabajo de Lilly y qué quedó de cada una</title>
  <desc id="desc">Tabla de cinco filas: neurofisiología, aislamiento, delfines, St. Thomas y autoexperimentos. Para cada una, qué hizo Lilly y qué quedó: trabajo técnico publicado; flotación con efecto a corto plazo sin cegamiento; cognición de delfines confirmada por otros sin habla humana; cierre del laboratorio con fallas éticas; disociación medible sin que las entidades sean dato.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset="1" stop-color="#16282b"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">CON-004 · CINCO LÍNEAS DE TRABAJO</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">Lo que hizo Lilly y lo que quedó</text>
  <text x="400" y="236" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="20" font-weight="700">Qué hizo</text>
  <text x="940" y="236" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="20" font-weight="700">Qué quedó</text>
  ${rows}
  <text x="92" y="850" fill="#9fb0ab" font-family="Arial, sans-serif" font-size="19">Verde: se sostiene. Ocre: se sostiene en parte o lo confirmaron otros con otro alcance. Rojo claro: no se sostiene o falló. Síntesis del expediente.</text>
</svg>
`;
}

const chainCon005 = {
  steps: [
    ["Modelo", "agentes como núcleos de Markov"],
    ["Resultado", "mapa definido y reproducido"],
    ["Alcance", "qué conserva y qué descarta el mapa"],
    ["Interpretación", "partícula como proyección de agentes"],
    ["Salto", "la física sale de la conciencia"],
    ["Prueba", "predicción física nueva y confirmada"],
  ],
  firewalls: ["≠ dinámica", "≠ derivación", "≠ física", "≠ metafísica", "≠ confirmación"],
  title: "Cadena desde un modelo de agentes hasta una tesis sobre la física",
  kicker: "CON-005 · CADENA DE INFERENCIA",
  headline: "Una etiqueta no es una derivación",
  legend: "Verde: lo que se define, calcula o reproduce. Ocre: lo que se conjetura o afirma. Azul: lo que podría decidirlo.",
};

function heroAgents() {
  const W = 1672;
  const H = 941;
  const rand = rng(3010);
  const parts = [];
  // Izquierda-centro: grafo de transiciones (puntos con flechas curvas).
  const nodes = [];
  for (let i = 0; i < 26; i += 1) nodes.push([W * 0.45 + rand() * W * 0.2, H * 0.18 + rand() * H * 0.64]);
  for (let i = 0; i < nodes.length; i += 1) {
    for (let e = 0; e < 2; e += 1) {
      const j = Math.floor(rand() * nodes.length);
      if (j === i) continue;
      const [x1, y1] = nodes[i];
      const [x2, y2] = nodes[j];
      const mx = (x1 + x2) / 2 + (y2 - y1) * 0.25;
      const my = (y1 + y2) / 2 - (x2 - x1) * 0.25;
      parts.push(`<path d="M${f(x1)} ${f(y1)}Q${f(mx)} ${f(my)} ${f(x2)} ${f(y2)}" fill="none" stroke="#9cb7d8" stroke-opacity=".32" stroke-width="1.2" marker-end="url(#arr)"/>`);
    }
  }
  for (const [x, y] of nodes) parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="5" fill="#e9b65c" fill-opacity=".85"/>`);
  // Derecha: círculo con puntos numerados unidos por cuerdas, como un diagrama de permutación.
  const cx = W * 0.83;
  const cy = H * 0.5;
  const R = 230;
  const k = 12;
  const pts = Array.from({ length: k }, (_, i) => [cx + R * Math.cos((i / k) * 2 * Math.PI - Math.PI / 2), cy + R * Math.sin((i / k) * 2 * Math.PI - Math.PI / 2)]);
  parts.push(`<circle cx="${f(cx)}" cy="${f(cy)}" r="${R}" fill="none" stroke="#8fd3c6" stroke-opacity=".5" stroke-width="1.6"/>`);
  for (let i = 0; i < k; i += 1) {
    const j = (i + 3 + Math.floor(rand() * 4)) % k;
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[j];
    parts.push(`<path d="M${f(x1)} ${f(y1)}Q${f(cx)} ${f(cy)} ${f(x2)} ${f(y2)}" fill="none" stroke="#8fd3c6" stroke-opacity=".55" stroke-width="1.4"/>`);
  }
  for (const [x, y] of pts) parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="6" fill="#efe6d2" fill-opacity=".9"/>`);
  // Haz de proyección tenue entre ambos.
  for (let i = 0; i < 9; i += 1) {
    const [x1, y1] = nodes[Math.floor(rand() * nodes.length)];
    const [x2, y2] = pts[Math.floor(rand() * k)];
    parts.push(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="#e9b65c" stroke-opacity=".12" stroke-width="1" stroke-dasharray="4 6"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Un grafo de flechas que se proyecta sobre un círculo de puntos unidos por cuerdas</title>
  <desc id="desc">Composición generativa abstracta: a la izquierda, puntos unidos por flechas curvas; a la derecha, un círculo con doce puntos unidos por cuerdas; entre ambos, líneas punteadas tenues. No representa una cadena de Markov concreta, un diagrama físico ni un dato.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset=".55" stop-color="#13262a"/><stop offset="1" stop-color="#0c1517"/></linearGradient>
    <radialGradient id="glow" cx=".8" cy=".5" r=".4"><stop stop-color="#2c6d64" stop-opacity=".4"/><stop offset="1" stop-color="#2c6d64" stop-opacity="0"/></radialGradient>
    <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#9cb7d8" fill-opacity=".6"/></marker>
    <linearGradient id="fadeL" x1="0" y1="0" x2="1" y2="0"><stop offset=".3" stop-color="#101a1f"/><stop offset=".48" stop-color="#101a1f" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${parts.join("\n  ")}
  <rect width="${W}" height="${H}" fill="url(#fadeL)"/>
</svg>
`;
}

function markovPermutationsFigure() {
  // Conteos calculados con scripts/markov-decorated-permutations.mjs para tres estados.
  const rows = [
    ["[3,4,5]", 144, "una sola clase con los tres estados"],
    ["[4,2,3]", 32, ""], ["[1,5,3]", 32, ""], ["[1,2,6]", 32, "un estado absorbente, dos transitorios"],
    ["[2,4,3]", 24, ""], ["[1,3,5]", 24, ""], ["[3,2,4]", 24, "una clase de dos y un transitorio"],
    ["[4,2,6]", 6, ""], ["[4,5,3]", 6, ""], ["[1,5,6]", 6, "dos absorbentes y un transitorio"],
    ["[4,3,5]", 4, ""], ["[2,4,6]", 4, ""], ["[3,5,4]", 4, "una clase de dos y un absorbente"],
    ["[4,5,6]", 1, "tres absorbentes (identidad)"],
  ];
  const x0 = 250;
  const maxW = 540;
  const y0 = 250;
  const rh = 36;
  const bars = rows
    .map(([label, count, note], i) => {
      const y = y0 + i * rh;
      const w = Math.max(3, (count / 144) * maxW);
      return `<text x="${x0 - 18}" y="${y + 21}" text-anchor="end" fill="#f4f1e8" font-family="Courier New, monospace" font-size="19">${label}</text>
  <rect x="${x0}" y="${y + 5}" width="${f(w)}" height="22" rx="4" fill="#8fd3c6" fill-opacity=".8"/>
  <text x="${f(x0 + w + 12)}" y="${y + 22}" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="17">${count}${note ? ` · ${note}` : ""}</text>`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">De 343 patrones de transición a 14 etiquetas: lo que conserva y lo que descarta el mapa</title>
  <desc id="desc">Barras horizontales para las 14 permutaciones decoradas que produce el mapa de 2023 con tres estados, con el número de patrones de transición, de un total de 343, que cae en cada una: 144 en la clase de tres estados y entre 1 y 32 en las demás. Panel lateral: el texto del artículo dice 17 permutaciones; su tabla y la reproducción dan 14; el máximo posible es 16.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101a1f"/><stop offset="1" stop-color="#16282b"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="92" y="92" fill="#8fd3c6" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="4">CON-005 · REPRODUCCIÓN DEL MAPA</text>
  <text x="92" y="152" fill="#f4f1e8" font-family="Georgia, serif" font-size="44" font-weight="700">343 patrones de transición, 14 etiquetas</text>
  <text x="92" y="198" fill="#c6d0cc" font-family="Arial, sans-serif" font-size="23">Con tres estados, el mapa ignora las probabilidades y agrupa todas las dinámicas posibles en 14 permutaciones decoradas.</text>
  ${bars}
  <rect x="1210" y="420" width="300" height="230" rx="16" fill="#f3e6cf"/>
  <foreignObject x="1232" y="440" width="256" height="196"><p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;font:19px/1.4 Arial,sans-serif;color:#22302e"><b>Errata del artículo</b><br/>El texto dice 17 permutaciones distintas para los 27 vértices. Su propia tabla y esta reproducción dan 14. Con tres elementos sólo existen 16.</p></foreignObject>
  <text x="92" y="850" fill="#9fb0ab" font-family="Arial, sans-serif" font-size="18">Cálculo reproducible: scripts/markov-decorated-permutations.mjs. Escala lineal; la barra más larga es 144.</text>
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
const heroConsciousnessSvg = heroConsciousness();
fs.writeFileSync(path.join(OUT, "hero-con-003-conciencia-fundamental.svg"), heroConsciousnessSvg);
fs.writeFileSync(path.join(OUT, "cadena-modelo-prueba-con-003.svg"), chain(chainCon003));
fs.writeFileSync(path.join(OUT, "deudas-posturas-con-003.svg"), debtsMatrix());
const heroLillySvg = heroLilly();
fs.writeFileSync(path.join(OUT, "hero-con-004-john-lilly.svg"), heroLillySvg);
fs.writeFileSync(path.join(OUT, "cadena-modelo-prueba-con-004.svg"), chain(chainCon004));
fs.writeFileSync(path.join(OUT, "lineas-lilly-con-004.svg"), lillyLines());
const heroAgentsSvg = heroAgents();
fs.writeFileSync(path.join(OUT, "hero-con-005-agentes-particulas.svg"), heroAgentsSvg);
fs.writeFileSync(path.join(OUT, "cadena-modelo-prueba-con-005.svg"), chain(chainCon005));
fs.writeFileSync(path.join(OUT, "mapa-markov-permutaciones-con-005.svg"), markovPermutationsFigure());

// --png rasteriza todas las portadas; --png=con-002 sólo las indicadas, para no reescribir PNG ya auditados.
const pngArg = process.argv.find((arg) => arg.startsWith("--png"));
if (pngArg) {
  const only = pngArg.includes("=") ? pngArg.split("=")[1] : null;
  const heroes = [
    ["con-001", heroSvg, "hero-con-001-percepcion-interfaz.png"],
    ["con-002", heroSpacetimeSvg, "hero-con-002-espacio-tiempo.png"],
    ["con-003", heroConsciousnessSvg, "hero-con-003-conciencia-fundamental.png"],
    ["con-004", heroLillySvg, "hero-con-004-john-lilly.png"],
    ["con-005", heroAgentsSvg, "hero-con-005-agentes-particulas.png"],
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
