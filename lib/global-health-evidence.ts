import globalHealthEvidenceData from "../content/global-health-evidence.json";

export const globalHealthLayerKinds = [
  "biology",
  "exposure",
  "inequality",
  "system",
  "intervention",
  "measurement",
  "cooperation",
] as const;

export type GlobalHealthLayerKind = (typeof globalHealthLayerKinds)[number];

export type GlobalHealthLayer = {
  kind: GlobalHealthLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type GlobalHealthCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: GlobalHealthLayer[];
};

export type GlobalHealthEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: GlobalHealthCase[];
};

export const globalHealthEvidence = globalHealthEvidenceData as GlobalHealthEvidenceData;
