import { configureStore } from "@reduxjs/toolkit";
import AssetReducer from "./asset-slice";
import { notificationReducer } from "./notification-slice";

const store = configureStore({
  reducer: {
    assets: AssetReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
