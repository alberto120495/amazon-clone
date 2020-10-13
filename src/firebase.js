import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHBjujCiQep400NSSGkEnHaf-547muUsM",
  authDomain: "clone-105a2.firebaseapp.com",
  databaseURL: "https://clone-105a2.firebaseio.com",
  projectId: "clone-105a2",
  storageBucket: "clone-105a2.appspot.com",
  messagingSenderId: "574630997855",
  appId: "1:574630997855:web:0a6c3c393eebca227250ea",
  measurementId: "G-G5S3N8XDYH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
