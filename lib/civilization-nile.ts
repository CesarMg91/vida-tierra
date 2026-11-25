import nileData from "../content/civilization-nile.json";

export type NileArchive = {
  id: string;
  label: string;
  window: string;
  sites: string[];
  archive: string;
  inference: string;
  limit: string;
  adversary: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type NileData = {
  schemaVersion: number;
  researchSlug: string;
  archives: NileArchive[];
};

export const nileValley = nileData as NileData;
