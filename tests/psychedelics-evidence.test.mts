import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "psychedelics-evidence.json"), "utf8"));
const expectedKinds = ["system", "result", "scope", "interpretation", "leap", "test"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

test("CON-006 conserva ocho casos y seis capas ordenadas", () => {
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

test("CON-006 sólo enlaza registros canónicos", () => {
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

test("cada caso cierra sin recomendar el uso de sustancias", () => {
  for (const item of data.cases) {
    assert.match(item.layers[5].limit, /no recomienda el uso de ninguna sustancia/i, item.id);
  }
});

test("ningún texto del laboratorio da dosis ni instrucciones de uso", () => {
  const text = JSON.stringify(data);
  assert.doesNotMatch(text, /\d+\s?(mg|µg|mcg|g)\b/i);
  assert.doesNotMatch(text, /cómo (tomar|preparar|conseguir|consumir)/i);
});

test("ningún caso promueve una tesis a resultado", () => {
  for (const item of data.cases) {
    const leap = item.layers[4];
    assert.doesNotMatch(leap.inference, /demuestra que/i, item.id);
    assert.match(leap.limit, /no se sigue/i, item.id);
  }
});

test("los ensayos conservan el cegamiento roto y la decisión de la FDA", () => {
  const depression = byId("psilocibina-depresion");
  assert.ok(depression);
  assert.match(depression.layers[2].observed, /no se sostuvo a 12/);
  assert.match(depression.layers[4].limit, /cegamiento casi nunca se conserva/);
  const mdma = byId("mdma-fda-2024");
  assert.ok(mdma);
  assert.match(mdma.layers[3].observed, /pidió otro ensayo de fase 3/);
});

test("la excepción ceremonial no se presenta como legalización", () => {
  const item = byId("riesgos-y-ley");
  assert.ok(item);
  assert.match(item.layers[3].observed, /indígenas y afromexicanos/);
  assert.match(item.layers[4].limit, /no es una legalización general/);
});

test("CON-006 es psicodélicos, está auditado y cierra el programa de la serie", () => {
  const editorial = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "catalog-editorial.json"), "utf8"));
  assert.equal(editorial.records["CON-006"].status, "AUDITADO");
  assert.match(editorial.records["CON-006"].shortTitle, /psicodélicos/);
  const record = buildPublicData().catalog.find((entry) => entry.key === "CON-006");
  assert.ok(record);
  assert.equal(record.status, "AUDITADO");
  const program = fs.readFileSync(path.join(ROOT, "26_conciencia", "PROGRAMA_CONCIENCIA.md"), "utf8");
  assert.match(program, /\| CON-006 \| ¿Qué enseñan los psicodélicos[^\n]*\*\*AUDITADO\*\* \|/);
  assert.doesNotMatch(program, /\| planeado \|/);
});
