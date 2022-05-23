import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { Asset } from "../../types/assetType";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const addedAsset = req.body as Asset;
    const client = await MongoClient.connect(
      "mongodb+srv://maciejtest:ipT4zxXWbIF4sCqG@cluster0.vv1w4.mongodb.net/stockystocks?retryWrites=true&w=majority"
    );

    const db = client.db();
    const assetId = {
      asset_id: addedAsset,
    };

    const detailedAssetsCollection = db.collection("detailedAssets");

    detailedAssetsCollection.insertOne(assetId);
  }

  if (req.method === "POST") {
    const assetIdForDeletion = req.body;
  }
};

export default handler;
