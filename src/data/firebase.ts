// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV0ytgNqaHqWBoxxJFB70xMG4tpac0Qbs",
  authDomain: "entendai-app.firebaseapp.com",
  projectId: "entendai-app",
  storageBucket: "entendai-app.appspot.com",
  messagingSenderId: "796108069780",
  appId: "1:796108069780:web:dfbfb034e32acda342cd81",
  measurementId: "G-38RD0RNX3V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
