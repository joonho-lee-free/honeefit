import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBPgm3qmezJFiIGu8y3xmwl87w5fhkNMT4",
  authDomain: "honeefit-e0969.firebaseapp.com",
  projectId: "honeefit-e0969",
  storageBucket: "honeefit-e0969.appspot.com",
  messagingSenderId: "51972737109",
  appId: "1:51972737109:web:e7cf0cf7116635e52aacdc",
  measurementId: "G-PE15DW1640"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

let analytics;
isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app);
  }
});
