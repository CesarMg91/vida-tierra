import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-urbanisms.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, `${data.researchSlug}.md`), "utf8");
const frontmatter = research.split("---")[1] ?? "";
const declared = (key: string) => {
  const block = frontmatter.split(`${key}:`)[1]?.split(/\n[a-z_]+:/)[0] ?? "";
  return new Set([...block.matchAll(/-\s+(\S+)/g)].map((match) => match[1]));
};
const kinds = ["density", "extent", "monumentality", "planning", "inequality", "governance", "provisioning"];
const statuses = new Set(["sostenido", "condicionado", "no-demostrado", "dato-ausente"]);

type Step = { kind: string; status: string; observed: string; inference: string; limit: string; claimIds: string[]; evidenceIds: string[]; sourceIds: string[] };
type Case = { id: string; title: string; region: string; window: string; archives: string[]; adversary: string; steps: Step[] };

test("CIV-007 conserva nueve casos urbanos únicos con las siete dimensiones en orden", () => {
  assert.equal(data.schemaVersion, 1);
  assert.match(research, /^---\nid: INV-CIV-URBANISMS-001\n/);
  assert.equal(data.cases.length, 9);
  assert.equal(new Set(data.cases.map((item: Case) => item.id)).size, data.cases.length);
  for (const item of data.cases as Case[]) {
    assert.deepEqual(item.steps.map((step) => step.kind), kinds, item.id);
    for (const field of ["title", "region", "window", "adversary"] as const) assert.ok(item[field].trim(), `${item.id}.${field}`);
    assert.ok(item.archives.length, item.id);
  }
});

test("las regiones del punto 7 del programa están representadas", () => {
  const regions = new Set((data.cases as Case[]).map((item) => item.region));
  for (const needle of ["Indo", "China", "Mesoamérica", "Andes", "África", "Norteamérica"]) {
    assert.ok([...regions].some((region) => region.includes(needle)), needle);
  }
});

test("cada dimensión separa observado, inferencia, límite y estado", () => {
  for (const item of data.cases as Case[]) {
    for (const step of item.steps) {
      assert.ok(statuses.has(step.status), `${item.id}/${step.kind}: ${step.status}`);
      assert.ok(step.observed.trim() && step.inference.trim() && step.limit.trim(), `${item.id}/${step.kind}`);
      assert.ok(step.claimIds.length && step.evidenceIds.length && step.sourceIds.length, `${item.id}/${step.kind}`);
    }
  }
});

test("ningún caso tiene las siete dimensiones sostenidas", () => {
  for (const item of data.cases as Case[]) {
    assert.ok(item.steps.some((step) => step.status !== "sostenido"), item.id);
  }
});

test("ninguna dimensión convierte el tamaño en ciudad ni el dato ausente en igualdad", () => {
  for (const item of data.cases as Case[]) {
    for (const step of item.steps) {
      assert.doesNotMatch(`${step.inference} ${step.observed}`, /cuna de la civilizaci|primera ciudad del mundo|verdadera ciudad|ciudad fallida/i, `${item.id}/${step.kind}`);
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
      for (const id of step.evidenceIds) assert.ok(id.startsWith("EVID-CIV-URBCOMP-"), id);
    }
  }
});

test("las referencias del módulo existen en los registros canónicos", () => {
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
