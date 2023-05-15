// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard-react-mui-sass.firebaseapp.com",
  projectId: "dashboard-react-mui-sass",
  storageBucket: "dashboard-react-mui-sass.appspot.com",
  messagingSenderId: "555109946920",
  appId: "1:555109946920:web:08cad6197fd579b782471d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
