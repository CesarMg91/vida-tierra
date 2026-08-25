import historicalMedicineData from "../content/historical-medicine-evidence.json";

export const historicalMedicineLayerKinds = [
  "specimen",
  "context",
  "trace",
  "interpretation",
  "behavior",
  "system",
] as const;

export type HistoricalMedicineLayerKind = (typeof historicalMedicineLayerKinds)[number];

export type HistoricalMedicineEvidenceLayer = {
  kind: HistoricalMedicineLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type HistoricalMedicineEvidenceCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: HistoricalMedicineEvidenceLayer[];
};

export type HistoricalMedicineEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: HistoricalMedicineEvidenceCase[];
};

export const historicalMedicineEvidence = historicalMedicineData as HistoricalMedicineEvidenceData;
