import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "americas-medicine-archives.json"), "utf8"));
const expectedKinds = ["archive", "provenance", "signal", "practice", "consequence", "limit"];

test("MED-010 conserva seis casos y seis capas ordenadas", () => {
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

test("MED-010 sólo enlaza registros canónicos", () => {
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

test("Cuzco separa remodelación, indicación y resultado", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "cuzco-trepanation");
  assert.ok(item);
  assert.match(item.layers[3].limit, /no demostrado/i);
  assert.match(item.layers[4].limit, /clínico|funcional|selección/i);
  assert.match(item.layers[5].observed, /83 %|66 individuos/i);
});

test("Maya conserva el control patológico adversario", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "maya-dental-inlays");
  assert.ok(item);
  assert.match(item.layers[4].observed, /193|211/);
  assert.match(item.layers[4].inference, /mayor|control/i);
  assert.match(item.layers[5].limit, /terapia|beneficio|indicación/i);
});

test("microrestos y coprolitos no heredan intención medicinal", () => {
  const huaca = data.cases.find((entry: { id: string }) => entry.id === "huaca-el-paraiso");
  const piaui = data.cases.find((entry: { id: string }) => entry.id === "piaui-coprolites");
  assert.ok(huaca && piaui);
  assert.match(huaca.layers[5].limit, /una persona|intención/i);
  assert.match(piaui.layers[3].limit, /no demostrado|probable/i);
});

test("los códices se leen como objetos coloniales co-producidos", () => {
  const libellus = data.cases.find((entry: { id: string }) => entry.id === "libellus-1552");
  const florentine = data.cases.find((entry: { id: string }) => entry.id === "florentine-codex");
  assert.ok(libellus && florentine);
  assert.match(libellus.layers[1].observed, /latín|Colegio/i);
  assert.match(florentine.layers[3].limit, /ejecución|frecuencia/i);
  assert.match(florentine.layers[5].limit, /precontacto|transparente/i);
});
