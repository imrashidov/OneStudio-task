import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// apiKey: "AIzaSyCB97_LPfJYK2QfGZCKayluhtitfl5PVy4",
// authDomain: "onestudio-task.firebaseapp.com",
// databaseURL:
//   "https://onestudio-task-default-rtdb.europe-west1.firebasedatabase.app",
// projectId: "onestudio-task",
// storageBucket: "onestudio-task.appspot.com",
// messagingSenderId: "969553734666",
// appId: "1:969553734666:web:96fa3ed9a1e54cb42bc3f3",
// measurementId: "G-313DDSL4JP",
