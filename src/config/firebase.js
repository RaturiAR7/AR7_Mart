// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPjM1hmX8g40URX-9HHBZC0HQB2uk_dB8",
  authDomain: "ar7mart.firebaseapp.com",
  projectId: "ar7mart",
  storageBucket: "ar7mart.appspot.com",
  messagingSenderId: "136255619078",
  appId: "1:136255619078:web:1534badb7afb9443b08387",
  measurementId: "G-JT2FNLG39Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
