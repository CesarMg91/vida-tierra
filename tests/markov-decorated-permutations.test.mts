import assert from "node:assert/strict";
import test from "node:test";
import {
  allSupportPatterns,
  decoratedPermutation,
  deterministicKernels,
  totalDecoratedPermutations,
} from "../scripts/markov-decorated-permutations.mjs";

// Apéndice B de Hoffman, Prakash y Prentner (2023), en su mismo orden de vértices.
const appendixB = [
  "[4,2,3]", "[4,2,3]", "[4,2,6]", "[4,5,3]", "[4,5,3]", "[4,5,6]", "[4,2,3]", "[4,3,5]", "[4,2,6]",
  "[2,4,3]", "[2,4,3]", "[2,4,6]", "[1,5,3]", "[1,5,3]", "[1,5,6]", "[3,4,5]", "[1,3,5]", "[1,2,6]",
  "[3,2,4]", "[3,4,5]", "[1,2,6]", "[3,5,4]", "[1,5,3]", "[1,5,6]", "[3,2,4]", "[1,3,5]", "[1,2,6]",
];

test("la implementación reproduce las 27 filas del apéndice B", () => {
  assert.deepEqual(deterministicKernels(3).map(decoratedPermutation), appendixB);
});

test("con dos estados hay cuatro celdas, como dice el artículo", () => {
  assert.equal(new Set(allSupportPatterns(2).map(decoratedPermutation)).size, 4);
});

test("con tres estados hay 14 permutaciones distintas, no 17", () => {
  assert.equal(new Set(appendixB).size, 14);
  assert.equal(new Set(allSupportPatterns(3).map(decoratedPermutation)).size, 14);
  assert.equal(totalDecoratedPermutations(3), 16);
});

test("dinámicas muy distintas reciben la misma etiqueta", () => {
  // El intercambio determinista (NOT) y cualquier mezcla interior de dos estados caen en la misma celda,
  // como describe el propio artículo: la asignación ignora las probabilidades.
  const swap = [[false, true], [true, false]];
  const interior = [[true, true], [true, true]];
  assert.equal(decoratedPermutation(swap), "[2,3]");
  assert.equal(decoratedPermutation(interior), "[2,3]");
  // Los 343 patrones de soporte de un núcleo 3 × 3 caen en sólo 14 etiquetas.
  assert.equal(allSupportPatterns(3).length, 343);
});
