import connectToMongo from "./connectToMongo";
import { MoneyType } from "../types/assetBuyAndSell";

const getMoney = async () => {
  const db = await connectToMongo();
  const moneyCol = (await db
    .collection("money")
    .find({}, { projection: { _id: 0 } })
    .toArray()) as MoneyType[];
  console.log(moneyCol);
  return moneyCol;
};

export default getMoney;
