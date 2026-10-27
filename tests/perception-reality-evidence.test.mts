import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "perception-reality-evidence.json"), "utf8"));
const expectedKinds = ["system", "result", "scope", "interpretation", "leap", "test"];

test("CON-001 conserva siete casos y seis capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 7);
  for (const item of data.cases) {
    assert.ok(item.title.trim() && item.product.trim() && item.stance.trim());
    assert.deepEqual(item.layers.map((layer: { kind: string }) => layer.kind), expectedKinds);
    for (const layer of item.layers) {
      assert.ok(layer.observed.trim());
      assert.ok(layer.inference.trim());
      assert.ok(layer.limit.trim());
      assert.ok(layer.claimIds.length && layer.evidenceIds.length && layer.sourceIds.length);
    }
  }
});

test("CON-001 sólo enlaza registros canónicos", () => {
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

test("FBT conserva que la ventaja débil es definicional y que no compara canales", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "teorema-fbt-2021");
  assert.ok(item);
  assert.match(item.layers[1].limit, /definición de la regla ganadora/i);
  assert.match(item.layers[2].limit, /no es una frecuencia observada/i);
  assert.match(item.layers[3].limit, /no compara canales sensoriales/i);
  assert.match(item.layers[4].limit, /no se sigue/i);
});

test("el escarabajo conserva el límite de falla local", () => {
  const item = data.cases.find((entry: { id: string }) => entry.id === "escarabajo-botella-1983");
  assert.ok(item);
  assert.match(item.layers[3].limit, /acierta con las hembras/i);
  assert.match(item.layers[4].limit, /no demuestra una desconexión global/i);
});

test("ningún caso promueve una tesis metafísica a resultado", () => {
  for (const item of data.cases) {
    const leap = item.layers[4];
    assert.doesNotMatch(leap.inference, /demuestra que (la realidad|el espacio-tiempo|los objetos)/i, item.id);
  }
});

test("la serie CON está declarada y conserva a CON-001 como auditado", () => {
  const editorial = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "catalog-editorial.json"), "utf8"));
  assert.equal(editorial.thematicSeries.CON.route, "/conciencia");
  assert.equal(editorial.records["CON-001"].status, "AUDITADO");
  const record = buildPublicData().catalog.find((entry) => entry.key === "CON-001");
  assert.ok(record);
  assert.equal(record.status, "AUDITADO");
});
