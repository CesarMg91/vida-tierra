import colonialEncountersEvidenceData from "../content/colonial-encounters-evidence.json";

export const colonialEncounterLayerKinds = [
  "exposure",
  "violence",
  "labor",
  "nutrition",
  "classification",
  "response",
  "survival",
] as const;

export type ColonialEncounterLayerKind = (typeof colonialEncounterLayerKinds)[number];

export type ColonialEncounterLayer = {
  kind: ColonialEncounterLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type ColonialEncounterCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: ColonialEncounterLayer[];
};

export type ColonialEncountersEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: ColonialEncounterCase[];
};

export const colonialEncountersEvidence = colonialEncountersEvidenceData as ColonialEncountersEvidenceData;
