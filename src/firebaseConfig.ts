import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCE5U4xnY_7LHtnmsU9EdyDZTUaLDai00g",
  authDomain: "shoutouts-e69a5.firebaseapp.com",
  projectId: "shoutouts-e69a5",
  storageBucket: "shoutouts-e69a5.appspot.com",
  messagingSenderId: "185028102552",
  appId: "1:185028102552:web:0a073e0044e44adcb2c3ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export const signInWithGoogle = (): void => {
  signInWithPopup(auth, authProvider);
};

export const signOut = (): void => {
  auth.signOut();
};

export const storage = getStorage(app);
