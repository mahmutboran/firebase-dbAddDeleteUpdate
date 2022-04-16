// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKdv2Pq1FqroZr4PVFtHSFewAKqwusYiQ",
  authDomain: "fire-base-contact-app.firebaseapp.com",
  databaseURL: "https://fire-base-contact-app-default-rtdb.firebaseio.com",
  projectId: "fire-base-contact-app",
  storageBucket: "fire-base-contact-app.appspot.com",
  messagingSenderId: "199300964992",
  appId: "1:199300964992:web:51086e0b465bab1b003c65"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase