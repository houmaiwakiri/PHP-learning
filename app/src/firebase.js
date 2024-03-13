import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAHyoh_j4v45qTVRzMxoOKMSZK-U8eGWbE",
  authDomain: "php-leaning-doc.firebaseapp.com",
  projectId: "php-leaning-doc",
  storageBucket: "php-leaning-doc.appspot.com",
  messagingSenderId: "983499563185",
  appId: "1:983499563185:web:aead700786ce851e290290",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

