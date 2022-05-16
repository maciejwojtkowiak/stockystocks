import { configureStore } from "@reduxjs/toolkit";
import AssetReducer from "./asset-slice";

const store = configureStore({
  reducer: {
    assets: AssetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
