// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALGocdgq5qQDkMsIJFoC6sCChrrRpy4n4",
  authDomain: "socialmedia-18ea4.firebaseapp.com",
  projectId: "socialmedia-18ea4",
  storageBucket: "socialmedia-18ea4.appspot.com",
  messagingSenderId: "807133073706",
  appId: "1:807133073706:web:f1fdaa355e40bf51f14e53",
  measurementId: "G-6DTEMG0X67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()