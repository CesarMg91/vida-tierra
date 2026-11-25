import anesthesiaAntisepsisEvidenceData from "../content/anesthesia-antisepsis-evidence.json";

export const anesthesiaAntisepsisLayerKinds = [
  "problem",
  "testimony",
  "demonstration",
  "series",
  "comparison",
  "mechanism",
  "adoption",
] as const;

export type AnesthesiaAntisepsisLayerKind = (typeof anesthesiaAntisepsisLayerKinds)[number];

export type AnesthesiaAntisepsisLayer = {
  kind: AnesthesiaAntisepsisLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type AnesthesiaAntisepsisCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: AnesthesiaAntisepsisLayer[];
};

export type AnesthesiaAntisepsisEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: AnesthesiaAntisepsisCase[];
};

export const anesthesiaAntisepsisEvidence = anesthesiaAntisepsisEvidenceData as AnesthesiaAntisepsisEvidenceData;
