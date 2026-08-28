import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "circulation-physiology-evidence.json"), "utf8"));
const expectedKinds = ["system", "preparation", "intervention", "measurement", "comparison", "mechanism", "reception"];

test("MED-017 conserva ocho casos y siete capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 8);
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

test("MED-017 sólo enlaza registros canónicos", () => {
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

test("Galeno conserva experimento correcto sin circulación cerrada", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "galen-arteries-second-century");
  assert.ok(item);
  assert.match(item.layers[2].limit, /no traza.*ruta completa/i);
  assert.match(item.layers[5].limit, /no debe rebautizarse/i);
});

test("Ibn al-Nafīs conserva comentario crítico sin influencia inventada", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "ibn-al-nafis-thirteenth-century");
  assert.ok(item);
  assert.match(item.layers[1].limit, /no demostrado.*procedimiento/i);
  assert.match(item.layers[6].limit, /no demostrado.*transmisión/i);
});

test("el pulso chino no se traduce a presión o circulación moderna", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "chinese-pulse-li-shizhen");
  assert.ok(item);
  assert.match(item.layers[3].limit, /no equivale a presión/i);
  assert.match(item.layers[5].limit, /no demuestra.*circulación/i);
});

test("Harvey exige convergencia y conserva capilares invisibles", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "harvey-1616-1628");
  assert.ok(item);
  assert.match(item.layers[2].limit, /no demuestra.*circuito entero/i);
  assert.match(item.layers[5].limit, /no podía ver/i);
  assert.match(item.layers[6].limit, /no equivale a aceptación inmediata/i);
});

test("Malpighi y Hales no heredan humano o clínica", () => {
  const malpighi = data.cases.find((entry: { id: string }) => entry.id === "malpighi-frog-lung-1661");
  const hales = data.cases.find((entry: { id: string }) => entry.id === "hales-mare-1733");
  assert.ok(malpighi && hales);
  assert.match(malpighi.layers[1].limit, /no es un pulmón humano/i);
  assert.match(hales.layers[6].limit, /no midió hipertensión humana/i);
});
