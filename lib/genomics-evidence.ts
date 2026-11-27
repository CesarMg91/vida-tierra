import genomicsEvidenceData from "../content/genomics-evidence.json";

export const genomicsLayerKinds = [
  "inheritance",
  "variant",
  "association",
  "penetrance",
  "prediction",
  "transfer",
  "classification",
  "governance",
] as const;

export type GenomicsLayerKind = (typeof genomicsLayerKinds)[number];

export type GenomicsLayer = {
  kind: GenomicsLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type GenomicsCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: GenomicsLayer[];
};

export type GenomicsEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: GenomicsCase[];
};

export const genomicsEvidence = genomicsEvidenceData as GenomicsEvidenceData;
