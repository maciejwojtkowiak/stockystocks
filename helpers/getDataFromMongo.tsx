import { AssetFromDb } from "../types/assetType";
import connectToMongo from "./connectToMongo";

export const getDataFromMongo = async () => {
  const db = await connectToMongo();
  const idArray = [] as string[];
  const detailedAssetsCollection = db.collection("detailedAssets");

  const detailedAssets = (await detailedAssetsCollection
    .find({})
    .toArray()) as AssetFromDb[];
  detailedAssets.forEach((asset) => idArray.push(asset.asset_id));

  return idArray;
};
