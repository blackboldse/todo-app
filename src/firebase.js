import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

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

// Get a list of cities from your database
// async function getCities(db) {
//   const todosCol = collection(db, "cities");
//   const todoSnapshot = await getDocs(todosCol);
//   const todoList = todoSnapshot.docs.map((doc) => doc.data());
//   return todoList;
// }

export default db;
