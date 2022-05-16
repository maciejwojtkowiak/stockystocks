import { AssetFromDb, TransformedAssetsFromDb } from "../types/assetType";
import connectToMongo from "./connectToMongo";

export const getDataFromMongo = async () => {
  const db = await connectToMongo();
  const detailedAssetsCollection = db.collection("detailedAssets");
  const detailedAssets = (await detailedAssetsCollection
    .find({})
    .toArray()) as AssetFromDb[];
  const correctAsset = detailedAssets.map((asset) => {
    return {
      ...asset,
      _id: asset._id.toString(),
    };
  });

  return correctAsset as TransformedAssetsFromDb[];
};
