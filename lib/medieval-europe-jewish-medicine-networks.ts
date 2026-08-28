import medievalEuropeJewishMedicineNetworkData from "../content/medieval-europe-jewish-medicine-networks.json";

export const medievalEuropeJewishMedicineLayerKinds = [
  "witness",
  "version",
  "curriculum",
  "practitioner",
  "encounter",
  "reach",
] as const;

export type MedievalEuropeJewishMedicineLayerKind = (typeof medievalEuropeJewishMedicineLayerKinds)[number];

export type MedievalEuropeJewishMedicineNetworkLayer = {
  kind: MedievalEuropeJewishMedicineLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type MedievalEuropeJewishMedicineNetworkCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: MedievalEuropeJewishMedicineNetworkLayer[];
};

export type MedievalEuropeJewishMedicineNetworkData = {
  schemaVersion: number;
  researchSlug: string;
  cases: MedievalEuropeJewishMedicineNetworkCase[];
};

export const medievalEuropeJewishMedicineNetworks = medievalEuropeJewishMedicineNetworkData as MedievalEuropeJewishMedicineNetworkData;
