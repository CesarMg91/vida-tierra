import rightsCategoriesEvidenceData from "../content/rights-categories-evidence.json";

export const rightsCategoriesLayerKinds = [
  "category",
  "diagnosis",
  "institution",
  "intervention",
  "consent",
  "movement",
  "harm",
] as const;

export type RightsCategoriesLayerKind = (typeof rightsCategoriesLayerKinds)[number];

export type RightsCategoriesLayer = {
  kind: RightsCategoriesLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type RightsCategoriesCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: RightsCategoriesLayer[];
};

export type RightsCategoriesEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: RightsCategoriesCase[];
};

export const rightsCategoriesEvidence = rightsCategoriesEvidenceData as RightsCategoriesEvidenceData;
