// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn_wUqA8me4grE73lCndMmrFAcAwXTh1c",
  authDomain: "prj-duykhanh.firebaseapp.com",
  projectId: "prj-duykhanh",
  storageBucket: "prj-duykhanh.appspot.com",
  messagingSenderId: "169634346541",
  appId: "1:169634346541:web:a0ec1496ee6bf1d203eaa4",
  measurementId: "G-1BHNJ9PQX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);