import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "documentary-medicine-evidence.json"), "utf8"));
const expectedKinds = ["object", "text", "genre", "circulation", "practice", "consequence"];

test("el módulo documental conserva cinco casos y seis capas ordenadas", () => {
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

test("el módulo documental sólo enlaza registros canónicos", () => {
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

test("la norma de Hammurabi no se presenta como práctica observada", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "hammurabi-legal-passages");
  assert.ok(item);
  const practice = item.layers.find((layer: { kind: string }) => layer.kind === "practice");
  const consequence = item.layers.find((layer: { kind: string }) => layer.kind === "consequence");
  assert.match(practice.limit, /no ofrece denominador|tasa/i);
  assert.match(consequence.limit, /no demostrado/i);
});

test("Edwin Smith separa copia, práctica y resultado", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "edwin-smith-papyrus");
  assert.ok(item);
  assert.match(item.layers[0].limit, /composición/i);
  assert.match(item.layers[4].limit, /no sobreviven/i);
  assert.match(item.layers[5].limit, /eficacia/i);
});
