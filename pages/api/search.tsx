import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const addCryptoToFavorites = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const addedAsset = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://maciejtest:ipT4zxXWbIF4sCqG@cluster0.vv1w4.mongodb.net/stockystocks?retryWrites=true&w=majority"
    );

    const db = client.db();

    const detailedAssetsCollection = db.collection("detailedAssets");
    detailedAssetsCollection.insertOne(addedAsset);
  }
};

export default addCryptoToFavorites;
