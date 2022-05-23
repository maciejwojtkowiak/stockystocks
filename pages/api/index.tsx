import { NextApiRequest, NextApiResponse } from "next";

import connectToMongo from "../../helpers/connectToMongo";
import { Asset, BoughtAsset } from "../../types/assetType";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const boughtAsset = req.body as BoughtAsset;
    const db = await connectToMongo();
    const assetCollection = db.collection("boughtAssets");
    const isTheSameAssetsExist = await assetCollection
      .find({ "asset.asset_id": boughtAsset.asset.asset_id })
      .toArray();
    console.log(isTheSameAssetsExist);
    const boughtAssetModel = {
      asset: boughtAsset.asset,
      quantity: boughtAsset.quantity,
    };
    await assetCollection.insertOne(boughtAssetModel);
  }

  if (req.method === "DELETE") {
    const assetIdForDeletion = req.body;
    const db = await connectToMongo();
    const assetCollection = db.collection("detailedAssets");
    await assetCollection.deleteOne({ asset_id: assetIdForDeletion });
    console.log("items deleted");
    console.log(assetCollection);
  }
};

export default handler;
