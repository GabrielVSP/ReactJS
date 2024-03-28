// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA13Ptcut3U3b0voTJGYRQ5zZWuLqMGOvg",
  authDomain: "chatapp-f9a69.firebaseapp.com",
  projectId: "chatapp-f9a69",
  storageBucket: "chatapp-f9a69.appspot.com",
  messagingSenderId: "502611269066",
  appId: "1:502611269066:web:27764d6dd474d77fc82b33",
  measurementId: "G-WFFH2KH45T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)