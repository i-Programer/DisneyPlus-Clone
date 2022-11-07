// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg4d-e9hm6IFm2e07_JcIxP0DsITyfWQg",
  authDomain: "disney-mern-app.firebaseapp.com",
  projectId: "disney-mern-app",
  storageBucket: "disney-mern-app.appspot.com",
  messagingSenderId: "1040466652497",
  appId: "1:1040466652497:web:61674f430452064b3af770",
  measurementId: "G-RS63LRE8R0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;