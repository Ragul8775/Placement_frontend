// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfcbY2C5YPNWsOchC8l9lVz2AMrSKbCSI",
  authDomain: "placement-project-68b2c.firebaseapp.com",
  projectId: "placement-project-68b2c",
  storageBucket: "placement-project-68b2c.appspot.com",
  messagingSenderId: "115117851692",
  appId: "1:115117851692:web:447d3244573821a1c17d89",
  measurementId: "G-QCJZ4E6SF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);