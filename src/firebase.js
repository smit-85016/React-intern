import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-byu23mQrNUbYH85Fhfp5mHpQtlH_EV8",
  authDomain: "react-2bd28.firebaseapp.com",
  projectId: "react-2bd28",
  storageBucket: "react-2bd28.appspot.com",
  messagingSenderId: "492192523261",
  appId: "1:492192523261:web:17c18ca9d0afdf23b86f94",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
