import anatomyPrintEvidenceData from "../content/anatomy-print-evidence.json";

export const anatomyPrintLayerKinds = [
  "body",
  "procedure",
  "image",
  "text",
  "comparison",
  "correction",
  "circulation",
] as const;

export type AnatomyPrintLayerKind = (typeof anatomyPrintLayerKinds)[number];

export type AnatomyPrintLayer = {
  kind: AnatomyPrintLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type AnatomyPrintCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: AnatomyPrintLayer[];
};

export type AnatomyPrintEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: AnatomyPrintCase[];
};

export const anatomyPrintEvidence = anatomyPrintEvidenceData as AnatomyPrintEvidenceData;
