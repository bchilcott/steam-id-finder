import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/data.slice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
