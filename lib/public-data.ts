import fs from "node:fs";
import path from "node:path";
import type { CatalogRecord } from "./contracts";

const DATA_ROOT = path.join(process.cwd(), "public", "data");

function readJson<T>(relativePath: string): T {
  return JSON.parse(fs.readFileSync(path.join(DATA_ROOT, relativePath), "utf8")) as T;
}

export function getCatalog(): CatalogRecord[] {
  return readJson<CatalogRecord[]>("catalog.json");
}

export function getKnowledgeCounts() {
  return {
    claims: readJson<unknown[]>("knowledge/claims.json").length,
    evidence: readJson<unknown[]>("knowledge/evidence.json").length,
    sources: readJson<unknown[]>("knowledge/sources.json").length,
    controversies: readJson<unknown[]>("knowledge/controversies.json").length,
    errors: readJson<unknown[]>("knowledge/errors.json").length,
  };
}
