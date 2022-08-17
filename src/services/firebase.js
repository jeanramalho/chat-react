import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDfWpKRoZtHxDk5vQ09iY1v7MN6AJag53s",
    authDomain: "chatapp-4db13.firebaseapp.com",
    projectId: "chatapp-4db13",
    storageBucket: "chatapp-4db13.appspot.com",
    messagingSenderId: "933761194934",
    appId: "1:933761194934:web:bf849b9cbaeb52e63cff17"
  }

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { db, auth, provider };