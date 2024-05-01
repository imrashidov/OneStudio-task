import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, get, ref } from "firebase/database";
import { firebaseConfig } from "../firebaseConfig";

export const fetchAboutInfo = createAsyncThunk(
  "about/fetchAboutInfo",
  async () => {
    const db = getDatabase();
    const aboutInfoRef = ref(db, "/aboutInfo");
    const snapshot = await get(aboutInfoRef);
    return snapshot.val();
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
