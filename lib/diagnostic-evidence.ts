import diagnosticData from "../content/diagnostic-evidence.json";

export const diagnosticLayerKinds = ["population", "index", "reference", "performance", "management", "outcome"] as const;
export type DiagnosticLayerKind = (typeof diagnosticLayerKinds)[number];

export type DiagnosticEvidenceLayer = {
  kind: DiagnosticLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type DiagnosticEvidenceCase = {
  id: string;
  title: string;
  scope: string;
  design: string;
  layers: DiagnosticEvidenceLayer[];
};

export type DiagnosticEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: DiagnosticEvidenceCase[];
};

export const diagnosticEvidence = diagnosticData as DiagnosticEvidenceData;
