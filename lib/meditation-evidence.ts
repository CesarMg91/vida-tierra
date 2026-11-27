import meditationEvidenceData from "../content/meditation-evidence.json";
import type { PerceptionRealityLayer } from "./perception-reality-evidence";

export type MeditationProduct =
  | "práctica"
  | "informe en primera persona"
  | "correlato cerebral"
  | "efecto de intervención"
  | "hallazgo empírico"
  | "estado informado";

export type MeditationCase = {
  id: string;
  title: string;
  product: MeditationProduct;
  stance: string;
  layers: PerceptionRealityLayer[];
};

export type MeditationEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: MeditationCase[];
};

export const meditationEvidence = meditationEvidenceData as MeditationEvidenceData;
