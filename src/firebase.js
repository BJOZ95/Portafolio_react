import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA1l1QqZe6L8OcaLwsQ0iPFADybXBctYm0",
    authDomain: "portafolio-38267.firebaseapp.com",
    projectId: "portafolio-38267",
    storageBucket: "portafolio-38267.appspot.com",
    messagingSenderId: "401782343775",
    appId: "1:401782343775:web:6aefef7428f98317c633ea"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
