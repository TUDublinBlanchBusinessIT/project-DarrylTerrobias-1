import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAIxcISoqB9BO-qMAQpSdJ9UpNucuc5qlA",
  authDomain: "pc-building-app-8d816.firebaseapp.com",
  dataBase: "https://pc-building-app-8d816.firebaseapp.com",
  projectId: "pc-building-app-8d816",
  storageBucket: "pc-building-app-8d816.firebasestorage.app",
  messagingSenderId: "558678220815",
  appId: "1:558678220815:web:f0dc909a61795b777f837a"
};

// Initialize Firebase

let app;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Avoid re-initializing if already initialized
}

// Correctly reference Firestore
const db = firebase.firestore();
const auth = firebase.auth();

export { firebase, db, auth};
