import circulationPhysiologyEvidenceData from "../content/circulation-physiology-evidence.json";

export const circulationPhysiologyLayerKinds = [
  "system",
  "preparation",
  "intervention",
  "measurement",
  "comparison",
  "mechanism",
  "reception",
] as const;

export type CirculationPhysiologyLayerKind = (typeof circulationPhysiologyLayerKinds)[number];

export type CirculationPhysiologyLayer = {
  kind: CirculationPhysiologyLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type CirculationPhysiologyCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: CirculationPhysiologyLayer[];
};

export type CirculationPhysiologyEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: CirculationPhysiologyCase[];
};

export const circulationPhysiologyEvidence = circulationPhysiologyEvidenceData as CirculationPhysiologyEvidenceData;
