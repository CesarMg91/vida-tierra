import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "meditation-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, "26_conciencia", "INVESTIGACION_CON_009_MEDITACION.md"), "utf8");
const expectedKinds = ["system", "result", "scope", "interpretation", "leap", "test"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

// BORRADOR: mientras CON-009 no esté integrado, los IDs nuevos se leen del archivo de integración.
const canonical = registryRows();
const DRAFT_FILE = path.join(ROOT, "_borradores_locales", "integracion", "CON-009.md");
const DRAFT = !canonical.claims.some((row) => row.id === "CLAIM-CON-MEDIT-VERDICT-001") && fs.existsSync(DRAFT_FILE);

function known() {
  const claims = new Set(canonical.claims.map((row) => row.id));
  const evidence = new Set(canonical.evidence.map((row) => row.id));
  const sources = new Set(canonical.sources.map((row) => row.id));
  if (DRAFT) {
    const draft = fs.readFileSync(DRAFT_FILE, "utf8");
    for (const [, id] of draft.matchAll(/^\| `((?:CLAIM|EVID|SRC)-[A-Z0-9-]+)` \|/gm)) {
      if (id.startsWith("CLAIM-")) claims.add(id);
      else if (id.startsWith("EVID-")) evidence.add(id);
      else sources.add(id);
    }
  }
  return { claims, evidence, sources };
}

test("CON-009 conserva ocho casos y seis capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 8);
  assert.equal(new Set(data.cases.map((item: { id: string }) => item.id)).size, 8);
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

test("CON-009 sólo enlaza registros existentes", () => {
  const { claims, evidence, sources } = known();
  assert.ok(fs.existsSync(path.join(ROOT, `${data.researchSlug}.md`)));
  if (!DRAFT) assert.ok(new Set(buildPublicData().catalog.map((record) => record.slug)).has(data.researchSlug));
  for (const item of data.cases) for (const layer of item.layers) {
    for (const id of layer.claimIds) assert.ok(claims.has(id), id);
    for (const id of layer.evidenceIds) assert.ok(evidence.has(id), id);
    for (const id of layer.sourceIds) assert.ok(sources.has(id), id);
  }
});

test("los claims y fuentes del expediente coinciden con el módulo y existen", () => {
  const { claims, sources } = known();
  const declared = [...research.matchAll(/^  - (CLAIM-CON-MEDIT-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  const declaredSources = [...research.matchAll(/^  - (SRC-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  assert.ok(declared.length >= 60);
  assert.equal(new Set(declared).size, declared.length);
  assert.equal(new Set(declaredSources).size, declaredSources.length);
  for (const id of declared) assert.ok(claims.has(id), id);
  for (const id of declaredSources) assert.ok(sources.has(id), id);
  const used = new Set(data.cases.flatMap((item: { layers: { claimIds: string[] }[] }) => item.layers.flatMap((layer) => layer.claimIds)));
  for (const id of used) assert.ok(declared.includes(id as string), `${id} no está declarado en el expediente`);
  const usedSources = new Set(data.cases.flatMap((item: { layers: { sourceIds: string[] }[] }) => item.layers.flatMap((layer) => layer.sourceIds)));
  for (const id of usedSources) assert.ok(declaredSources.includes(id as string), `${id} no está declarada en el expediente`);
  const referenced = new Set([...research.matchAll(/`(CLAIM-CON-MEDIT-[A-Z0-9-]+)`/g)].map((match) => match[1]));
  for (const id of referenced) assert.ok(declared.includes(id), `${id} se cita pero no se declara`);
  for (const id of declared) assert.ok(referenced.has(id), `${id} se declara pero no se cita en el texto`);
});

test("cada caso cierra diciendo que no es una guía de meditación ni una recomendación clínica", () => {
  for (const item of data.cases) {
    assert.match(item.layers[5].limit, /no es una guía de meditación ni una recomendación clínica/i, item.id);
  }
  assert.match(research, /no es una guía de meditación/);
  assert.match(research, /no es asesoría médica/);
});

test("ni el laboratorio ni el expediente dan instrucciones de práctica, dosis ni recomendaciones clínicas", () => {
  for (const text of [JSON.stringify(data), research]) {
    assert.doesNotMatch(text, /\d+\s?(mg|µg|mcg|g)\b/i);
    assert.doesNotMatch(text, /(aprende|te enseñamos) a meditar|siéntate|cierra los ojos|inhala|exhala|repite (el|un) mantra|lleva tu atención/i);
    assert.doesNotMatch(text, /(paso|primer paso) \d|minutos al día (te|le) (ayudan|bastan)/i);
    assert.doesNotMatch(text, /(se recomienda|recomendamos|te recomendamos) (meditar|practicar)/i);
  }
});

test("ningún caso promueve una tesis a resultado", () => {
  for (const item of data.cases) {
    const leap = item.layers[4];
    assert.doesNotMatch(leap.inference, /demuestra que/i, item.id);
    assert.match(leap.limit, /no se sigue/i, item.id);
  }
});

test("se conservan los límites centrales: control activo, sin cambio estructural, efectos adversos y cese no informable", () => {
  assert.match(byId("ensayos-y-controles").layers[1].observed, /0\.23 frente a específicos/);
  assert.match(byId("ensayos-y-controles").layers[2].observed, /8,376/);
  assert.match(byId("gamma-de-expertos").layers[4].limit, /no es un efecto de la práctica/);
  assert.match(byId("efectos-adversos").layers[1].observed, /8\.3 %/);
  assert.match(byId("cese-y-metafisica").layers[4].limit, /no se puede informar mientras ocurre/);
  assert.match(research, /218 personas asignadas al azar, sin cambios estructurales/);
});

test("CON-009 es meditación, está auditado y figura en el programa de la serie", { skip: DRAFT && "CON-009 aún no está integrado" }, () => {
  const editorial = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "catalog-editorial.json"), "utf8"));
  assert.equal(editorial.records["CON-009"].status, "AUDITADO");
  assert.match(editorial.records["CON-009"].shortTitle, /meditación/);
  const record = buildPublicData().catalog.find((entry) => entry.key === "CON-009");
  assert.ok(record);
  assert.equal(record.status, "AUDITADO");
  const program = fs.readFileSync(path.join(ROOT, "26_conciencia", "PROGRAMA_CONCIENCIA.md"), "utf8");
  assert.match(program, /\| CON-009 \| ¿Qué sabemos de la meditación\?[^\n]*\*\*AUDITADO\*\* \|/);
});
