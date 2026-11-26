import transformationsData from "../content/civilization-transformations.json";

export const transformationLevelKinds = ["signal", "chronology", "depopulation", "institutions", "continuity", "attribution"] as const;

export type TransformationLevelKind = (typeof transformationLevelKinds)[number];

export const transformationLevelStatuses = ["sostenido", "condicionado", "no-demostrado", "dato-ausente"] as const;

export type TransformationLevelStatus = (typeof transformationLevelStatuses)[number];

export type TransformationLevelStep = {
  kind: TransformationLevelKind;
  status: TransformationLevelStatus;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type TransformationCase = {
  id: string;
  title: string;
  region: string;
  window: string;
  archives: string[];
  adversary: string;
  steps: TransformationLevelStep[];
};

export type CivilizationTransformationsData = {
  schemaVersion: number;
  researchSlug: string;
  cases: TransformationCase[];
};

export const civilizationTransformations = transformationsData as CivilizationTransformationsData;
