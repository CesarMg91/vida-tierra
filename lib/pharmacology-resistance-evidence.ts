import pharmacologyResistanceEvidenceData from "../content/pharmacology-resistance-evidence.json";

export const pharmacologyResistanceLayerKinds = [
  "substance",
  "dose",
  "series",
  "comparison",
  "regulation",
  "surveillance",
  "ecology",
] as const;

export type PharmacologyResistanceLayerKind = (typeof pharmacologyResistanceLayerKinds)[number];

export type PharmacologyResistanceLayer = {
  kind: PharmacologyResistanceLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type PharmacologyResistanceCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: PharmacologyResistanceLayer[];
};

export type PharmacologyResistanceEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: PharmacologyResistanceCase[];
};

export const pharmacologyResistanceEvidence = pharmacologyResistanceEvidenceData as PharmacologyResistanceEvidenceData;
