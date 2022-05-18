import { BoughtAsset } from "../types/assetType";
import connectToMongo from "./connectToMongo";

const getBoughtAssets = async () => {
  const db = await connectToMongo();
  const boughtAssets = db.collection("boughtAssets");

  const boughtAssetsList = (await boughtAssets
    .find({})
    .toArray()) as BoughtAsset[];

  const correctBoughtAssetsList = boughtAssetsList.map((asset) => {
    return { ...asset, _id: asset._id!.toString() };
  });
  return correctBoughtAssetsList;
};

export default getBoughtAssets;
