import { ObjectId } from "mongodb";

export interface BoughtAsset {
  quantity: number;
  id: number;
  val: number;
}

export type MoneyType = {
  _id: ObjectId;
  money: number;
};

export type HistoricalCapital = {
  historicalCapital: number[];
};
