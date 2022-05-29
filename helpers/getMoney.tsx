import connectToMongo from "./connectToMongo";
import { MoneyType } from "../types/moneyTypes";

const getMoney = async () => {
  const db = await connectToMongo();
  const moneyCol = (await db
    .collection("money")
    .find({}, { projection: { _id: 0 } })
    .toArray()) as MoneyType[];

  return moneyCol[0].money;
};

export default getMoney;
