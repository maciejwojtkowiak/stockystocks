import { NextApiRequest, NextApiResponse } from "next";
import connectToMongo from "../../../helpers/connectToMongo";
import { MoneyType } from "../../../types/assetBuyAndSell";

import { BoughtAsset } from "../../../types/assetType";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    {
      const boughtAsset = req.body as BoughtAsset;
      const moneyFromSelling =
        boughtAsset.quantity * boughtAsset.asset.price_usd;
      const db = await connectToMongo();
      const boughtAssetCollection = db.collection("boughtAssets");
      const moneyCollection = db.collection("money");

      const assetToSell = (await boughtAssetCollection.findOne({
        "asset.asset_id": boughtAsset.asset.asset_id,
      })) as BoughtAsset;

      if (assetToSell.quantity === boughtAsset.quantity) {
        boughtAssetCollection.deleteOne({
          "asset.asset_id": boughtAsset.asset.asset_id,
        });
      }
      if (!(assetToSell.quantity === boughtAsset.quantity)) {
        boughtAssetCollection.updateOne(
          {
            "asset.asset_id": boughtAsset.asset.asset_id,
          },
          {
            $set: {
              quantity: boughtAsset.quantity - assetToSell.quantity,
            },
          }
        );
      }

      const money = await moneyCollection.findOne({});
      moneyCollection.updateOne(money!, {
        $set: {
          money: money!.money + moneyFromSelling,
        },
      });
    }
  }
};

export default handler;
