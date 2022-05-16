import { createSlice } from "@reduxjs/toolkit";
import { TransformedAssetsFromDb } from "../types/assetType";
import { InitialState } from "../types/storeTypes";

const INITIAL_VALUE: InitialState = {
  mongoAssets: [],
  message: "",
};

const AssetSlice = createSlice({
  initialState: INITIAL_VALUE,
  name: "asset-slice",
  reducers: {
    setMessage(state, action) {
      const message = action.payload;
      state.message = message;
    },
  },
});
const AssetReducer = AssetSlice.reducer;
export const AssetAction = AssetSlice.actions;
export default AssetReducer;
