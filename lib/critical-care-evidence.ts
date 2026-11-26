import criticalCareEvidenceData from "../content/critical-care-evidence.json";

export const criticalCareLayerKinds = [
  "infrastructure",
  "procedure",
  "series",
  "comparison",
  "protocol",
  "outcome",
  "harm",
] as const;

export type CriticalCareLayerKind = (typeof criticalCareLayerKinds)[number];

export type CriticalCareLayer = {
  kind: CriticalCareLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type CriticalCareCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: CriticalCareLayer[];
};

export type CriticalCareEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: CriticalCareCase[];
};

export const criticalCareEvidence = criticalCareEvidenceData as CriticalCareEvidenceData;
