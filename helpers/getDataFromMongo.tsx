import {
  Asset,
  AssetFromDb,
  TransformedAssetsFromDb,
} from "../types/assetType";
import connectToMongo from "./connectToMongo";

export const getDataFromMongo = async () => {
  const db = await connectToMongo();
  const idArray = [] as Asset[];
  const detailedAssetsCollection = db.collection("detailedAssets");
  const getAsset = async (assetId: string) => {
    const response = await fetch(
      `https://rest.coinapi.io/v1/assets/${assetId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-CoinAPI-Key": "EB201340-DF56-494E-BA6F-9524985EA13C",
        },
      }
    );
    const data = await response.json();
    idArray.push(data);
  };
  const detailedAssets = (await detailedAssetsCollection
    .find({})
    .toArray()) as AssetFromDb[];
  detailedAssets.forEach((asset) => getAsset(asset.asset_id));

  const correctAsset = detailedAssets.map((asset) => {
    return {
      ...asset,
      _id: asset._id.toString(),
    };
  });

  return correctAsset as TransformedAssetsFromDb[];
};
