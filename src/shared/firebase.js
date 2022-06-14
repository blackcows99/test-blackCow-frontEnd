// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA4pBjGATiSjkP8RwKkGkpMxsRkB6T9Ev0",
  authDomain: "week-6-blackcow.firebaseapp.com",
  projectId: "week-6-blackcow",
  storageBucket: "week-6-blackcow.appspot.com",
  messagingSenderId: "725076474534",
  appId: "1:725076474534:web:dbc2a25cb4019bf04c1267",
  measurementId: "G-PSY9KMCL4F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
// export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;