import perceptionRealityEvidenceData from "../content/perception-reality-evidence.json";

export const perceptionRealityLayerKinds = [
  "system",
  "result",
  "scope",
  "interpretation",
  "leap",
  "test",
] as const;

export type PerceptionRealityLayerKind = (typeof perceptionRealityLayerKinds)[number];

export type PerceptionRealityProduct = "teorema" | "simulación" | "hallazgo empírico" | "interpretación" | "crítica";

export type PerceptionRealityLayer = {
  kind: PerceptionRealityLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type PerceptionRealityCase = {
  id: string;
  title: string;
  product: PerceptionRealityProduct;
  stance: string;
  layers: PerceptionRealityLayer[];
};

export type PerceptionRealityEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: PerceptionRealityCase[];
};

export const perceptionRealityEvidence = perceptionRealityEvidenceData as PerceptionRealityEvidenceData;
