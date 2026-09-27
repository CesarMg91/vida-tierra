import epidemicsQuarantineEvidenceData from "../content/epidemics-quarantine-evidence.json";

export const epidemicsQuarantineLayerKinds = [
  "testimony",
  "agent",
  "magnitude",
  "response",
  "compliance",
  "inequality",
] as const;

export type EpidemicsQuarantineLayerKind = (typeof epidemicsQuarantineLayerKinds)[number];

export type EpidemicsQuarantineLayer = {
  kind: EpidemicsQuarantineLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type EpidemicsQuarantineCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: EpidemicsQuarantineLayer[];
};

export type EpidemicsQuarantineEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: EpidemicsQuarantineCase[];
};

export const epidemicsQuarantineEvidence = epidemicsQuarantineEvidenceData as EpidemicsQuarantineEvidenceData;
