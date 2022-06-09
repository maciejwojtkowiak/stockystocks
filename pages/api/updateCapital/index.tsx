import { NextApiRequest, NextApiResponse } from "next";
import updateCapital from "../../../helpers/updateCapital";
const handler = async (req: NextApiRequest) => {
  if (req.method === "POST") {
    updateCapital(req.body);
  }
};

export default handler;
