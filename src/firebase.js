// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7hTsADUaaeXHJDphY6WNgaJS-e3yK4Lw",
  authDomain: "main-project-411c2.firebaseapp.com",
  projectId: "main-project-411c2",
  storageBucket: "main-project-411c2.appspot.com",
  messagingSenderId: "580369555487",
  appId: "1:580369555487:web:327f707f2644f82834752a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);