import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNavbarRoutes = createAsyncThunk(
  "navbar/fetchNavbarRoutes",
  async () => {
    const response = await fetch("http://localhost:3000/navbarRoutes");
    const data = await response.json();
    return data;
  }
);

export const fetchNavbarContact = createAsyncThunk(
  "navbar/fetchNavbarContact",
  async () => {
    const response = await fetch("http://localhost:3000/navbarContact");
    const data = await response.json();
    return data;
  }
);

const navbarSlice = createSlice({
  name: "navbar",
  initialState: { navbarRoutes: [], navbarContact: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNavbarRoutes.fulfilled, (state, action) => {
      state.navbarRoutes = action.payload;
    });
    builder.addCase(fetchNavbarContact.fulfilled, (state, action) => {
      state.navbarContact = action.payload;
    });
  },
});

export default navbarSlice.reducer;
