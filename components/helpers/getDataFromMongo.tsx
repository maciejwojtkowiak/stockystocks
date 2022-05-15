import { MongoClient } from "mongodb";
import { AssetFromDb } from "../../types/assetType";

export const getDataFromMongo = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://maciejtest:ipT4zxXWbIF4sCqG@cluster0.vv1w4.mongodb.net/stockystocks?retryWrites=true&w=majority"
  );

  const db = client.db();

  const detailedAssetsCollection = db.collection("detailedAssets");
  const detailedAssets = (await detailedAssetsCollection
    .find({})
    .toArray()) as AssetFromDb[];
  const correctAsset = detailedAssets.map((asset) => {
    return {
      asset: {
        ...asset,
        _id: asset._id.toString(),
      },
    };
  });
  return correctAsset;
};
