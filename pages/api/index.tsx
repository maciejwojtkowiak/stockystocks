import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { Asset } from "../../types/assetType";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
  }

  if (req.method === "POST") {
    const assetIdForDeletion = req.body;
  }
};

export default handler;
