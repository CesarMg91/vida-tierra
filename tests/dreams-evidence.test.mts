import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "dreams-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, "26_conciencia", "INVESTIGACION_CON_008_SUENOS_SUENO_LUCIDO.md"), "utf8");
const expectedKinds = ["system", "result", "scope", "interpretation", "leap", "test"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

const canonical = registryRows();

function known() {
  const claims = new Set(canonical.claims.map((row) => row.id));
  const evidence = new Set(canonical.evidence.map((row) => row.id));
  const sources = new Set(canonical.sources.map((row) => row.id));
  return { claims, evidence, sources };
}

test("CON-008 conserva siete casos y seis capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 7);
  assert.equal(new Set(data.cases.map((item: { id: string }) => item.id)).size, 7);
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

test("CON-008 sólo enlaza registros existentes", () => {
  const { claims, evidence, sources } = known();
  assert.ok(fs.existsSync(path.join(ROOT, `${data.researchSlug}.md`)));
  assert.ok(new Set(buildPublicData().catalog.map((record) => record.slug)).has(data.researchSlug));
  for (const item of data.cases) for (const layer of item.layers) {
    for (const id of layer.claimIds) assert.ok(claims.has(id), id);
    for (const id of layer.evidenceIds) assert.ok(evidence.has(id), id);
    for (const id of layer.sourceIds) assert.ok(sources.has(id), id);
  }
});

test("los claims y fuentes del expediente coinciden con el módulo y existen", () => {
  const { claims, sources } = known();
  const declared = [...research.matchAll(/^  - (CLAIM-CON-DREAM-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  const declaredSources = [...research.matchAll(/^  - (SRC-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  assert.ok(declared.length >= 50);
  assert.equal(new Set(declared).size, declared.length);
  assert.equal(new Set(declaredSources).size, declaredSources.length);
  for (const id of declared) assert.ok(claims.has(id), id);
  for (const id of declaredSources) assert.ok(sources.has(id), id);
  const used = new Set(data.cases.flatMap((item: { layers: { claimIds: string[] }[] }) => item.layers.flatMap((layer) => layer.claimIds)));
  for (const id of used) assert.ok(declared.includes(id as string), `${id} no está declarado en el expediente`);
  const usedSources = new Set(data.cases.flatMap((item: { layers: { sourceIds: string[] }[] }) => item.layers.flatMap((layer) => layer.sourceIds)));
  for (const id of usedSources) assert.ok(declaredSources.includes(id as string), `${id} no está declarada en el expediente`);
  const referenced = new Set([...research.matchAll(/`(CLAIM-CON-DREAM-[A-Z0-9-]+)`/g)].map((match) => match[1]));
  for (const id of referenced) assert.ok(declared.includes(id), `${id} se cita pero no se declara`);
  for (const id of declared) assert.ok(referenced.has(id), `${id} se declara pero no se cita en el texto`);
});

test("cada caso cierra diciendo que no es una guía de inducción ni de interpretación", () => {
  for (const item of data.cases) {
    assert.match(item.layers[5].limit, /no es una guía de inducción ni de interpretación de sueños/i, item.id);
  }
  assert.match(research, /no es una guía para inducir sueños lúcidos/);
});

test("ni el laboratorio ni el expediente dan dosis ni instrucciones de inducción", () => {
  for (const text of [JSON.stringify(data), research]) {
    assert.doesNotMatch(text, /\d+\s?(mg|µg|mcg|g)\b/i);
    assert.doesNotMatch(text, /cómo (inducir|provocar|tener|lograr) (un |tus |los )?sueños? lúcidos?/i);
    assert.doesNotMatch(text, /(paso|primer paso) \d|antes de dormir, (repite|di|imagina)/i);
  }
});

test("ningún caso promueve una tesis a resultado", () => {
  for (const item of data.cases) {
    const leap = item.layers[4];
    assert.doesNotMatch(leap.inference, /demuestra que/i, item.id);
    assert.match(leap.limit, /no se sigue/i, item.id);
  }
});

test("se conservan los límites centrales: REM no es soñar, 6 de 36, correlato no es mecanismo, inducción no fiable", () => {
  assert.match(byId("informe-al-despertar").layers[4].limit, /el REM no es condición necesaria/);
  assert.match(byId("comunicacion-en-tiempo-real").layers[1].limit, /6 de 36/);
  assert.match(byId("zona-caliente-posterior").layers[4].limit, /un correlato no es un mecanismo/);
  assert.match(byId("induccion-y-limites").layers[1].observed, /ninguna técnica indujo sueños lúcidos de forma fiable/);
  assert.match(byId("funcion-de-sonar").layers[4].limit, /sueño no es soñar/);
});

test("CON-008 es sueños, está auditado y figura en el programa de la serie", () => {
  const editorial = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "catalog-editorial.json"), "utf8"));
  assert.equal(editorial.records["CON-008"].status, "AUDITADO");
  assert.match(editorial.records["CON-008"].shortTitle, /sueños/);
  const record = buildPublicData().catalog.find((entry) => entry.key === "CON-008");
  assert.ok(record);
  assert.equal(record.status, "AUDITADO");
  const program = fs.readFileSync(path.join(ROOT, "26_conciencia", "PROGRAMA_CONCIENCIA.md"), "utf8");
  assert.match(program, /\| CON-008 \| ¿Qué sabemos de los sueños[^\n]*\*\*AUDITADO\*\* \|/);
});
