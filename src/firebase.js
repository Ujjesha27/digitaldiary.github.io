import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";



const firebaseConfig = {

  
    apiKey: "AIzaSyA4jn_IVyFWLq5deh-aMAoeyzYVU1BSshE",
    authDomain: "digitaldiary-3055b.firebaseapp.com",
    projectId: "digitaldiary-3055b",
    storageBucket: "digitaldiary-3055b.appspot.com",
    messagingSenderId: "507460650787",
    appId: "1:507460650787:web:f7ed4ba88a6d7e7a30ee96",
    measurementId: "G-DW9B3T4XGV"

  };

  firebase.initializeApp(firebaseConfig);

  
export default firebase;
