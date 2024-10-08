// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMeowb4GYEtQoq2SGy4X1V4UPbofYkMjw",
  authDomain: "lynchs-aac2d.firebaseapp.com",
  projectId: "lynchs-aac2d",
  storageBucket: "lynchs-aac2d.appspot.com",
  messagingSenderId: "189753993099",
  appId: "1:189753993099:web:a34548b769b35ab74f318e",
  measurementId: "G-B632525FGP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
