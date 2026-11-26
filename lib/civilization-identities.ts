import identitiesData from "../content/civilization-identities.json";

export const identityStepKinds = ["object", "assemblage", "style", "practice", "group", "name", "identity"] as const;

export type IdentityStepKind = (typeof identityStepKinds)[number];

export const identityStatuses = ["sostenido", "condicionado", "no-demostrado", "dato-ausente"] as const;

export type IdentityStatus = (typeof identityStatuses)[number];

export type IdentityStep = {
  kind: IdentityStepKind;
  status: IdentityStatus;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type IdentityCase = {
  id: string;
  title: string;
  region: string;
  window: string;
  archives: string[];
  adversary: string;
  steps: IdentityStep[];
};

export type CivilizationIdentitiesData = {
  schemaVersion: number;
  researchSlug: string;
  cases: IdentityCase[];
};

export const civilizationIdentities = identitiesData as CivilizationIdentitiesData;
