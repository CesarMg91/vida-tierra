import careProfessionsEvidenceData from "../content/care-professions-evidence.json";

export const careProfessionsLayerKinds = [
  "care",
  "testimony",
  "institution",
  "regulation",
  "credential",
  "practice",
  "outcome",
] as const;

export type CareProfessionsLayerKind = (typeof careProfessionsLayerKinds)[number];

export type CareProfessionsLayer = {
  kind: CareProfessionsLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type CareProfessionsCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: CareProfessionsLayer[];
};

export type CareProfessionsEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: CareProfessionsCase[];
};

export const careProfessionsEvidence = careProfessionsEvidenceData as CareProfessionsEvidenceData;
