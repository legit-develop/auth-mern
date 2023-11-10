// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-e1965.firebaseapp.com",
  projectId: "mern-auth-e1965",
  storageBucket: "mern-auth-e1965.appspot.com",
  messagingSenderId: "774299992197",
  appId: "1:774299992197:web:f1efe99e3ea88585ace9ec",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
