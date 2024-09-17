// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8qWlBSnPreg8vUwcu-PnscLvJ6GiFSLo",
  authDomain: "alumni-6fe95.firebaseapp.com",
  projectId: "alumni-6fe95",
  storageBucket: "alumni-6fe95.appspot.com",
  messagingSenderId: "538897836897",
  appId: "1:538897836897:web:c2f7377b088269cf06f320",
  measurementId: "G-W87TBD2TJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);