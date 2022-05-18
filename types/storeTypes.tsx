import { Asset, BoughtAsset } from "./assetType";

export type InitialState = {
  fetchedAssets: Asset[];
  boughtAssets: BoughtAsset[];
};
