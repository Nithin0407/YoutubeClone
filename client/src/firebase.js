import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALC8BXXwJoNRHYpwdb16k3UKO0P3_PXME",
  authDomain: "clone-bc756.firebaseapp.com",
  projectId: "clone-bc756",
  storageBucket: "clone-bc756.appspot.com",
  messagingSenderId: "1038266616269",
  appId: "1:1038266616269:web:38543ca7e16738acccdc84",
  measurementId: "G-TRP3BWVKWQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
