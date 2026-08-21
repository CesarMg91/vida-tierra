import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-dating.json"), "utf8"));
const kinds = ["sample", "measurement", "calendar", "context", "phase", "event"];

test("el módulo conserva casos únicos y seis capas en orden", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 5);
  assert.equal(new Set(data.cases.map((item: { id: string }) => item.id)).size, data.cases.length);
  for (const item of data.cases) {
    assert.deepEqual(item.layers.map((layer: { kind: string }) => layer.kind), kinds);
  }
});

test("cada capa distingue observado, inferencia y límite", () => {
  for (const item of data.cases) {
    for (const layer of item.layers) {
      assert.ok(layer.observed.trim());
      assert.ok(layer.inference.trim());
      assert.ok(layer.limit.trim());
      assert.ok(layer.claimIds.length);
      assert.ok(layer.evidenceIds.length);
      assert.ok(layer.sourceIds.length);
    }
  }
});

test("todas las referencias del módulo existen en los registros canónicos", () => {
  const rows = registryRows();
  const claims = new Set(rows.claims.map((row) => row.id));
  const evidence = new Set(rows.evidence.map((row) => row.id));
  const sources = new Set(rows.sources.map((row) => row.id));

  for (const item of data.cases) {
    for (const layer of item.layers) {
      for (const id of layer.claimIds) assert.ok(claims.has(id), id);
      for (const id of layer.evidenceIds) assert.ok(evidence.has(id), id);
      for (const id of layer.sourceIds) assert.ok(sources.has(id), id);
    }
  }
});
