import southAsianMedicineData from "../content/south-asian-medicine-evidence.json";

export const southAsianMedicineLayerKinds = [
  "testimony",
  "reading",
  "stratum",
  "circulation",
  "practice",
  "consequence",
] as const;

export type SouthAsianMedicineLayerKind = (typeof southAsianMedicineLayerKinds)[number];

export type SouthAsianMedicineEvidenceLayer = {
  kind: SouthAsianMedicineLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type SouthAsianMedicineEvidenceCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: SouthAsianMedicineEvidenceLayer[];
};

export type SouthAsianMedicineEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: SouthAsianMedicineEvidenceCase[];
};

export const southAsianMedicineEvidence = southAsianMedicineData as SouthAsianMedicineEvidenceData;
