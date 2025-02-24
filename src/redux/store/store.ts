import { configureStore } from "@reduxjs/toolkit";
import configuratorSlice from "../slices/configuratorSlice";
import formSlice from "../slices/formSlice";

export const store = configureStore({
  reducer: {
    albumConfiguration: configuratorSlice,
    formState: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
