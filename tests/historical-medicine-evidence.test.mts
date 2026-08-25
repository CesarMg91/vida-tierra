import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "historical-medicine-evidence.json"), "utf8"));
const kinds = ["specimen", "context", "trace", "interpretation", "behavior", "system"];

test("MED-003 conserva cuatro casos y seis capas históricas en orden", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 4);
  assert.equal(new Set(data.cases.map((item: { id: string }) => item.id)).size, 4);
  for (const item of data.cases) assert.deepEqual(item.layers.map((layer: { kind: string }) => layer.kind), kinds);
});

test("cada capa histórica distingue archivo, inferencia y límite", () => {
  for (const item of data.cases) for (const layer of item.layers) {
    assert.ok(layer.observed.trim());
    assert.ok(layer.inference.trim());
    assert.ok(layer.limit.trim());
    assert.ok(layer.claimIds.length && layer.evidenceIds.length && layer.sourceIds.length);
  }
});

test("el módulo histórico sólo enlaza registros canónicos", () => {
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

test("el caso de Liang Tebo conserva la controversia y no la presenta como cierre", () => {
  const liangTebo = data.cases.find((item: { id: string }) => item.id === "liang-tebo-tb1");
  assert.ok(liangTebo);
  const interpretation = liangTebo.layers.find((layer: { kind: string }) => layer.kind === "interpretation");
  assert.match(interpretation.inference, /compite/i);
  assert.match(interpretation.limit, /no existe todavía|desacuerdo/i);
  assert.deepEqual(
    interpretation.sourceIds,
    ["SRC-MED-HIST-MALONEY-2022", "SRC-MED-HIST-MURPHY-2023", "SRC-MED-HIST-VLOK-2023"],
  );
});
