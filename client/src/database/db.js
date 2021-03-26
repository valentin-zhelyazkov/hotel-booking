import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAJuQ6Vb1X5V4k64m9KKEbJuljiBYiWz5A",
    authDomain: "hotel-booking-a46d7.firebaseapp.com",
    projectId: "hotel-booking-a46d7",
    storageBucket: "hotel-booking-a46d7.appspot.com",
    messagingSenderId: "570915663608",
    appId: "1:570915663608:web:ce87eaad709cce3bfc950d"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase;
