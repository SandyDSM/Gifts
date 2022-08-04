// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRc5jkewmQClwl1jQVD3B-B9FTooD5-Sw",
  authDomain: "ecom-gifts-8a3f3.firebaseapp.com",
  projectId: "ecom-gifts-8a3f3",
  storageBucket: "ecom-gifts-8a3f3.appspot.com",
  messagingSenderId: "912641217448",
  appId: "1:912641217448:web:eebac805f2f4317449439d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);