import urbanismsData from "../content/civilization-urbanisms.json";

export const urbanDimensionKinds = ["density", "extent", "monumentality", "planning", "inequality", "governance", "provisioning"] as const;

export type UrbanDimensionKind = (typeof urbanDimensionKinds)[number];

export const urbanDimensionStatuses = ["sostenido", "condicionado", "no-demostrado", "dato-ausente"] as const;

export type UrbanDimensionStatus = (typeof urbanDimensionStatuses)[number];

export type UrbanDimensionStep = {
  kind: UrbanDimensionKind;
  status: UrbanDimensionStatus;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type UrbanismCase = {
  id: string;
  title: string;
  region: string;
  window: string;
  archives: string[];
  adversary: string;
  steps: UrbanDimensionStep[];
};

export type CivilizationUrbanismsData = {
  schemaVersion: number;
  researchSlug: string;
  cases: UrbanismCase[];
};

export const civilizationUrbanisms = urbanismsData as CivilizationUrbanismsData;
