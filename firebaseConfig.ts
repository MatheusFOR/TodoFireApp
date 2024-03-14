// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9kYMd1DSq8E0xuN_j3zYzvRBkuEN9ylQ",
  authDomain: "to-do-list-47e30.firebaseapp.com",
  projectId: "to-do-list-47e30",
  storageBucket: "to-do-list-47e30.appspot.com",
  messagingSenderId: "398945236563",
  appId: "1:398945236563:web:fa0f8105755ce1501c38a6"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP); 