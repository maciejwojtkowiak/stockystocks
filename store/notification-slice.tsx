import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification } from "../types/notification";

const InitialState = {
  message: "",
  isShown: false,
};

const notificationSlice = createSlice({
  name: "notificationSlice",
  initialState: InitialState,
  reducers: {
    handleNotification(state, action: PayloadAction<Notification>) {
      state.isShown = action.payload.isShown;
      state.message = action.payload.message;
    },
  },
});

export const notificationAction = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
