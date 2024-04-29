import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAboutInfo = createAsyncThunk(
  "about/fetchAboutInfo",
  async () => {
    const response = await fetch("http://localhost:3000/aboutInfo");
    const data = await response.json();
    return data;
  }
);

const aboutSlice = createSlice({
  name: "about",
  initialState: { aboutInfo: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAboutInfo.fulfilled, (state, action) => {
      state.aboutInfo = action.payload;
    });
  },
});

export default aboutSlice.reducer;
