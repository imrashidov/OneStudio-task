import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGalleryItems = createAsyncThunk(
  "gallery/fetchGalleryItems",
  async () => {
    const response = await fetch("http://localhost:3000/galleryItems");
    const data = await response.json();
    return data;
  }
);

const gallerySlice = createSlice({
  name: "gallery",
  initialState: { galleryItems: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGalleryItems.fulfilled, (state, action) => {
      state.galleryItems = action.payload;
    });
  },
});

export default gallerySlice.reducer;
