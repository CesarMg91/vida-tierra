import microscopyPathologyEvidenceData from "../content/microscopy-pathology-evidence.json";

export const microscopyPathologyLayerKinds = [
  "episode",
  "specimen",
  "preparation",
  "visualization",
  "lesion",
  "correlation",
  "disease",
] as const;

export type MicroscopyPathologyLayerKind = (typeof microscopyPathologyLayerKinds)[number];

export type MicroscopyPathologyLayer = {
  kind: MicroscopyPathologyLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type MicroscopyPathologyCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: MicroscopyPathologyLayer[];
};

export type MicroscopyPathologyEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: MicroscopyPathologyCase[];
};

export const microscopyPathologyEvidence = microscopyPathologyEvidenceData as MicroscopyPathologyEvidenceData;
