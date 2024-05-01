import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, get, ref } from "firebase/database";
import { firebaseConfig } from "../firebaseConfig";

export const fetchModalAptDetails = createAsyncThunk(
  "modal/fetchModalAptDetails",
  async () => {
    const db = getDatabase();
    const modalAptDetailsRef = ref(db, "/modalAptDetails");
    const snapshot = await get(modalAptDetailsRef);
    return snapshot.val();
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
