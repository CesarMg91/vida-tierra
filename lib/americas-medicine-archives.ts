import americasMedicineArchiveData from "../content/americas-medicine-archives.json";

export const americasMedicineLayerKinds = [
  "archive",
  "provenance",
  "signal",
  "practice",
  "consequence",
  "limit",
] as const;

export type AmericasMedicineLayerKind = (typeof americasMedicineLayerKinds)[number];

export type AmericasMedicineArchiveLayer = {
  kind: AmericasMedicineLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type AmericasMedicineArchiveCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: AmericasMedicineArchiveLayer[];
};

export type AmericasMedicineArchiveData = {
  schemaVersion: number;
  researchSlug: string;
  cases: AmericasMedicineArchiveCase[];
};

export const americasMedicineArchives = americasMedicineArchiveData as AmericasMedicineArchiveData;
