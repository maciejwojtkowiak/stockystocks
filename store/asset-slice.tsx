import { createSlice } from "@reduxjs/toolkit";
import { TransformedAssetsFromDb } from "../types/assetType";
import { InitialState } from "../types/storeTypes";

const INITIAL_VALUE: InitialState = {
  fetchedAssets: [],
  boughtAssets: [],
  balance: "",
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
  },
});
const AssetReducer = AssetSlice.reducer;
export const AssetAction = AssetSlice.actions;
export default AssetReducer;
