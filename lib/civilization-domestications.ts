import domesticationsData from "../content/civilization-domestications.json";

export const domesticationFieldKinds = ["organism", "trait", "management", "village", "date", "diffusion"] as const;

export type DomesticationFieldKind = (typeof domesticationFieldKinds)[number];

export const domesticationStatuses = ["sostenido", "condicionado", "no-demostrado", "dato-ausente"] as const;

export type DomesticationStatus = (typeof domesticationStatuses)[number];

export type DomesticationStep = {
  kind: DomesticationFieldKind;
  status: DomesticationStatus;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type DomesticationCase = {
  id: string;
  title: string;
  region: string;
  window: string;
  archives: string[];
  adversary: string;
  steps: DomesticationStep[];
};

export type CivilizationDomesticationsData = {
  schemaVersion: number;
  researchSlug: string;
  cases: DomesticationCase[];
};

export const civilizationDomestications = domesticationsData as CivilizationDomesticationsData;
