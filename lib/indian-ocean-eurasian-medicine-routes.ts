import indianOceanEurasianMedicineRouteData from "../content/indian-ocean-eurasian-medicine-routes.json";

export const indianOceanEurasianMedicineLayerKinds = [
  "trace",
  "identity",
  "itinerary",
  "mediation",
  "reception",
  "reach",
] as const;

export type IndianOceanEurasianMedicineLayerKind = (typeof indianOceanEurasianMedicineLayerKinds)[number];

export type IndianOceanEurasianMedicineRouteLayer = {
  kind: IndianOceanEurasianMedicineLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type IndianOceanEurasianMedicineRouteCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: IndianOceanEurasianMedicineRouteLayer[];
};

export type IndianOceanEurasianMedicineRouteData = {
  schemaVersion: number;
  researchSlug: string;
  cases: IndianOceanEurasianMedicineRouteCase[];
};

export const indianOceanEurasianMedicineRoutes = indianOceanEurasianMedicineRouteData as IndianOceanEurasianMedicineRouteData;
