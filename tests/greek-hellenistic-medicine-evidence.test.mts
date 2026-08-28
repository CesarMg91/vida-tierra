import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "greek-hellenistic-medicine-evidence.json"), "utf8"));
const expectedKinds = ["witness", "reading", "genre", "operation", "institution", "consequence"];

test("MED-007 conserva cinco casos y seis capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 5);
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
test("MED-007 sólo enlaza registros canónicos", () => {
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

test("el corpus no hereda firma, uniformidad o eficacia", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "hippocratic-corpus");
  assert.ok(item);
  assert.match(item.layers[0].limit, /autógrafo|unidad/i);
  assert.match(item.layers[4].limit, /autor histórico/i);
  assert.match(item.layers[5].limit, /no demostrado/i);
});

test("Epidemias y cirugía no se convierten en cohortes o resultados", () => {
  const epidemics = data.cases.find((entry: { id: string }) => entry.id === "epidemics-cases");
  const surgery = data.cases.find((entry: { id: string }) => entry.id === "surgical-treatises");
  assert.ok(epidemics && surgery);
  assert.match(epidemics.layers[2].limit, /criterios de inclusión|denominadores/i);
  assert.match(surgery.layers[5].limit, /no demostrado/i);
});

test("Epidauro y Alejandría conservan denominador y vivisección abiertos", () => {
  const epidaurus = data.cases.find((entry: { id: string }) => entry.id === "epidaurus-iamata");
  const alexandria = data.cases.find((entry: { id: string }) => entry.id === "alexandrian-anatomy");
  assert.ok(epidaurus && alexandria);
  assert.match(epidaurus.layers[5].limit, /tasa|consecutivas/i);
  assert.match(alexandria.layers[3].observed, /atribución más débil/i);
  assert.match(alexandria.layers[5].limit, /vivisección cierta/i);
});
