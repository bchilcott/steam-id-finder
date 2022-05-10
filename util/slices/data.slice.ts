import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CollectionData } from "../types/SteamData";

const initialState: CollectionData = {
  title: "",
  description: "",
  previewUrl: "",
  children: [""],
};

export const dataSlice = createSlice({
  name: "data",
  initialState: null as CollectionData,
  reducers: {
    setData: (_state, action: PayloadAction<CollectionData>) => {
      return action.payload ? { ...action.payload } : null;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
