import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_API_KEY_Auth,
  databaseURL: import.meta.env.VITE_API_KEY_DB,
  projectId: import.meta.env.VITE_API_KEY_PROJECT_ID,
  storageBucket: import.meta.env.VITE_API_KEY_STORAGE,
  messagingSenderId: import.meta.env.VITE_API_KEY_MESSAGE,
  appId: import.meta.env.VITE_API_KEY_APPID,
  measurementId: import.meta.env.VITE_API_KEY_MEASUREID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
