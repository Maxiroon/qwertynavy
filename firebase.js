// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteField
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6WttCaUoRmUUUbuPwNxdE5cswyJw-cmE",
  authDomain: "qwertynavyscratch.firebaseapp.com",
  projectId: "qwertynavyscratch",
  storageBucket: "qwertynavyscratch.firebasestorage.app",
  messagingSenderId: "979181533083",
  appId: "1:979181533083:web:93206f756795ef5096133e",
  measurementId: "G-Q2VBRMZC6K"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {
  app,
  db,
  auth,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteField,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
};
