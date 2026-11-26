import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-transformations.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, `${data.researchSlug}.md`), "utf8");
const frontmatter = research.split("---")[1] ?? "";
const declared = (key: string) => {
  const block = frontmatter.split(`${key}:`)[1]?.split(/\n[a-z_]+:/)[0] ?? "";
  return new Set([...block.matchAll(/-\s+(\S+)/g)].map((match) => match[1]));
};
const kinds = ["signal", "chronology", "depopulation", "institutions", "continuity", "attribution"];
const statuses = new Set(["sostenido", "condicionado", "no-demostrado", "dato-ausente"]);

type Step = { kind: string; status: string; observed: string; inference: string; limit: string; claimIds: string[]; evidenceIds: string[]; sourceIds: string[] };
type Case = { id: string; title: string; region: string; window: string; archives: string[]; adversary: string; steps: Step[] };

test("CIV-010 conserva siete casos únicos con los seis niveles en orden", () => {
  assert.equal(data.schemaVersion, 1);
  assert.match(research, /^---\r?\nid: INV-CIV-TRANSFORMATIONS-001\r?\n/);
  assert.equal(data.cases.length, 7);
  assert.equal(new Set(data.cases.map((item: Case) => item.id)).size, data.cases.length);
  for (const item of data.cases as Case[]) {
    assert.deepEqual(item.steps.map((step) => step.kind), kinds, item.id);
    for (const field of ["title", "region", "window", "adversary"] as const) assert.ok(item[field].trim(), `${item.id}.${field}`);
    assert.ok(item.archives.length, item.id);
  }
});

test("los siete casos del encargo están representados", () => {
  const titles = (data.cases as Case[]).map((item) => item.title).join(" | ");
  for (const needle of ["Bronce", "Indo", "Mayas", "Angkor", "Rapa Nui", "Cahokia", "Roma"]) assert.ok(titles.includes(needle), needle);
});

test("cada nivel separa observado, inferencia, límite y estado, con referencias", () => {
  for (const item of data.cases as Case[]) {
    for (const step of item.steps) {
      assert.ok(statuses.has(step.status), `${item.id}/${step.kind}: ${step.status}`);
      assert.ok(step.observed.trim() && step.inference.trim() && step.limit.trim(), `${item.id}/${step.kind}`);
      assert.ok(step.claimIds.length && step.evidenceIds.length && step.sourceIds.length, `${item.id}/${step.kind}`);
    }
  }
});

test("ninguna atribución causal está sostenida y la coincidencia nunca se presenta como mecanismo", () => {
  for (const item of data.cases as Case[]) {
    const attribution = item.steps.find((step) => step.kind === "attribution");
    assert.ok(attribution, item.id);
    assert.notEqual(attribution.status, "sostenido", item.id);
    assert.doesNotMatch(attribution.inference, /causa (única|demostrada) (fue|es)|demuestra que .* caus/i, item.id);
  }
});

test("ningún caso se lee como desaparición de un pueblo y el dato ausente no se lee como colapso", () => {
  for (const item of data.cases as Case[]) {
    const continuity = item.steps.find((step) => step.kind === "continuity");
    assert.ok(continuity && ["sostenido", "condicionado"].includes(continuity.status), item.id);
    for (const step of item.steps) {
      assert.doesNotMatch(`${step.inference} ${step.observed}`, /desaparecieron sin dejar|pueblo extinto|civilización muerta|se extinguieron como pueblo|autodestrucción demostrada/i, `${item.id}/${step.kind}`);
      if (step.status === "dato-ausente") assert.match(step.inference, /No se infiere/, `${item.id}/${step.kind}`);
    }
  }
});

test("los claims y fuentes del módulo están declarados en el expediente", () => {
  const claims = declared("claims");
  const sources = declared("fuentes");
  for (const item of data.cases as Case[]) {
    for (const step of item.steps) {
      for (const id of step.claimIds) assert.ok(claims.has(id), id);
      for (const id of step.sourceIds) assert.ok(sources.has(id), id);
      for (const id of step.evidenceIds) assert.ok(id.startsWith("EVID-CIV-TRANSFORM-"), id);
    }
  }
});

// Mientras CIV-010 no esté integrado en CLAIMS.md, esta prueba se omite sola; al integrar, quitar `skip`.
const integrated = fs.readFileSync(path.join(ROOT, "CLAIMS.md"), "utf8").includes("INV-CIV-TRANSFORMATIONS-001");
test("las referencias del módulo existen en los registros canónicos", { skip: !integrated }, () => {
  const rows = registryRows();
  const claims = new Set(rows.claims.map((row) => row.id));
  const evidence = new Set(rows.evidence.map((row) => row.id));
  const sources = new Set(rows.sources.map((row) => row.id));
  for (const item of data.cases as Case[]) {
    for (const step of item.steps) {
      for (const id of step.claimIds) assert.ok(claims.has(id), id);
      for (const id of step.evidenceIds) assert.ok(evidence.has(id), id);
      for (const id of step.sourceIds) assert.ok(sources.has(id), id);
    }
  }
});
