import { NextApiRequest, NextApiResponse } from "next";

import connectToMongo from "../../../helpers/connectToMongo";
import { Asset, BoughtAsset } from "../../../types/assetType";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const boughtAsset = req.body as BoughtAsset;
    const db = await connectToMongo();
    const assetCollection = db.collection("boughtAssets");
    const isTheSameAssetsExist = (await assetCollection
      .find({ "asset.asset_id": boughtAsset.asset.asset_id })
      .toArray()) as BoughtAsset[];

    if (isTheSameAssetsExist.length > 0) {
      assetCollection.updateOne(
        { "asset.asset_id": boughtAsset.asset.asset_id },
        {
          $set: {
            quantity: isTheSameAssetsExist[0].quantity + boughtAsset.quantity,
          },
        }
      );
    } else {
      const boughtAssetModel = {
        asset: boughtAsset.asset,
        quantity: boughtAsset.quantity,
      };
      await assetCollection.insertOne(boughtAssetModel);
    }
    const neededMoneyToBuy = boughtAsset.quantity * boughtAsset.asset.price_usd;
    const moneyCollection = db.collection("money");
    const money = await moneyCollection.findOne({});
    moneyCollection.updateOne(money!, {
      $set: {
        money: money!.money - neededMoneyToBuy,
      },
    });
  }
};

export default handler;
