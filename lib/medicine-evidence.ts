import medicineData from "../content/medicine-evidence.json";

export const clinicalLayerKinds = ["question", "comparison", "outcomes", "estimate", "applicability", "decision"] as const;
export type ClinicalLayerKind = (typeof clinicalLayerKinds)[number];

export type ClinicalEvidenceLayer = {
  kind: ClinicalLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type ClinicalEvidenceCase = {
  id: string;
  title: string;
  scope: string;
  design: string;
  layers: ClinicalEvidenceLayer[];
};

export type MedicineEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: ClinicalEvidenceCase[];
};

export const medicineEvidence = medicineData as MedicineEvidenceData;
