import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "lilly-evidence.json"), "utf8"));
const expectedKinds = ["system", "result", "scope", "interpretation", "leap", "test"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

test("CON-004 conserva ocho casos y seis capas ordenadas", () => {
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

test("CON-004 sólo enlaza registros canónicos", () => {
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

test("la imitación vocal no se convierte en habla", () => {
  const item = byId("imitacion-delfines-1965");
  assert.ok(item);
  assert.match(item.layers[1].observed, /92 %/);
  assert.match(item.layers[1].limit, /no significado/i);
  assert.match(item.layers[4].limit, /igualar ráfagas no es entender palabras/i);
});

test("la flotación conserva sus límites y no se recomienda", () => {
  const item = byId("tanque-flotacion");
  assert.ok(item);
  assert.match(item.layers[3].limit, /sin cegamiento/i);
  assert.match(item.layers[5].limit, /no recomienda/i);
});

test("los informes bajo sustancias no prueban su contenido", () => {
  const item = byId("ketamina-entidades");
  assert.ok(item);
  assert.match(item.layers[4].limit, /no se sigue que lo informado exista/i);
  assert.match(item.layers[5].limit, /no recomienda el uso de sustancias/i);
});

test("el «suicidio» del delfín queda como interpretación", () => {
  const item = byId("laboratorio-st-thomas");
  assert.ok(item);
  assert.match(item.layers[3].limit, /no una causa de muerte establecida/i);
});

test("ningún caso promueve una tesis a resultado", () => {
  for (const item of data.cases) {
    const leap = item.layers[4];
    assert.doesNotMatch(leap.inference, /demuestra que/i, item.id);
    assert.match(leap.limit, /no se sigue/i, item.id);
  }
});

test("CON-004 es Lilly y la serie sigue consecutiva", () => {
  const editorial = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "catalog-editorial.json"), "utf8"));
  assert.equal(editorial.records["CON-004"].status, "AUDITADO");
  assert.match(editorial.records["CON-004"].shortTitle, /Lilly/);
  const record = buildPublicData().catalog.find((entry) => entry.key === "CON-004");
  assert.ok(record);
  assert.equal(record.status, "AUDITADO");
  const program = fs.readFileSync(path.join(ROOT, "26_conciencia", "PROGRAMA_CONCIENCIA.md"), "utf8");
  assert.match(program, /\| CON-004 \| John C\. Lilly[^\n]*\*\*AUDITADO\*\* \|/);
  // El orden de la serie se conserva; el estado de las siguientes lo prueba cada una.
  assert.match(program, /\| CON-005 \| ¿Qué conecta agentes conscientes/);
  assert.match(program, /\| CON-006 \| ¿Qué enseñan los psicodélicos/);
});
