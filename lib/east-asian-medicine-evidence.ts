import eastAsianMedicineData from "../content/east-asian-medicine-evidence.json";

export const eastAsianMedicineLayerKinds = [
  "witness",
  "reading",
  "stratum",
  "operation",
  "institution",
  "consequence",
] as const;

export type EastAsianMedicineLayerKind = (typeof eastAsianMedicineLayerKinds)[number];

export type EastAsianMedicineEvidenceLayer = {
  kind: EastAsianMedicineLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type EastAsianMedicineEvidenceCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: EastAsianMedicineEvidenceLayer[];
};

export type EastAsianMedicineEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: EastAsianMedicineEvidenceCase[];
};

export const eastAsianMedicineEvidence = eastAsianMedicineData as EastAsianMedicineEvidenceData;
