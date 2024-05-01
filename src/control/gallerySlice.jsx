import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, get, ref } from "firebase/database";
import { firebaseConfig } from "../firebaseConfig";

export const fetchGalleryItems = createAsyncThunk(
  "gallery/fetchGalleryItems",
  async () => {
    const db = getDatabase();
    const galleryItemsRef = ref(db, "/galleryItems");
    const snapshot = await get(galleryItemsRef);
    return snapshot.val();
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
