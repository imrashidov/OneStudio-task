import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const response = await fetch("http://localhost:3000/services");
    const data = await response.json();
    return data;
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState: { services: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.services = action.payload;
    });
  },
});

export default servicesSlice.reducer;
