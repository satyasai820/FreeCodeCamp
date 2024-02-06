import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC35pERPeIl2hw_pBNkEGhANq7-x-9_1qA",
  authDomain: "emailpasswordlogin-74e91.firebaseapp.com",
  projectId: "emailpasswordlogin-74e91",
  storageBucket: "emailpasswordlogin-74e91.appspot.com",
  messagingSenderId: "403905714651",
  appId: "1:403905714651:web:fe0079e3332855906feffe"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);