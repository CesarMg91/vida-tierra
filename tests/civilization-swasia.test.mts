import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-swasia.json"), "utf8"));

test("el módulo regional conserva cinco paisajes únicos", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.regions.length, 5);
  assert.equal(new Set(data.regions.map((item: { id: string }) => item.id)).size, 5);
});

test("cada paisaje separa archivo, inferencia y límite", () => {
  for (const region of data.regions) {
    assert.ok(region.archive.trim());
    assert.ok(region.inference.trim());
    assert.ok(region.limit.trim());
    assert.ok(region.sites.length);
    assert.ok(region.claimIds.length);
    assert.ok(region.evidenceIds.length);
    assert.ok(region.sourceIds.length);
  }
});

test("las referencias regionales existen en los registros", () => {
  const rows = registryRows();
  const claims = new Set(rows.claims.map((row) => row.id));
  const evidence = new Set(rows.evidence.map((row) => row.id));
  const sources = new Set(rows.sources.map((row) => row.id));
  for (const region of data.regions) {
    for (const id of region.claimIds) assert.ok(claims.has(id), id);
    for (const id of region.evidenceIds) assert.ok(evidence.has(id), id);
    for (const id of region.sourceIds) assert.ok(sources.has(id), id);
  }
});
