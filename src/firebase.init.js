// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDumhiU6B8jotNWhPS9oH2z-33tmE35lgo",
  authDomain: "food-good-7daa8.firebaseapp.com",
  projectId: "food-good-7daa8",
  storageBucket: "food-good-7daa8.appspot.com",
  messagingSenderId: "33350087202",
  appId: "1:33350087202:web:1a67b4b96e02384674107b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;