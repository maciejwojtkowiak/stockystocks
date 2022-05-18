import { NextApiRequest, NextApiResponse } from "next";

import connectToMongo from "../../helpers/connectToMongo";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const boughtAsset = req.body;
    const db = await connectToMongo();
    const assetCollection = db.collection("boughtAssets");
    await assetCollection.insertOne(boughtAsset);
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
