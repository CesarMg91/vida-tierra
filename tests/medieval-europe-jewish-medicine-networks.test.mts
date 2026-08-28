import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "medieval-europe-jewish-medicine-networks.json"), "utf8"));
const expectedKinds = ["witness", "version", "curriculum", "practitioner", "encounter", "reach"];

test("MED-012 conserva seis archivos y seis capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 6);
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

test("MED-012 sólo enlaza registros canónicos", () => {
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

test("códices separan practicabilidad de administración y resultado", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "codices-households");
  assert.ok(item);
  assert.match(item.layers[4].inference, /pudo prepararse/i);
  assert.match(item.layers[4].limit, /no demuestra preparación|administración/i);
  assert.match(item.layers[5].limit, /no significa.*inútil/i);
});

test("Trotula no hereda autora única ni voz directa", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "trotula-women");
  assert.ok(item);
  assert.match(item.layers[1].limit, /no prueba una autora única/i);
  assert.match(item.layers[3].limit, /no hereda autoría|no forman un censo/i);
  assert.match(item.layers[4].limit, /no es testimonio directo/i);
});

test("universidad y licencia no heredan monopolio o competencia", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "university-licensing");
  assert.ok(item);
  assert.match(item.layers[2].limit, /no prueba monopolio/i);
  assert.match(item.layers[4].limit, /no hereda competencia/i);
  assert.match(item.layers[5].limit, /no existe licencia europea universal/i);
});

test("identidad judía no se convierte en método médico", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "jewish-practitioners");
  assert.ok(item);
  assert.match(item.layers[1].limit, /hebreo no identifica/i);
  assert.match(item.layers[4].limit, /prohibición no prueba cumplimiento|contrato no prueba tolerancia/i);
  assert.match(item.layers[5].limit, /no implica igualdad de acceso|eficacia/i);
});
