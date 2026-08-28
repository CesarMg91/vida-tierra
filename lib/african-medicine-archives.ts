import africanMedicineArchiveData from "../content/african-medicine-archives.json";

export const africanMedicineLayerKinds = [
  "archive",
  "provenance",
  "signal",
  "inference",
  "contrast",
  "limit",
] as const;

export type AfricanMedicineLayerKind = (typeof africanMedicineLayerKinds)[number];

export type AfricanMedicineArchiveLayer = {
  kind: AfricanMedicineLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type AfricanMedicineArchiveCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: AfricanMedicineArchiveLayer[];
};

export type AfricanMedicineArchiveData = {
  schemaVersion: number;
  researchSlug: string;
  cases: AfricanMedicineArchiveCase[];
};

export const africanMedicineArchives = africanMedicineArchiveData as AfricanMedicineArchiveData;
