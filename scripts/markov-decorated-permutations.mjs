// Reproduce la definición 2 de Hoffman, Prakash y Prentner (2023, «Fusions of Consciousness»):
// a cada núcleo de Markov sobre n estados le asigna una permutación decorada.
// La asignación sólo usa qué transiciones son posibles (el grafo), no sus probabilidades.
// Uso: node scripts/markov-decorated-permutations.mjs [n]

/** Matriz de alcanzabilidad en uno o más pasos (cierre transitivo). */
function reachability(adjacency) {
  const n = adjacency.length;
  const reach = adjacency.map((row) => row.slice());
  for (let k = 0; k < n; k += 1) {
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) if (reach[i][k] && reach[k][j]) reach[i][j] = true;
    }
  }
  return reach;
}

/**
 * Permutación decorada de un grafo de transiciones (matriz booleana n × n).
 * Estado transitorio a: σ(a) = a. Absorbente: σ(a) = a + n. Recurrente en una clase mayor:
 * el primer b en a+1…a+n tal que a…b (módulo n) contiene toda su clase comunicante.
 */
export function decoratedPermutation(adjacency) {
  const n = adjacency.length;
  const reach = reachability(adjacency);
  const sigma = [];
  for (let a = 0; a < n; a += 1) {
    let recurrent = reach[a][a];
    for (let b = 0; b < n; b += 1) if (reach[a][b] && !reach[b][a]) recurrent = false;
    const label = a + 1;
    if (!recurrent) {
      sigma.push(label);
      continue;
    }
    const cls = [a];
    for (let b = 0; b < n; b += 1) if (b !== a && reach[a][b] && reach[b][a]) cls.push(b);
    if (cls.length === 1) {
      sigma.push(label + n);
      continue;
    }
    for (let b = label + 1; b <= label + n; b += 1) {
      const covered = new Set();
      for (let x = label; x <= b; x += 1) covered.add((x - 1) % n);
      if (cls.every((c) => covered.has(c))) {
        sigma.push(b);
        break;
      }
    }
  }
  return `[${sigma.join(",")}]`;
}

/** Los n^n núcleos deterministas (vértices del politopo de Markov), en el orden del apéndice B. */
export function deterministicKernels(n) {
  const kernels = [];
  for (let x = 0; x < n ** n; x += 1) {
    const targets = [];
    let rest = x;
    for (let i = n - 1; i >= 0; i -= 1) {
      targets[i] = rest % n;
      rest = Math.floor(rest / n);
    }
    kernels.push(targets.map((t) => Array.from({ length: n }, (_, k) => k === t)));
  }
  return kernels;
}

/** Todos los patrones de soporte posibles: cada fila con al menos una transición positiva. */
export function allSupportPatterns(n) {
  const rows = 2 ** n - 1;
  const patterns = [];
  for (let x = 0; x < rows ** n; x += 1) {
    const masks = [];
    let rest = x;
    for (let i = n - 1; i >= 0; i -= 1) {
      masks[i] = (rest % rows) + 1;
      rest = Math.floor(rest / rows);
    }
    patterns.push(masks.map((m) => Array.from({ length: n }, (_, k) => Boolean(m & (1 << k)))));
  }
  return patterns;
}

/** Número total de permutaciones decoradas de [n]: suma sobre permutaciones de 2^(puntos fijos). */
export function totalDecoratedPermutations(n) {
  // Desarreglos con k puntos fijos: C(n,k)·D(n−k); cada punto fijo admite dos decoraciones.
  const factorial = (m) => (m <= 1 ? 1 : m * factorial(m - 1));
  const derangements = (m) => (m === 0 ? 1 : m === 1 ? 0 : (m - 1) * (derangements(m - 1) + derangements(m - 2)));
  let total = 0;
  for (let k = 0; k <= n; k += 1) total += (factorial(n) / (factorial(k) * factorial(n - k))) * derangements(n - k) * 2 ** k;
  return total;
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, "/").replace(/^(?=[A-Za-z]:)/, "/")}`) {
  const n = Number(process.argv[2] ?? 3);
  const vertices = deterministicKernels(n).map(decoratedPermutation);
  const cells = new Set(allSupportPatterns(n).map(decoratedPermutation));
  console.log(`n = ${n}`);
  console.log(`vértices del politopo de Markov: ${vertices.length}; permutaciones distintas entre ellos: ${new Set(vertices).size}`);
  console.log(`permutaciones distintas entre todos los patrones de soporte: ${cells.size}`);
  console.log(`permutaciones decoradas posibles de [${n}]: ${totalDecoratedPermutations(n)}`);
}
