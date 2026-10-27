import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "spacetime-fundamental-evidence.json"), "utf8"));
const expectedKinds = ["system", "result", "scope", "interpretation", "leap", "test"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

test("CON-002 conserva ocho casos y seis capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 8);
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

test("CON-002 sólo enlaza registros canónicos", () => {
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

test("el amplituedro conserva teoría, entradas y predicciones como límites", () => {
  const item = byId("amplituedro-2014");
  assert.ok(item);
  assert.match(item.layers[0].limit, /N = 4 SYM planar no describe partículas reales/i);
  assert.match(item.layers[2].limit, /datos de entrada siguen siendo espacio-temporales/i);
  assert.match(item.layers[3].limit, /mismas predicciones/i);
  assert.match(item.layers[4].limit, /no se sigue/i);
});

test("AdS/CFT conserva que es conjetura y que no describe nuestro universo", () => {
  const item = byId("adscft-1998");
  assert.ok(item);
  assert.match(item.layers[1].limit, /conjetura/i);
  assert.match(item.layers[2].observed, /constante cosmológica positiva/i);
  assert.match(item.layers[2].limit, /no describe nuestro universo/i);
});

test("Bell queda como control: no decide si el espacio-tiempo es fundamental", () => {
  const item = byId("bell-realismo-local");
  assert.ok(item);
  assert.match(item.layers[4].limit, /no se sigue/i);
  assert.match(item.layers[4].limit, /realismo local/i);
});

test("el paso a la conciencia queda marcado como no derivado de la física", () => {
  const item = byId("fusiones-conciencia-2023");
  assert.ok(item);
  assert.equal(item.product, "interpretación");
  assert.match(item.layers[4].limit, /no se sigue de la física citada/i);
  assert.match(item.layers[2].inference, /ninguno de esos programas introduce sujetos/i);
});

test("ningún caso promueve una tesis metafísica a resultado", () => {
  for (const item of data.cases) {
    const leap = item.layers[4];
    assert.doesNotMatch(leap.inference, /demuestra que (la realidad|el espacio-tiempo|la conciencia)/i, item.id);
    assert.match(leap.limit, /no se sigue/i, item.id);
  }
});

test("CON-002 está auditado en el catálogo y en el programa de la serie", () => {
  const editorial = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "catalog-editorial.json"), "utf8"));
  assert.equal(editorial.records["CON-002"].status, "AUDITADO");
  const record = buildPublicData().catalog.find((entry) => entry.key === "CON-002");
  assert.ok(record);
  assert.equal(record.status, "AUDITADO");
  const program = fs.readFileSync(path.join(ROOT, "26_conciencia", "PROGRAMA_CONCIENCIA.md"), "utf8");
  assert.match(program, /\| CON-002 \|[^\n]*\*\*AUDITADO\*\* \|/);
});
