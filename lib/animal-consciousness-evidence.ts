import animalConsciousnessEvidenceData from "../content/animal-consciousness-evidence.json";
import type { PerceptionRealityLayer } from "./perception-reality-evidence";

// Los cinco niveles de CON-007 (conducta, marcador, inferencia, sintiencia, estatus moral) más las declaraciones.
export type AnimalConsciousnessProduct =
  | "conducta"
  | "marcador"
  | "inferencia"
  | "declaración"
  | "sintiencia"
  | "estatus moral";

export type AnimalConsciousnessCase = {
  id: string;
  title: string;
  product: AnimalConsciousnessProduct;
  stance: string;
  layers: PerceptionRealityLayer[];
};

export type AnimalConsciousnessEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: AnimalConsciousnessCase[];
};

export const animalConsciousnessEvidence = animalConsciousnessEvidenceData as AnimalConsciousnessEvidenceData;
