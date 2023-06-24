import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApzeAusoX7p2hVsP1tUTMe51JuXLIcXE4",
  authDomain: "board-task-20ac5.firebaseapp.com",
  projectId: "board-task-20ac5",
  storageBucket: "board-task-20ac5.appspot.com",
  messagingSenderId: "22238688171",
  appId: "1:22238688171:web:59c953a715187ff25518ee"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const app = initializeApp(firebaseConfig)
const auth = firebase.auth();
// const auth = getAuth(app)
const Provider = new GoogleAuthProvider();

export { auth, db, Provider };