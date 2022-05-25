import { NextApiRequest, NextApiResponse } from "next";
import connectToMongo from "../../../helpers/connectToMongo";
import { BoughtAsset } from "../../../types/assetType";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    {
      const boughtAsset = req.body as BoughtAsset;
      const db = await connectToMongo();
      const boughtAssetCollection = db.collection("boughtAssets");

      const assetToSell = await boughtAssetCollection
        .find({
          "asset.asset_id": boughtAsset.asset.asset_id,
        })
        .toArray();

      console.log(assetToSell);
    }
  }
};

export default handler;
