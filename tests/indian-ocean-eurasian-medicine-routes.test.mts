import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "indian-ocean-eurasian-medicine-routes.json"), "utf8"));
const expectedKinds = ["trace", "identity", "itinerary", "mediation", "reception", "reach"];

test("MED-013 conserva seis rutas y seis capas ordenadas", () => {
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

test("MED-013 sólo enlaza registros canónicos", () => {
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

test("Belitung separa carga de uso médico", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "belitung-shipwreck");
  assert.ok(item);
  assert.match(item.layers[1].limit, /no fija.*función/i);
  assert.match(item.layers[4].limit, /no demostrado.*resina/i);
  assert.match(item.layers[5].limit, /no hay población tratada/i);
});

test("Dunhuang no hereda a Galeno ni un sistema completo", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "dunhuang-manuscripts");
  assert.ok(item);
  assert.match(item.layers[3].limit, /médico viajero/i);
  assert.match(item.layers[5].limit, /sistema galénico completo/i);
});

test("Geniza conserva géneros sin fabricar una historia clínica", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "cairo-geniza");
  assert.ok(item);
  assert.match(item.layers[0].limit, /no vuelve.*enlazados/i);
  assert.match(item.layers[4].limit, /no demuestra preparación.*administración/i);
  assert.match(item.layers[5].limit, /denominadores.*resultados/i);
});

test("imperio y edición no heredan homogeneidad o adopción", () => {
  const mongol = data.cases.find((entry: { id: string }) => entry.id === "mongol-courts");
  const orta = data.cases.find((entry: { id: string }) => entry.id === "garcia-de-orta-goa");
  assert.ok(mongol && orta);
  assert.match(mongol.layers[4].limit, /no prueba síntesis/i);
  assert.match(mongol.layers[5].limit, /cobertura poblacional/i);
  assert.match(orta.layers[4].limit, /no demuestra comprensión/i);
  assert.match(orta.layers[5].limit, /descubridor solitario/i);
});
