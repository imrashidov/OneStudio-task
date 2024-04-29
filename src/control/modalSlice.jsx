import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchModalAptDetails = createAsyncThunk(
  "modal/fetchModalAptDetails",
  async () => {
    const response = await fetch("http://localhost:3000/modalAptDetails");
    const data = await response.json();
    return data;
  }
);

const modalSlice = createSlice({
  name: "modal",
  initialState: { modalAptDetails: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchModalAptDetails.fulfilled, (state, action) => {
      state.modalAptDetails = action.payload;
    });
  },
});

export default modalSlice.reducer;
