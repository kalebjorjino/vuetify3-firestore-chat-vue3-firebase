// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBbopckv10hxZUfzNeEdGEexhx_smECY6M",
  authDomain: "vuetifychat-f3cfb.firebaseapp.com",
  projectId: "vuetifychat-f3cfb",
  storageBucket: "vuetifychat-f3cfb.appspot.com",
  messagingSenderId: "640805172307",
  appId: "1:640805172307:web:272024241137204f6542a6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };




