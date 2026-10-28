import consciousnessFundamentalEvidenceData from "../content/consciousness-fundamental-evidence.json";
import type { PerceptionRealityLayer } from "./perception-reality-evidence";

export type ConsciousnessFundamentalProduct =
  | "argumento filosófico"
  | "hallazgo empírico"
  | "teoría científica"
  | "modelo formal"
  | "tesis metafísica";

export type ConsciousnessFundamentalCase = {
  id: string;
  title: string;
  product: ConsciousnessFundamentalProduct;
  stance: string;
  layers: PerceptionRealityLayer[];
};

export type ConsciousnessFundamentalEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: ConsciousnessFundamentalCase[];
};

export const consciousnessFundamentalEvidence = consciousnessFundamentalEvidenceData as ConsciousnessFundamentalEvidenceData;
