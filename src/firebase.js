// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCdXyET-2ZdzQULfWULw0_pC3Tdx-SQO3k",
  authDomain: "xii-6-df76c.firebaseapp.com",
  projectId: "xii-6-df76c",
  storageBucket: "xii-6-df76c.appspot.com",
  messagingSenderId: "561178736823",
  appId: "1:561178736823:web:025d59482770335459f532",
  measurementId: "G-KM35K93KT1"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();