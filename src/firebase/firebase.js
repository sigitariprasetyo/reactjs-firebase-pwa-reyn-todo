
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtMr718hJkIVeMpNWXwA6PUsSpMlxGTHg",
  authDomain: "reyn-todo.firebaseapp.com",
  databaseURL: "https://reyn-todo.firebaseio.com",
  projectId: "reyn-todo",
  storageBucket: "reyn-todo.appspot.com",
  messagingSenderId: "59009122688",
  appId: "1:59009122688:web:e2147dfb8647199ebf4165",
  measurementId: "G-30MZW9ZPJ5"
};

export const Firebase = firebase.initializeApp(firebaseConfig);
const baseDb = Firebase.firestore();
export const db = baseDb;