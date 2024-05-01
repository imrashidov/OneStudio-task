import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, get, ref } from "firebase/database";
import { firebaseConfig } from "../firebaseConfig";

export const fetchHeroImg = createAsyncThunk("hero/fetchHeroImg", async () => {
  const db = getDatabase();
  const heroImgRef = ref(db, "/heroImg");
  const snapshot = await get(heroImgRef);
  return snapshot.val();
});

export const fetchHeroContact = createAsyncThunk(
  "hero/fetchHeroContact",
  async () => {
    const db = getDatabase();
    const heroContactRef = ref(db, "/heroContact");
    const snapshot = await get(heroContactRef);
    return snapshot.val();
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
