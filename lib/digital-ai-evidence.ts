import digitalAIEvidenceData from "../content/digital-ai-evidence.json";

export const digitalAILayerKinds = [
  "data",
  "model",
  "validation",
  "deployment",
  "drift",
  "equity",
  "utility",
  "responsibility",
] as const;

export type DigitalAILayerKind = (typeof digitalAILayerKinds)[number];

export type DigitalAILayer = {
  kind: DigitalAILayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type DigitalAICase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: DigitalAILayer[];
};

export type DigitalAIEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: DigitalAICase[];
};

export const digitalAIEvidence = digitalAIEvidenceData as DigitalAIEvidenceData;
