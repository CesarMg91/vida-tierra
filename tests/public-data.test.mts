import assert from "node:assert/strict";
import test from "node:test";
import {
  buildPublicData,
  compareResearchRecords,
  extractIds,
  researchKeyFromFile,
  registryRows,
  tableRowsFromMarkdown,
} from "../scripts/public-data-core.mjs";
import { renderMarkdownForTest } from "../lib/content.ts";

test("el catálogo conserva 52 órdenes globales y la línea CIV fuera de la secuencia", () => {
  const { catalog } = buildPublicData();
  assert.equal(catalog.length, 55);
  assert.deepEqual(
    catalog.filter((record) => record.order !== null).map((record) => record.order),
    Array.from({ length: 52 }, (_, index) => index + 1),
  );
  const thematic = catalog.find((record) => record.key === "CIV-001");
  assert.equal(thematic?.order, null);
  assert.equal(thematic?.status, "TRAZADO");
  assert.deepEqual(
    catalog.filter((record) => record.order === null).map((record) => [record.key, record.status]),
    [["CIV-001", "TRAZADO"], ["CIV-002", "AUDITADO"], ["CIV-003", "AUDITADO"]],
  );
});

test("las investigaciones temáticas CIV se reconocen y ordenan sin casos especiales", () => {
  assert.equal(researchKeyFromFile("14_civilizaciones/INVESTIGACION_CIV_001_ORIGENES.md"), "CIV-001");
  assert.equal(researchKeyFromFile("14_civilizaciones/INVESTIGACION_CIV_002_FECHADO.md"), "CIV-002");
  assert.equal(researchKeyFromFile("14_civilizaciones/INVESTIGACION_CIV_999_PRUEBA.md"), "CIV-999");
  assert.equal(researchKeyFromFile("14_civilizaciones/INVESTIGACION_CIV_02_INVALIDA.md"), null);

  const records = [
    { key: "CIV-010", order: null },
    { key: "002", order: 2 },
    { key: "CIV-002", order: null },
    { key: "001", order: 1 },
  ].sort(compareResearchRecords);
  assert.deepEqual(records.map((record) => record.key), ["001", "002", "CIV-002", "CIV-010"]);
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
  assert.equal(rows.claims.length, 925);
  assert.equal(rows.evidence.length, 778);
  assert.equal(rows.sources.length, 1180);
  assert.equal(rows.controversies.length, 428);
  assert.equal(rows.errors.length, 478);
  assert.equal(rows.timeline.length, 366);
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
