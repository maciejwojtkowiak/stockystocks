import { createSlice } from "@reduxjs/toolkit";
import { TransformedAssetsFromDb } from "../types/assetType";
import { InitialState } from "../types/storeTypes";

const INITIAL_VALUE: InitialState = {
  fetchedAssets: [],
};

const AssetSlice = createSlice({
  initialState: INITIAL_VALUE,
  name: "asset-slice",
  reducers: {
    setFetchedAssets(state, action) {
      state.fetchedAssets = action.payload;
    },
  },
});
const AssetReducer = AssetSlice.reducer;
export const AssetAction = AssetSlice.actions;
export default AssetReducer;
