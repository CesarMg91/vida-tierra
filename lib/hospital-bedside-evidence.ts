import hospitalBedsideEvidenceData from "../content/hospital-bedside-evidence.json";

export const hospitalBedsideLayerKinds = [
  "institution",
  "admission",
  "encounter",
  "examination",
  "record",
  "comparison",
  "decision",
] as const;

export type HospitalBedsideLayerKind = (typeof hospitalBedsideLayerKinds)[number];

export type HospitalBedsideLayer = {
  kind: HospitalBedsideLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type HospitalBedsideCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: HospitalBedsideLayer[];
};

export type HospitalBedsideEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: HospitalBedsideCase[];
};

export const hospitalBedsideEvidence = hospitalBedsideEvidenceData as HospitalBedsideEvidenceData;
