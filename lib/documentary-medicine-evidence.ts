import documentaryMedicineData from "../content/documentary-medicine-evidence.json";

export const documentaryMedicineLayerKinds = [
  "object",
  "text",
  "genre",
  "circulation",
  "practice",
  "consequence",
] as const;

export type DocumentaryMedicineLayerKind = (typeof documentaryMedicineLayerKinds)[number];

export type DocumentaryMedicineEvidenceLayer = {
  kind: DocumentaryMedicineLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type DocumentaryMedicineEvidenceCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: DocumentaryMedicineEvidenceLayer[];
};

export type DocumentaryMedicineEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: DocumentaryMedicineEvidenceCase[];
};

export const documentaryMedicineEvidence = documentaryMedicineData as DocumentaryMedicineEvidenceData;
