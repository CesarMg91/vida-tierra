import assert from "node:assert/strict";
import test from "node:test";
import {
  buildPublicData,
  extractIds,
  registryRows,
  tableRowsFromMarkdown,
} from "../scripts/public-data-core.mjs";
import { renderMarkdownForTest } from "../lib/content.ts";

test("el catálogo conserva 52 órdenes globales y CIV-001 fuera de la secuencia", () => {
  const { catalog } = buildPublicData();
  assert.equal(catalog.length, 53);
  assert.deepEqual(
    catalog.filter((record) => record.order !== null).map((record) => record.order),
    Array.from({ length: 52 }, (_, index) => index + 1),
  );
  const thematic = catalog.find((record) => record.key === "CIV-001");
  assert.equal(thematic?.order, null);
  assert.equal(thematic?.status, "TRAZADO");
});

test("las tablas GFM se leen como AST y preservan barras escapadas dentro de celdas", () => {
  const tables = tableRowsFromMarkdown(`
| ID | Medición |
|---|---|
| \`EVID-TEST-001\` | señal A \\| control B |
`);
  assert.equal(tables.length, 1);
  assert.equal(tables[0].rows[0].ID, "EVID-TEST-001");
  assert.equal(tables[0].rows[0]["Medición"], "señal A | control B");
});

test("los comodines editoriales no se convierten en IDs inexistentes", () => {
  assert.deepEqual(extractIds("conjunto `SRC-*-049` y `SRC-REAL-001`", "SRC"), ["SRC-REAL-001"]);
});

test("todos los registros maestros quedan materializados", () => {
  const rows = registryRows();
  assert.equal(rows.claims.length, 894);
  assert.equal(rows.evidence.length, 752);
  assert.equal(rows.sources.length, 1151);
  assert.equal(rows.controversies.length, 410);
  assert.equal(rows.errors.length, 458);
  assert.equal(rows.timeline.length, 344);
});

test("cada claim llega a evidencia y fuentes publicables", () => {
  const { knowledge } = buildPublicData();
  assert.equal(
    knowledge.claims.filter((claim) => claim.evidenceIds.length === 0 || claim.sourceIds.length === 0).length,
    0,
  );
  assert.equal(knowledge.evidence.filter((evidence) => evidence.sourceIds.length === 0).length, 0);
});

test("el HTML crudo se sanea con lista permitida", async () => {
  const html = await renderMarkdownForTest(`
<script>alert("x")</script>
<details open onclick="alert('x')"><summary>Contexto</summary><mark>dato</mark></details>
<a href="javascript:alert('x')">enlace</a>
`);
  assert.doesNotMatch(html, /<script|onclick=|javascript:/i);
  assert.match(html, /<details open>/);
  assert.match(html, /<summary>Contexto<\/summary>/);
  assert.match(html, /<mark>dato<\/mark>/);
});
