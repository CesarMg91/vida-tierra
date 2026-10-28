import lillyEvidenceData from "../content/lilly-evidence.json";
import type { PerceptionRealityLayer } from "./perception-reality-evidence";

export type LillyProduct =
  | "método publicado"
  | "hallazgo publicado"
  | "informe en primera persona"
  | "réplica posterior"
  | "interpretación"
  | "historia documentada";

export type LillyCase = {
  id: string;
  title: string;
  product: LillyProduct;
  stance: string;
  layers: PerceptionRealityLayer[];
};

export type LillyEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: LillyCase[];
};

export const lillyEvidence = lillyEvidenceData as LillyEvidenceData;
