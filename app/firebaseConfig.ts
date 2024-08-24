// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLBnjhkzyTdtBF1uqXgulyOZqtfGmFCvM",
  authDomain: "lhs-ltd.firebaseapp.com",
  projectId: "lhs-ltd",
  storageBucket: "lhs-ltd.appspot.com",
  messagingSenderId: "467824396865",
  appId: "1:467824396865:web:9c8914395ba2aab32014c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()

