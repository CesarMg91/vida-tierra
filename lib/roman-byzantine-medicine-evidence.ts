import romanByzantineMedicineData from "../content/roman-byzantine-medicine-evidence.json";

export const romanByzantineMedicineLayerKinds = [
  "trace",
  "identification",
  "function",
  "operation",
  "access",
  "consequence",
] as const;

export type RomanByzantineMedicineLayerKind = (typeof romanByzantineMedicineLayerKinds)[number];

export type RomanByzantineMedicineEvidenceLayer = {
  kind: RomanByzantineMedicineLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type RomanByzantineMedicineEvidenceCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: RomanByzantineMedicineEvidenceLayer[];
};

export type RomanByzantineMedicineEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: RomanByzantineMedicineEvidenceCase[];
};

export const romanByzantineMedicineEvidence = romanByzantineMedicineData as RomanByzantineMedicineEvidenceData;
