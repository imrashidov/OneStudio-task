import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHeroImg = createAsyncThunk("hero/fetchHeroImg", async () => {
  const response = await fetch("http://localhost:3000/heroImg");
  const data = await response.json();
  return data;
});

export const fetchHeroContact = createAsyncThunk(
  "hero/fetchHeroContact",
  async () => {
    const response = await fetch("http://localhost:3000/heroContact");
    const data = await response.json();
    return data;
  }
);

const heroSlice = createSlice({
  name: "hero",
  initialState: { heroImg: [], heroContact: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHeroImg.fulfilled, (state, action) => {
      state.heroImg = action.payload;
    });
    builder.addCase(fetchHeroContact.fulfilled, (state, action) => {
      state.heroContact = action.payload;
    });
  },
});

export default heroSlice.reducer;
