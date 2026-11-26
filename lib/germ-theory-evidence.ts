import germTheoryEvidenceData from "../content/germ-theory-evidence.json";

export const germTheoryLayerKinds = [
  "observation",
  "isolation",
  "culture",
  "experiment",
  "epidemiology",
  "mechanism",
  "attribution",
] as const;

export type GermTheoryLayerKind = (typeof germTheoryLayerKinds)[number];

export type GermTheoryLayer = {
  kind: GermTheoryLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type GermTheoryCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: GermTheoryLayer[];
};

export type GermTheoryEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: GermTheoryCase[];
};

export const germTheoryEvidence = germTheoryEvidenceData as GermTheoryEvidenceData;
