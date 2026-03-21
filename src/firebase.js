// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAInWCCC6M3qZ4Zqjjg4i1Xg9vphsgjRm8",
  authDomain: "yt-clone-a95c4.firebaseapp.com",
  projectId: "yt-clone-a95c4",
  storageBucket: "yt-clone-a95c4.firebasestorage.app",
  messagingSenderId: "457926040299",
  appId: "1:457926040299:web:5c9b2cf6e30fbb4a69bcae",
  measurementId: "G-J1S75XJN80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()