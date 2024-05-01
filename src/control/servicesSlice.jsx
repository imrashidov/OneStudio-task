import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, get, ref } from "firebase/database";
import { firebaseConfig } from "../firebaseConfig";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const db = getDatabase();
    const servicesRef = ref(db, "/services");
    const snapshot = await get(servicesRef);
    return snapshot.val();
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
