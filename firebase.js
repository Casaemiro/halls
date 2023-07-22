// Import the functions you need from the SDKs you
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCn-GMIQPxFxgPljdt9gs-Drguj3Pkucg",
  authDomain: "fir-tut-aa447.firebaseapp.com",
  projectId: "fir-tut-aa447",
  storageBucket: "fir-tut-aa447.appspot.com",
  messagingSenderId: "819252708326",
  appId: "1:819252708326:web:6420efdd55e3fc39c98c27",
  measurementId: "G-NPK6GZMT6P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
