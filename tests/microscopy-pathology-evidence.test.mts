import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "microscopy-pathology-evidence.json"), "utf8"));
const expectedKinds = ["episode", "specimen", "preparation", "visualization", "lesion", "correlation", "disease"];

test("MED-018 conserva ocho casos y siete capas ordenadas", () => {
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

test("MED-018 sólo enlaza registros canónicos", () => {
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

test("Song Ci conserva inspección sin autopsia microscópica ni padre universal", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "song-ci-1247");
  assert.ok(item);
  assert.match(item.layers[1].limit, /no es.*tejidos.*autopsias internas/i);
  assert.match(item.layers[6].limit, /fundador único/i);
});

test("la microscopía temprana no hereda patología celular", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "early-microscopy-seventeenth-century");
  assert.ok(item);
  assert.match(item.layers[4].limit, /no equivale a célula viva moderna ni lesión/i);
  assert.match(item.layers[5].limit, /no había series clínicas/i);
});

test("Morgagni y Viena conservan la selección post mortem", () => {
  const morgagni = data.cases.find((entry: { id: string }) => entry.id === "morgagni-1761");
  const vienna = data.cases.find((entry: { id: string }) => entry.id === "rokitansky-vienna-1841-1846");
  assert.ok(morgagni && vienna);
  assert.match(morgagni.layers[5].limit, /denominadores.*supervivientes/i);
  assert.match(vienna.layers[0].limit, /seleccionan una población/i);
});

test("Bichat no hereda microscopio y la célula no hereda héroe único", () => {
  const bichat = data.cases.find((entry: { id: string }) => entry.id === "bichat-tissue-1801");
  const cellular = data.cases.find((entry: { id: string }) => entry.id === "cellular-pathology-1838-1860");
  assert.ok(bichat && cellular);
  assert.match(bichat.layers[3].observed, /a ojo desnudo/i);
  assert.match(cellular.layers[6].limit, /no fue obra solitaria/i);
});

test("histotecnología y citología conservan artefacto, muestreo y verificación", () => {
  const technique = data.cases.find((entry: { id: string }) => entry.id === "histotechnology-nineteenth-century");
  const cytology = data.cases.find((entry: { id: string }) => entry.id === "cervical-cytology-1927-1943");
  assert.ok(technique && cytology);
  assert.match(technique.layers[2].limit, /pliegues.*precipitados/i);
  assert.match(cytology.layers[6].limit, /no demuestra por sí solo diagnóstico definitivo/i);
});
