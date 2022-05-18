import { ObjectId } from "mongodb";

export interface boughtAsset {
  quantity: number;
  id: number;
  val: number;
}

export type MoneyType = {
  _id: ObjectId;
  money: string;
};
