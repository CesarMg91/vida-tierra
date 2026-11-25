import epidemiologyCountingEvidenceData from "../content/epidemiology-counting-evidence.json";

export const epidemiologyCountingLayerKinds = [
  "population",
  "exposure",
  "denominator",
  "comparison",
  "effect",
  "implementation",
  "inequality",
] as const;

export type EpidemiologyCountingLayerKind = (typeof epidemiologyCountingLayerKinds)[number];

export type EpidemiologyCountingLayer = {
  kind: EpidemiologyCountingLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type EpidemiologyCountingCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: EpidemiologyCountingLayer[];
};

export type EpidemiologyCountingEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: EpidemiologyCountingCase[];
};

export const epidemiologyCountingEvidence = epidemiologyCountingEvidenceData as EpidemiologyCountingEvidenceData;
