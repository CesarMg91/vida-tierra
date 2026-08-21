import fs from "node:fs";
import path from "node:path";
import type {
  CatalogRecord,
  ClaimRecord,
  ControversyRecord,
  ErrorRecord,
  EvidenceRecord,
  ResearchKnowledge,
  SourceRecord,
} from "./contracts";

const DATA_ROOT = path.join(process.cwd(), "public", "data");
const jsonCache = new Map<string, unknown>();

function readJson<T>(relativePath: string): T {
  if (!jsonCache.has(relativePath)) {
    jsonCache.set(relativePath, JSON.parse(fs.readFileSync(path.join(DATA_ROOT, relativePath), "utf8")));
  }
  return jsonCache.get(relativePath) as T;
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

function orderedRecords<T extends { id: string }>(records: T[], ids: Iterable<string>) {
  const byId = new Map(records.map((record) => [record.id, record]));
  return [...new Set(ids)].map((id) => byId.get(id)).filter((record): record is T => Boolean(record));
}

export function getResearchKnowledge(record: CatalogRecord, mentionedIds: string[] = []): ResearchKnowledge {
  const allClaims = readJson<ClaimRecord[]>("knowledge/claims.json");
  const allEvidence = readJson<EvidenceRecord[]>("knowledge/evidence.json");
  const allSources = readJson<SourceRecord[]>("knowledge/sources.json");
  const allControversies = readJson<ControversyRecord[]>("knowledge/controversies.json");
  const allErrors = readJson<ErrorRecord[]>("knowledge/errors.json");

  const mentioned = new Set(mentionedIds);
  const claimIds = [
    ...record.claimIds,
    ...allClaims.filter((claim) => claim.researchIds.includes(record.id)).map((claim) => claim.id),
    ...mentionedIds.filter((id) => id.startsWith("CLAIM-")),
  ];
  const claims = orderedRecords(allClaims, claimIds);
  const claimSet = new Set(claims.map((claim) => claim.id));

  const evidenceIds = [
    ...claims.flatMap((claim) => claim.evidenceIds),
    ...allEvidence.filter((evidence) => evidence.claimIds.some((id) => claimSet.has(id))).map((evidence) => evidence.id),
    ...mentionedIds.filter((id) => id.startsWith("EVID-")),
  ];
  const evidence = orderedRecords(allEvidence, evidenceIds);

  const sourceIds = [
    ...record.sourceIds,
    ...claims.flatMap((claim) => claim.sourceIds),
    ...evidence.flatMap((item) => item.sourceIds),
    ...mentionedIds.filter((id) => id.startsWith("SRC-")),
  ];

  return {
    claims,
    evidence,
    sources: orderedRecords(allSources, sourceIds),
    controversies: allControversies.filter((item) => mentioned.has(item.id)),
    errors: allErrors.filter((item) => mentioned.has(item.id)),
  };
}
