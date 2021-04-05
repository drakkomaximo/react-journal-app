import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5GUhepswHl0qWz0detS3Wg3Ez3d2vzpQ",
  authDomain: "react-hook-curso-journal-app.firebaseapp.com",
  projectId: "react-hook-curso-journal-app",
  storageBucket: "react-hook-curso-journal-app.appspot.com",
  messagingSenderId: "466120224695",
  appId: "1:466120224695:web:5358d1988cec7b8e26c232",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}
