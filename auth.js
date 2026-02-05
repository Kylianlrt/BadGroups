// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYB2rp_zE1CGnT1JNjU5mcNxjlxhfG5fQ",
  authDomain: "site-login-840b5.firebaseapp.com",
  projectId: "site-login-840b5",
  storageBucket: "site-login-840b5.firebasestorage.app",
  messagingSenderId: "648800335406",
  appId: "1:648800335406:web:cc92d51f1482e6eda0d1bf",
  measurementId: "G-TE9G95JB7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
