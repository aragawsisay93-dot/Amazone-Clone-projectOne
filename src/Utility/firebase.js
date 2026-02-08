import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFyxUzYCAloz2Lr6Gkyf8U6_xA-mHs2rQ",
  authDomain: "e-clone-projectone.firebaseapp.com",
  projectId: "e-clone-projectone",
  storageBucket: "e-clone-projectone.appspot.com",
  messagingSenderId: "221515353620",
  appId: "1:221515353620:web:221c23bdf0d5f5254be101",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
