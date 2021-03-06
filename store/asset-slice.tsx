import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitialState } from "../types/storeTypes";

const INITIAL_VALUE: InitialState = {
  fetchedAssets: [],
  boughtAssets: [],
  balance: "",
  historicalCapital: [],
};

const AssetSlice = createSlice({
  initialState: INITIAL_VALUE,
  name: "asset-slice",
  reducers: {
    setFetchedAssets(state, action) {
      state.fetchedAssets = action.payload;
    },
    setBoughtAssets(state, action) {
      state.boughtAssets = action.payload;
    },
    setBalance(state, action) {
      state.balance = action.payload;
    },
    setHistoricalCapital(state, action) {
      state.historicalCapital.push(...action.payload);
    },
    deleteFetchedAsset(state, action: PayloadAction<string>) {
      const filteredAssetsList = state.fetchedAssets.filter(
        (asset) => asset.asset_id !== action.payload
      );
      state.fetchedAssets = filteredAssetsList;
    },
  },
});
const AssetReducer = AssetSlice.reducer;
export const AssetAction = AssetSlice.actions;
export default AssetReducer;
