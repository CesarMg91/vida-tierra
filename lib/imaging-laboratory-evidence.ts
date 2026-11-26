import imagingLaboratoryEvidenceData from "../content/imaging-laboratory-evidence.json";

export const imagingLaboratoryLayerKinds = [
  "signal",
  "instrument",
  "reading",
  "threshold",
  "category",
  "accuracy",
  "consequence",
] as const;

export type ImagingLaboratoryLayerKind = (typeof imagingLaboratoryLayerKinds)[number];

export type ImagingLaboratoryLayer = {
  kind: ImagingLaboratoryLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type ImagingLaboratoryCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: ImagingLaboratoryLayer[];
};

export type ImagingLaboratoryEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: ImagingLaboratoryCase[];
};

export const imagingLaboratoryEvidence = imagingLaboratoryEvidenceData as ImagingLaboratoryEvidenceData;
