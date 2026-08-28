import greekHellenisticMedicineData from "../content/greek-hellenistic-medicine-evidence.json";

export const greekHellenisticMedicineLayerKinds = [
  "witness",
  "reading",
  "genre",
  "operation",
  "institution",
  "consequence",
] as const;

export type GreekHellenisticMedicineLayerKind = (typeof greekHellenisticMedicineLayerKinds)[number];

export type GreekHellenisticMedicineEvidenceLayer = {
  kind: GreekHellenisticMedicineLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type GreekHellenisticMedicineEvidenceCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: GreekHellenisticMedicineEvidenceLayer[];
};

export type GreekHellenisticMedicineEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: GreekHellenisticMedicineEvidenceCase[];
};

export const greekHellenisticMedicineEvidence = greekHellenisticMedicineData as GreekHellenisticMedicineEvidenceData;
