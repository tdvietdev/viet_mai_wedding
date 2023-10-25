// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8H6V-r0JCmUk7sFFtnkeyHtrJXmodNmE",
  authDomain: "agile-earth-200601.firebaseapp.com",
  databaseURL: "https://agile-earth-200601-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agile-earth-200601",
  storageBucket: "agile-earth-200601.appspot.com",
  messagingSenderId: "459612670917",
  appId: "1:459612670917:web:1384e0fbd6ca0d51b659ac",
  measurementId: "G-PTWPRXB0XF"
};

// Initialize Firebase
// const firebase = initializeApp(firebaseConfig);
// export default firebase.database()

firebase.initializeApp(firebaseConfig);

export default firebase.database();