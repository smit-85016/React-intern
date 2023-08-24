import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA2FqQzQD1_zhQTCnbCzCHrpfQmmbuwBuk",
  authDomain: "intern-registration.firebaseapp.com",
  projectId: "intern-registration",
  storageBucket: "intern-registration.appspot.com",
  messagingSenderId: "21699752574",
  appId: "1:21699752574:web:d34751123d6ae083121e2f",
  measurementId: "G-FPFBD2EWPZ"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
