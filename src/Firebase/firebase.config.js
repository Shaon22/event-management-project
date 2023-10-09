// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSGN6K5x31NMOxjHxaYWKFEeRMphebsm4",
  authDomain: "event-manage-project.firebaseapp.com",
  projectId: "event-manage-project",
  storageBucket: "event-manage-project.appspot.com",
  messagingSenderId: "1083518608804",
  appId: "1:1083518608804:web:c315d3fb57ca93a7e88d31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;