// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC16A721lTfHUq4j7idCine_D4RmAn13Zw",
  authDomain: "myfirstapp-f9d61.firebaseapp.com",
  projectId: "myfirstapp-f9d61",
  storageBucket: "myfirstapp-f9d61.appspot.com",
  messagingSenderId: "832096801885",
  appId: "1:832096801885:web:1c9de3c00d534b28dea9b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
