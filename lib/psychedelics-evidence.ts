import psychedelicsEvidenceData from "../content/psychedelics-evidence.json";
import type { PerceptionRealityLayer } from "./perception-reality-evidence";

export type PsychedelicsProduct =
  | "hallazgo farmacológico"
  | "correlato cerebral"
  | "interpretación"
  | "hallazgo en animales"
  | "ensayo clínico"
  | "informe en primera persona"
  | "marco legal";

export type PsychedelicsCase = {
  id: string;
  title: string;
  product: PsychedelicsProduct;
  stance: string;
  layers: PerceptionRealityLayer[];
};

export type PsychedelicsEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: PsychedelicsCase[];
};

export const psychedelicsEvidence = psychedelicsEvidenceData as PsychedelicsEvidenceData;
