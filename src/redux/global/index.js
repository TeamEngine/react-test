import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locale: "en",
  dateLoaded: new Date().toLocaleDateString("en"),
};

const globalSlice = createSlice({
  name: "global",
  initialState,
});

export default globalSlice.reducer;
