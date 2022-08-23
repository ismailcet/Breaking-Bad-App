import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./Slice/charactersSlice";
export const store = configureStore({
  reducer: { characters: charactersSlice },
});
