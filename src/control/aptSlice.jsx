import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAptItemsB = createAsyncThunk(
  "apt/fetchAptItemsB",
  async () => {
    const response = await fetch("http://localhost:3000/aptItemsB");
    const data = await response.json();
    return data;
  }
);

export const fetchAptItemsA = createAsyncThunk(
  "apt/fetchAptItemsA",
  async () => {
    const response = await fetch("http://localhost:3000/aptItemsA");
    const data = await response.json();
    return data;
  }
);

const aptSlice = createSlice({
  name: "apt",
  initialState: { aptItemsB: [], aptItemsA: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAptItemsB.fulfilled, (state, action) => {
      state.aptItemsB = action.payload;
    });
    builder.addCase(fetchAptItemsA.fulfilled, (state, action) => {
      state.aptItemsA = action.payload;
    });
  },
});

export default aptSlice.reducer;
