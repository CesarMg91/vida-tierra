import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "animal-consciousness-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, `${data.researchSlug}.md`), "utf8");
const frontmatter = research.split("---")[1] ?? "";
const declared = (key: string) => {
  const block = frontmatter.split(`${key}:`)[1]?.split(/\n[a-z_]+:/)[0] ?? "";
  return new Set([...block.matchAll(/-\s+(\S+)/g)].map((match) => match[1]));
};
const expectedKinds = ["system", "result", "scope", "interpretation", "leap", "test"];
const products = new Set(["conducta", "marcador", "inferencia", "declaración", "sintiencia", "estatus moral"]);
type Layer = { kind: string; observed: string; inference: string; limit: string; claimIds: string[]; evidenceIds: string[]; sourceIds: string[] };
type Case = { id: string; title: string; product: string; stance: string; layers: Layer[] };
const cases = data.cases as Case[];
const byId = (id: string) => cases.find((entry) => entry.id === id);

test("CON-007 conserva ocho casos únicos y seis capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.match(research, /^---\r?\nid: INV-CON-ANIMAL-CONSCIOUSNESS-007\r?\n/);
  assert.equal(cases.length, 8);
  assert.equal(new Set(cases.map((item) => item.id)).size, cases.length);
  for (const item of cases) {
    assert.ok(item.title.trim() && item.stance.trim(), item.id);
    assert.ok(products.has(item.product), `${item.id}: ${item.product}`);
    assert.deepEqual(item.layers.map((layer) => layer.kind), expectedKinds, item.id);
    for (const layer of item.layers) {
      assert.ok(layer.observed.trim() && layer.inference.trim() && layer.limit.trim(), `${item.id}/${layer.kind}`);
      assert.ok(layer.claimIds.length && layer.evidenceIds.length && layer.sourceIds.length, `${item.id}/${layer.kind}`);
    }
  }
});

test("los cinco niveles del encargo están representados como productos", () => {
  const used = new Set(cases.map((item) => item.product));
  for (const level of ["conducta", "marcador", "inferencia", "sintiencia", "estatus moral"]) assert.ok(used.has(level), level);
});

test("los temas del encargo están cubiertos", () => {
  const text = JSON.stringify(data);
  for (const needle of ["espejo", "Cambridge", "Nueva York", "LSE", "pulpos", "cangrejos", "Abejorros", "peces", "sintiencia"]) {
    assert.ok(text.includes(needle), needle);
  }
});

test("ningún caso promueve una conducta, un marcador o una declaración a prueba de experiencia", () => {
  for (const item of cases) {
    const leap = item.layers[4];
    assert.match(leap.limit, /no se sigue/i, item.id);
    for (const layer of item.layers) {
      assert.doesNotMatch(layer.inference, /demuestra que (es|son) conscientes?|prueba que siente/i, `${item.id}/${layer.kind}`);
    }
  }
});

test("el espejo conserva sus críticas: réplica fallida, entrenamiento y cultura", () => {
  const mirror = byId("prueba-del-espejo");
  assert.ok(mirror);
  assert.match(mirror.layers[2].observed, /réplica de 2020 con urracas no confirmó/);
  assert.match(mirror.layers[3].observed, /Monos entrenados/);
  assert.match(mirror.layers[4].limit, /fallarla demuestre su ausencia/);
  const fish = byId("pez-limpiador");
  assert.ok(fish);
  assert.match(fish.layers[2].observed, /sin espejo/);
});

test("las declaraciones no se presentan como pruebas y la ausencia de evidencia no se lee como ausencia", () => {
  const declarations = byId("declaraciones");
  assert.ok(declarations);
  assert.match(declarations.layers[4].limit, /una declaración no es una prueba/);
  const lse = byId("pulpos-y-cangrejos");
  assert.ok(lse);
  assert.match(lse.layers[5].limit, /ausencia de evidencia no es evidencia de ausencia/);
});

test("el estatus moral exige premisas éticas y el expediente no recomienda políticas", () => {
  const moral = byId("de-la-sintiencia-al-estatus-moral");
  assert.ok(moral);
  assert.match(moral.layers[4].limit, /premisas éticas/);
  assert.match(moral.layers[0].limit, /no recomienda políticas/);
  assert.match(research, /no es una guía de bienestar animal ni una recomendación de política pública/);
});

test("los claims y fuentes del módulo están declarados en el expediente", () => {
  const claims = declared("claims");
  const sources = declared("fuentes");
  for (const item of cases) {
    for (const layer of item.layers) {
      for (const id of layer.claimIds) assert.ok(claims.has(id), id);
      for (const id of layer.sourceIds) assert.ok(sources.has(id), id);
      for (const id of layer.evidenceIds) assert.ok(id.startsWith("EVID-CON-ANI-"), id);
    }
  }
});

test("CON-007 sólo enlaza registros canónicos", () => {
  const rows = registryRows();
  const claims = new Set(rows.claims.map((row) => row.id));
  const evidence = new Set(rows.evidence.map((row) => row.id));
  const sources = new Set(rows.sources.map((row) => row.id));
  const slugs = new Set(buildPublicData().catalog.map((record) => record.slug));
  assert.ok(slugs.has(data.researchSlug));
  for (const item of cases) for (const layer of item.layers) {
    for (const id of layer.claimIds) assert.ok(claims.has(id), id);
    for (const id of layer.evidenceIds) assert.ok(evidence.has(id), id);
    for (const id of layer.sourceIds) assert.ok(sources.has(id), id);
  }
});

test("CON-007 es conciencia animal, está auditado y figura en el programa de la serie", () => {
  const editorial = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "catalog-editorial.json"), "utf8"));
  assert.equal(editorial.records["CON-007"].status, "AUDITADO");
  assert.match(editorial.records["CON-007"].shortTitle, /animales/);
  const record = buildPublicData().catalog.find((entry) => entry.key === "CON-007");
  assert.ok(record);
  assert.equal(record.status, "AUDITADO");
  const program = fs.readFileSync(path.join(ROOT, "26_conciencia", "PROGRAMA_CONCIENCIA.md"), "utf8");
  assert.match(program, /\| CON-007 \| ¿Qué podemos saber de la conciencia de otros animales\?[^\n]*\*\*AUDITADO\*\* \|/);
});
