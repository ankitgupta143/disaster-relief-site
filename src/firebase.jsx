// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "ADD YOUR",
  authDomain: "ADD YOUR",
  projectId: "ADD YOUR",
  storageBucket: "ADD YOUR",
  messagingSenderId: "ADD YOUR",
  appId: "ADD YOUR",
  measurementId: "ADD YOUR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
