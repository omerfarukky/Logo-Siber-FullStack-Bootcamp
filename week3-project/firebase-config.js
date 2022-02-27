// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb0OAR9F5t6Ri3125qR8aDcWuVHPR5ECU",
  authDomain: "react-native-cc3e8.firebaseapp.com",
  projectId: "react-native-cc3e8",
  storageBucket: "react-native-cc3e8.appspot.com",
  messagingSenderId: "893423680086",
  appId: "1:893423680086:web:7f0bb25b68f262e1c759f7",
  measurementId: "G-7DPZFX3CG2",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const fireStore = firebase.firestore();
const auth = firebase.auth();
const background = firebase.functions();

export { fireStore, auth };
