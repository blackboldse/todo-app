import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWa0ohTMdheNaXxSuI5dtrI6OgvK_y9Uc",
  authDomain: "todo-app-cp-53452.firebaseapp.com",
  projectId: "todo-app-cp-53452",
  storageBucket: "todo-app-cp-53452.appspot.com",
  messagingSenderId: "650512245371",
  appId: "1:650512245371:web:31c0406d3fd483a1b838de",
  measurementId: "G-Z0NWYMD6G1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
