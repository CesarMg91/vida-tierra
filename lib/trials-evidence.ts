import trialsEvidenceData from "../content/trials-evidence.json";

export const trialsEvidenceLayerKinds = [
  "design",
  "allocation",
  "consent",
  "registration",
  "publication",
  "synthesis",
  "decision",
] as const;

export type TrialsEvidenceLayerKind = (typeof trialsEvidenceLayerKinds)[number];

export type TrialsEvidenceLayer = {
  kind: TrialsEvidenceLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type TrialsEvidenceCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: TrialsEvidenceLayer[];
};

export type TrialsEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: TrialsEvidenceCase[];
};

export const trialsEvidence = trialsEvidenceData as TrialsEvidenceData;
