import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, get, ref } from "firebase/database";
import { firebaseConfig } from "../firebaseConfig";

export const fetchNavbarRoutes = createAsyncThunk(
  "navbar/fetchNavbarRoutes",
  async () => {
    const db = getDatabase();
    const navbarRoutesRef = ref(db, "/navbarRoutes");
    const snapshot = await get(navbarRoutesRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return {};
    }
  }
);
console.log(import.meta.env.FIREBASE_API_KEY);
export const fetchNavbarContact = createAsyncThunk(
  "navbar/fetchNavbarContact",
  async () => {
    const db = getDatabase();
    const navbarContactRef = ref(db, "/navbarContact");
    const snapshot = await get(navbarContactRef);
    return snapshot.val();
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
