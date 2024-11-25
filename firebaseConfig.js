import firebase from "firebase";


// Your web app's Firebase configuration
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

if(!firebase.apps.length){
  alert("initialising");
  app = firebase.initializeApp(firebaseConfig);
}
else {
  alert("app length " + firebase.apps.length)
}

const db = firebase.firestore();

export {db};
