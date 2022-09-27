// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWa0ohTMdheNaXxSuI5dtrI6OgvK_y9Uc",
  authDomain: "todo-app-cp-53452.firebaseapp.com",
  databaseURL: "https://todo-app-cp-53452.firebaseio.com",
  projectId: "todo-app-cp-53452",
  storageBucket: "todo-app-cp-53452.appspot.com",
  messagingSenderId: "650512245371",
  appId: "1:650512245371:web:31c0406d3fd483a1b838de",
  measurementId: "G-Z0NWYMD6G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);