import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "east-asian-medicine-evidence.json"), "utf8"));
const expectedKinds = ["witness", "reading", "stratum", "operation", "institution", "consequence"];

test("MED-006 conserva cinco casos y seis capas ordenadas", () => {
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

test("MED-006 sólo enlaza registros canónicos", () => {
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

test("Mawangdui no se presenta como el sistema canónico completo", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "mawangdui-manuscripts");
  assert.ok(item);
  assert.match(item.layers[2].limit, /sistema canónico|borrador lineal/i);
  assert.match(item.layers[5].limit, /no demostrado/i);
});

test("Tianhui conserva separadas atribución, técnica y efecto", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "tianhui-corpus");
  assert.ok(item);
  assert.match(item.layers[2].limit, /firma|Bian Que/i);
  assert.match(item.layers[3].limit, /no son idénticas|función/i);
  assert.match(item.layers[5].limit, /no demostrado/i);
});

test("Ishinpō y Donguibogam no heredan práctica o cobertura", () => {
  const ishinpo = data.cases.find((entry: { id: string }) => entry.id === "ishinpo-compilation");
  const donguibogam = data.cases.find((entry: { id: string }) => entry.id === "donguibogam-state");
  assert.ok(ishinpo && donguibogam);
  assert.match(ishinpo.layers[5].limit, /práctica nacional|cobertura/i);
  assert.match(donguibogam.layers[4].limit, /acceso|poblacional/i);
});
