import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, buildPublicData, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "digital-ai-evidence.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, "15_medicina", "INVESTIGACION_MED_033_MEDICINA_DIGITAL_INTELIGENCIA_ARTIFICIAL.md"), "utf8");
const expectedKinds = ["data", "model", "validation", "deployment", "drift", "equity", "utility", "responsibility"];
const byId = (id: string) => data.cases.find((entry: { id: string }) => entry.id === id);

function known() {
  const rows = registryRows();
  return {
    claims: new Set(rows.claims.map((row) => row.id)),
    evidence: new Set(rows.evidence.map((row) => row.id)),
    sources: new Set(rows.sources.map((row) => row.id)),
  };
}

test("MED-033 conserva doce casos y ocho capas ordenadas", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.cases.length, 12);
  assert.equal(new Set(data.cases.map((item: { id: string }) => item.id)).size, 12);
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

test("MED-033 sólo enlaza registros canónicos", () => {
  const { claims, evidence, sources } = known();
  const slugs = new Set(buildPublicData().catalog.map((record) => record.slug));
  assert.ok(slugs.has(data.researchSlug) || fs.existsSync(path.join(ROOT, `${data.researchSlug}.md`)));
  for (const item of data.cases) for (const layer of item.layers) {
    for (const id of layer.claimIds) assert.ok(claims.has(id), id);
    for (const id of layer.evidenceIds) assert.ok(evidence.has(id), id);
    for (const id of layer.sourceIds) assert.ok(sources.has(id), id);
  }
});

test("los claims y fuentes del expediente coinciden con los del módulo y existen", () => {
  const { claims, sources } = known();
  const declared = [...research.matchAll(/^  - (CLAIM-MED-AI-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  const declaredSources = [...research.matchAll(/^  - (SRC-MED-AI-[A-Z0-9-]+)$/gm)].map((match) => match[1]);
  assert.ok(declared.length >= 80);
  assert.equal(new Set(declared).size, declared.length);
  for (const id of declared) assert.ok(claims.has(id), id);
  for (const id of declaredSources) assert.ok(sources.has(id), id);
  const used = new Set(data.cases.flatMap((item: { layers: { claimIds: string[] }[] }) => item.layers.flatMap((layer) => layer.claimIds)));
  for (const id of used) assert.ok(declared.includes(id as string), `${id} no está declarado en el expediente`);
  const referenced = new Set([...research.matchAll(/`(CLAIM-MED-AI-[A-Z0-9-]+)`/g)].map((match) => match[1]));
  for (const id of referenced) assert.ok(declared.includes(id), `${id} se cita pero no se declara`);
  for (const id of declared) assert.ok(referenced.has(id), `${id} se declara pero no se cita en el texto`);
});

test("los claims y fuentes ajenos que cita MED-033 existen en el registro canónico", () => {
  const { claims, sources } = known();
  for (const id of ["CLAIM-MED-IMG-AI-GENEALOGY-001", "CLAIM-MED-IMG-LUSTED-LEDLEY-1959-001", "CLAIM-MED-IMG-SHORTCUT-2018-001", "CLAIM-MED-IMG-UNDERDIAGNOSIS-2021-001", "CLAIM-MED-IMG-MASAI-2026-001", "CLAIM-MED-IMG-AI-METRICS-LIMIT-001", "CLAIM-MED-CRIT-OXIMETRY-BIAS-2020-001", "CLAIM-MED-DX-AI-001", "CLAIM-MED-DX-PREDICTION-001", "CLAIM-MED-REPORTING-VALIDITY-001", "CLAIM-MED-EBM-APPROVAL-THRESHOLD-001"]) {
    assert.ok(claims.has(id), id);
    assert.match(research, new RegExp(id));
  }
  for (const id of ["SRC-MED-DX-TRIPOD-AI-2024", "SRC-MED-CRIT-SJODING-2020"]) assert.ok(sources.has(id), id);
});

test("los sistemas expertos separan exactitud en casos de prueba y adopción", () => {
  const item = byId("expert-systems-1972-1994");
  assert.ok(item);
  assert.match(item.layers[2].observed, /91\.8 %.*65 %/);
  assert.match(item.layers[3].observed, /nunca se usó/);
  assert.match(item.layers[6].limit, /desenlaces/);
});

test("Obermeyer conserva la etiqueta de costo y la cifra de la corrección", () => {
  const item = byId("cost-proxy-2019");
  assert.ok(item);
  assert.match(item.layers[1].observed, /costos futuros/);
  assert.match(item.layers[5].observed, /17\.7 % a 46\.5 %/);
  assert.match(item.layers[3].limit, /no la prevalencia/);
});

test("la sepsis separa validación externa, deriva y utilidad observacional", () => {
  const item = byId("sepsis-drift-2017-2022");
  assert.ok(item);
  assert.match(item.layers[2].observed, /0\.63/);
  assert.match(item.layers[4].observed, /43 %.*abril de 2020/);
  assert.match(item.layers[6].limit, /Observacional/);
  assert.match(research, /área bajo la curva de 0\.63/);
});

test("IDx-DR separa exactitud autorizada y desenlaces no medidos", () => {
  const item = byId("idx-dr-autonomous-2018-2020");
  assert.ok(item);
  assert.match(item.layers[2].observed, /87\.2 %.*90\.7 %/);
  assert.match(item.layers[6].limit, /No se midieron/);
});

test("la Ley de IA conserva su calendario aplazado al 25 de noviembre de 2026", () => {
  const item = byId("eu-ai-act-liability-2024-2026");
  assert.ok(item);
  assert.match(item.layers[4].observed, /2 de diciembre de 2027.*2 de agosto de 2028/);
  assert.match(research, /2024\/1689/);
  assert.match(research, /2026\/1744/);
  assert.match(research, /ninguna obligación de alto riesgo de la Ley de IA se aplicaba aún a un dispositivo médico/);
});

test("los modelos de lenguaje separan examen, viñeta y usuario", () => {
  const item = byId("llm-exams-trials-2023-2026");
  assert.ok(item);
  assert.match(item.layers[3].observed, /94\.9 %.*34\.5 %/);
  assert.match(item.layers[6].observed, /76 % frente a 74 %/);
  assert.match(item.layers[6].limit, /Viñetas/);
});

test("MED-033 no cita MED-031 como expediente existente", () => {
  assert.doesNotMatch(`${research}\n${JSON.stringify(data)}`, /MED-031/);
});

test("MED-033 no contiene dosis, umbrales prescriptivos ni recomendaciones clínicas", () => {
  const text = `${research}\n${JSON.stringify(data)}`;
  assert.doesNotMatch(text, /\b\d+(?:[.,]\d+)?\s?(?:mg|ml|mL|cc|µg|mcg|g\/dL|mmHg|mm Hg|gramos?|granos?|gotas|UI|unidades|onzas|pintas)\b/);
  assert.doesNotMatch(text, /\b(?:se recomienda|recomendamos|debe administrarse|administre|dosis recomendada|umbral recomendado)\b/i);
  assert.match(research, /no contiene recomendaciones clínicas, indicaciones, dosis ni orientación sobre qué sistema usar, comprar o aprobar/);
});
