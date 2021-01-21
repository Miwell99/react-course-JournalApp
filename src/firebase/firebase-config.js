
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDqLqy1DyrCOOjD6ySELCHK-9OwDcY90lM",
    authDomain: "react-course-journalapp.firebaseapp.com",
    projectId: "react-course-journalapp",
    storageBucket: "react-course-journalapp.appspot.com",
    messagingSenderId: "729735064708",
    appId: "1:729735064708:web:5e5e4454db288af78be6d1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();  // Validate Google Auth.

export {
    db,
    googleAuthProvider,
    firebase
}