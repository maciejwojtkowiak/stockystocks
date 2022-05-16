import { NextApiRequest, NextApiResponse } from "next";
import connectToMongo from "../../helpers/connectToMongo";
// dodaj logike do kupowania krypto
const buyAsset = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const db = await connectToMongo();
  }
};

export default buyAsset;
