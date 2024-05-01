import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, get, ref } from "firebase/database";
import { firebaseConfig } from "../firebaseConfig";

export const fetchAptItemsB = createAsyncThunk(
  "apt/fetchAptItemsB",
  async () => {
    const db = getDatabase();
    const aptItemsBRef = ref(db, "/aptItemsB");
    const snapshot = await get(aptItemsBRef);
    return snapshot.val();
  }
);

export const fetchAptItemsA = createAsyncThunk(
  "apt/fetchAptItemsA",
  async () => {
    const db = getDatabase();
    const aptItemsARef = ref(db, "/aptItemsA");
    const snapshot = await get(aptItemsARef);
    return snapshot.val();
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
