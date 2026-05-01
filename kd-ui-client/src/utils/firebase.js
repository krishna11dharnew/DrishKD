// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "kdai-6498f.firebaseapp.com",
  projectId: "kdai-6498f",
  storageBucket: "kdai-6498f.firebasestorage.app",
  messagingSenderId: "632117170665",
  appId: "1:632117170665:web:aba04e86c5df9f5ec7bb78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}