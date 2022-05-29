import { ObjectId } from "mongodb";

export type Asset = {
  asset_id: string;
  name: string;
  type_is_crypto: number;
  data_start: string;
  data_end: string;
  data_quote_start: string;
  data_quote_end: string;
  data_orderbook_start: string;
  data_orderbook_end: string;
  data_trade_start: string;
  data_trade_end: string;
  data_symbols_count: number;
  volume_1hrs_usd: number;
  volume_1day_usd: number;
  volume_1mth_usd: number;
  price_usd: number;
  imgLink: string;
};

export type AssetFromDb = {
  _id: ObjectId;
  asset_id: string;
};

export type TransformedAssetsFromDb = {
  _id: string;
  asset_id: string;
  name: string;
  type_is_crypto: number;
  data_start: string;
  data_end: string;
  data_quote_start: string;
  data_quote_end: string;
  data_orderbook_start: string;
  data_orderbook_end: string;
  data_trade_start: string;
  data_trade_end: string;
  data_symbols_count: number;
  volume_1hrs_usd: number;
  volume_1day_usd: number;
  volume_1mth_usd: number;
  price_usd: number;
};

export type BoughtAsset = {
  _id?: ObjectId | string;
  asset: Asset;
  quantity: number;
};
