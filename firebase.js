// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// 🔧 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB6WttCaUoRmUUUbuPwNxdE5cswyJw-cmE",
  authDomain: "qwertynavyscratch.firebaseapp.com",
  projectId: "qwertynavyscratch",
  storageBucket: "qwertynavyscratch.firebasestorage.app",
  messagingSenderId: "979181533083",
  appId: "1:979181533083:web:93206f756795ef5096133e",
  measurementId: "G-Q2VBRMZC6K"
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// Export for use
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, doc, setDoc, getDoc, updateDoc };

