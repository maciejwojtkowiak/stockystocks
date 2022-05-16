import { TransformedAssetsFromDb } from "./assetType";

export type InitialState = {
  mongoAssets: TransformedAssetsFromDb[];
  message: string;
};
