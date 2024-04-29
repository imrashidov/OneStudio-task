import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./src/control/heroSlice";
import navbarReducer from "./src/control/navbarSlice";
import aboutReducer from "./src/control/aboutSlice";
import aptReducer from "./src/control/aptSlice";
import modalReducer from "./src/control/modalSlice";
import servicesReducer from "./src/control/servicesSlice";
import galleryReducer from "./src/control/gallerySlice";

export default configureStore({
  reducer: {
    hero: heroReducer,
    navbar: navbarReducer,
    about: aboutReducer,
    apt: aptReducer,
    modal: modalReducer,
    services: servicesReducer,
    gallery: galleryReducer,
  },
});
