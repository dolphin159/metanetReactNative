// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWVQt3KkdH9ekAb8ANIjqQjpDi8CYB7cg",
    authDomain: "instargram-clone-a77e6.firebaseapp.com",
    projectId: "instargram-clone-a77e6",
    storageBucket: "instargram-clone-a77e6.appspot.com",
    messagingSenderId: "10123743724",
    appId: "1:10123743724:web:4cfa64244ff0ff4b8a30c9",
    measurementId: "G-4V875R2FV3"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
// const analytics = getAnalytics(app);
firebase.firestore().settings({ experimentalForceLongPolling: true})
const db = firebase.firestore()

export { firebase, db }