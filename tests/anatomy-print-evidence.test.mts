import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "anatomy-print-evidence.json"), "utf8"));
const expectedKinds = ["body", "procedure", "image", "text", "comparison", "correction", "circulation"];

test("MED-016 conserva siete casos y siete capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 7);
  for (const item of data.cases) {
    assert.deepEqual(item.layers.map((layer: { kind: string }) => layer.kind), expectedKinds);
    for (const layer of item.layers) {
      assert.ok(layer.observed.trim());
      assert.ok(layer.inference.trim());
      assert.ok(layer.limit.trim());
      assert.ok(layer.claimIds.length && layer.evidenceIds.length && layer.sourceIds.length);
    }
  }
});

test("MED-016 sólo enlaza registros canónicos", () => {
  const rows = registryRows();
  const claims = new Set(rows.claims.map((row) => row.id));
  const evidence = new Set(rows.evidence.map((row) => row.id));
  const sources = new Set(rows.sources.map((row) => row.id));
  const slugs = new Set(buildPublicData().catalog.map((record) => record.slug));
  assert.ok(slugs.has(data.researchSlug));
  for (const item of data.cases) for (const layer of item.layers) {
    for (const id of layer.claimIds) assert.ok(claims.has(id), id);
    for (const id of layer.evidenceIds) assert.ok(evidence.has(id), id);
    for (const id of layer.sourceIds) assert.ok(sources.has(id), id);
  }
});

test("Mansur conserva desconocida la relación con disección humana", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "mansur-shiraz-1390-1488");
  assert.ok(item);
  assert.match(item.layers[0].limit, /no demostrado.*disección humana directa/i);
  assert.match(item.layers[4].limit, /semejanza formal no demuestra/i);
  assert.match(item.layers[6].limit, /no prueba lectura/i);
});

test("Vesalio y Valverde separan cuerpo, taller, corrección y copia", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "vesalius-valverde-1538-1568");
  assert.ok(item);
  assert.match(item.layers[0].inference, /poder institucional/i);
  assert.match(item.layers[2].limit, /no es una huella neutra/i);
  assert.match(item.layers[5].limit, /no decide.*prioridad/i);
});

test("Nueva España distingue autopsia, manual, cátedra y disección", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "new-spain-1576-1646");
  assert.ok(item);
  assert.match(item.layers[1].inference, /operaciones históricas distintas/i);
  assert.match(item.layers[4].limit, /no demostrado/i);
  assert.match(item.layers[6].limit, /no mide tiraje/i);
});

test("Itâkî evita heredar disección desde palabra o figura", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "itaki-ottoman-1632");
  assert.ok(item);
  assert.match(item.layers[0].limit, /figura prueba disección local/i);
  assert.match(item.layers[1].limit, /no debe traducirse automáticamente/i);
  assert.match(item.layers[2].inference, /genealogías múltiples/i);
});

test("Japón conserva prehistoria local, traducción imperfecta y revisión", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "kaitai-shinsho-1771-1826");
  assert.ok(item);
  assert.match(item.layers[4].limit, /no fue el nacimiento absoluto/i);
  assert.match(item.layers[5].inference, /revisión intergeneracional/i);
  assert.match(item.layers[6].limit, /no significa adopción nacional inmediata/i);
});

test("Qing conserva rutas anatómicas distintas de la disección formal", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "qing-forensics-wang-1742-1830");
  assert.ok(item);
  assert.match(item.layers[1].inference, /varias operaciones/i);
  assert.match(item.layers[4].limit, /imitación retrasada/i);
  assert.match(item.layers[5].limit, /no valida automáticamente/i);
});
