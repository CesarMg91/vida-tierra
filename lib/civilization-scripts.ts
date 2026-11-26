import scriptsData from "../content/civilization-scripts.json";

export const scriptLevelKinds = ["sign", "system", "language", "function", "institution", "decipherment"] as const;

export type ScriptLevelKind = (typeof scriptLevelKinds)[number];

export const scriptLevelStatuses = ["sostenido", "condicionado", "no-demostrado", "dato-ausente"] as const;

export type ScriptLevelStatus = (typeof scriptLevelStatuses)[number];

export type ScriptLevelStep = {
  kind: ScriptLevelKind;
  status: ScriptLevelStatus;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type ScriptArchiveCase = {
  id: string;
  title: string;
  region: string;
  window: string;
  archives: string[];
  adversary: string;
  steps: ScriptLevelStep[];
};

export type CivilizationScriptsData = {
  schemaVersion: number;
  researchSlug: string;
  cases: ScriptArchiveCase[];
};

export const civilizationScripts = scriptsData as CivilizationScriptsData;
