import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        assets: 
    }
})

export type RootState = ReturnType<typeof store.getState>