// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "<API KEY>",
  authDomain: "<APP ID>.firebaseapp.com",
  projectId: "<APP ID>",
});

const db = firebase.firestore();

export { firebase, db };
