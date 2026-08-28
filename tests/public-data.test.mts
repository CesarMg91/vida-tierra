import assert from "node:assert/strict";
import test from "node:test";
import {
  buildPublicData,
  compareResearchRecords,
  extractIds,
  researchKeyFromFile,
  registryRows,
  tableRowsFromMarkdown,
  thematicResearchKey,
} from "../scripts/public-data-core.mjs";
import { renderMarkdownForTest } from "../lib/content.ts";

test("el catálogo conserva 52 órdenes globales y las series temáticas fuera de la secuencia", () => {
  const { catalog } = buildPublicData();
  assert.equal(catalog.length, 62);
  assert.deepEqual(
    catalog.filter((record) => record.order !== null).map((record) => record.order),
    Array.from({ length: 52 }, (_, index) => index + 1),
  );
  const thematic = catalog.find((record) => record.key === "CIV-001");
  assert.equal(thematic?.order, null);
  assert.equal(thematic?.status, "TRAZADO");
  assert.deepEqual(
    catalog.filter((record) => record.order === null).map((record) => [record.key, record.status]),
    [["CIV-001", "TRAZADO"], ["CIV-002", "AUDITADO"], ["CIV-003", "AUDITADO"], ["MED-001", "AUDITADO"], ["MED-002", "AUDITADO"], ["MED-003", "AUDITADO"], ["MED-004", "AUDITADO"], ["MED-005", "AUDITADO"], ["MED-006", "AUDITADO"], ["MED-007", "AUDITADO"]],
  );
});

test("las investigaciones temáticas se reconocen y ordenan por serie sin casos especiales", () => {
  assert.equal(researchKeyFromFile("14_civilizaciones/INVESTIGACION_CIV_001_ORIGENES.md"), "CIV-001");
  assert.equal(researchKeyFromFile("14_civilizaciones/INVESTIGACION_CIV_002_FECHADO.md"), "CIV-002");
  assert.equal(researchKeyFromFile("15_medicina/INVESTIGACION_MED_001_TRATAMIENTOS.md"), "MED-001");
  assert.equal(researchKeyFromFile("15_medicina/INVESTIGACION_MED_002_DIAGNOSTICO.md"), "MED-002");
  assert.equal(researchKeyFromFile("16_fisica/INVESTIGACION_FIS_999_PRUEBA.md"), "FIS-999");
  assert.equal(researchKeyFromFile("14_civilizaciones/INVESTIGACION_CIV_02_INVALIDA.md"), null);
  assert.equal(researchKeyFromFile("15_medicina/INVESTIGACION_med_001_INVALIDA.md"), null);
  assert.deepEqual(thematicResearchKey("MED-012"), { series: "MED", order: 12 });
  assert.equal(thematicResearchKey("MED-12"), null);

  const records = [
    { key: "MED-001", order: null },
    { key: "CIV-010", order: null },
    { key: "002", order: 2 },
    { key: "CIV-002", order: null },
    { key: "001", order: 1 },
  ].sort(compareResearchRecords);
  assert.deepEqual(records.map((record) => record.key), ["001", "002", "CIV-002", "CIV-010", "MED-001"]);
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
  assert.equal(rows.claims.length, 1058);
  assert.equal(rows.evidence.length, 886);
  assert.equal(rows.sources.length, 1316);
  assert.equal(rows.controversies.length, 482);
  assert.equal(rows.errors.length, 560);
  assert.equal(rows.timeline.length, 497);
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
