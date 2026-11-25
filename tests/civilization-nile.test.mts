import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { ROOT, registryRows } from "../scripts/public-data-core.mjs";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "civilization-nile.json"), "utf8"));
const research = fs.readFileSync(path.join(ROOT, `${data.researchSlug}.md`), "utf8");
const frontmatter = research.split("---")[1] ?? "";
const declared = (key: string) => {
  const block = frontmatter.split(`${key}:`)[1]?.split(/\n[a-z_]+:/)[0] ?? "";
  return new Set([...block.matchAll(/-\s+(\S+)/g)].map((match) => match[1]));
};
// El módulo reutiliza una evidencia ya canónica de la Investigación 050.
const REUSED_EVIDENCE = new Set(["EVID-SAHARA-PASTORAL-DAIRY-001"]);

test("CIV-004 conserva seis archivos únicos y apunta a su expediente", () => {
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.archives.length, 6);
  assert.equal(new Set(data.archives.map((item: { id: string }) => item.id)).size, 6);
  assert.match(research, /^---\nid: INV-CIV-NILE-001\n/);
});

test("cada archivo separa observación, inferencia, límite y adversario", () => {
  for (const item of data.archives) {
    for (const field of ["label", "window", "archive", "inference", "limit", "adversary"]) assert.ok(String(item[field]).trim(), `${item.id}.${field}`);
    assert.ok(item.sites.length && item.claimIds.length && item.evidenceIds.length && item.sourceIds.length, item.id);
  }
});

test("ningún archivo convierte la unificación en un año", () => {
  for (const item of data.archives) {
    assert.doesNotMatch(`${item.inference} ${item.limit}`, /unific\w+ (ocurri|fue) en (el año )?-?\d/i, item.id);
  }
});

test("los claims y fuentes del módulo están declarados en el expediente", () => {
  const claims = declared("claims");
  const sources = declared("fuentes");
  for (const item of data.archives) {
    for (const id of item.claimIds) assert.ok(claims.has(id), id);
    for (const id of item.sourceIds) assert.ok(sources.has(id), id);
    for (const id of item.evidenceIds) assert.ok(id.startsWith("EVID-CIV-NILE-") || REUSED_EVIDENCE.has(id), id);
  }
});

test("las referencias del módulo existen en los registros canónicos", () => {
  const rows = registryRows();
  const claims = new Set(rows.claims.map((row) => row.id));
  const evidence = new Set(rows.evidence.map((row) => row.id));
  const sources = new Set(rows.sources.map((row) => row.id));
  for (const item of data.archives) {
    for (const id of item.claimIds) assert.ok(claims.has(id), id);
    for (const id of item.evidenceIds) assert.ok(evidence.has(id), id);
    for (const id of item.sourceIds) assert.ok(sources.has(id), id);
  }
});
