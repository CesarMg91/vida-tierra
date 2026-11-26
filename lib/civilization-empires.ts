import empiresData from "../content/civilization-empires.json";

export const reachDimensionKinds = ["claim", "presence", "logistics", "tribute", "archive", "negotiation", "control"] as const;

export type ReachDimensionKind = (typeof reachDimensionKinds)[number];

export const reachDimensionStatuses = ["sostenido", "condicionado", "no-demostrado", "dato-ausente"] as const;

export type ReachDimensionStatus = (typeof reachDimensionStatuses)[number];

export type ReachDimensionStep = {
  kind: ReachDimensionKind;
  status: ReachDimensionStatus;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type EmpireCase = {
  id: string;
  title: string;
  region: string;
  window: string;
  archives: string[];
  adversary: string;
  steps: ReachDimensionStep[];
};

export type CivilizationEmpiresData = {
  schemaVersion: number;
  researchSlug: string;
  cases: EmpireCase[];
};

export const civilizationEmpires = empiresData as CivilizationEmpiresData;
