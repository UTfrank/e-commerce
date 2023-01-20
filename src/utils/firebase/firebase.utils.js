// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM5drvH75GaGclcmQBsScI1JrELHC0Y2E",
  authDomain: "e-commerce-db-94416.firebaseapp.com",
  projectId: "e-commerce-db-94416",
  storageBucket: "e-commerce-db-94416.appspot.com",
  messagingSenderId: "71238463581",
  appId: "1:71238463581:web:ff38c5175426fefefa9db4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Provider for google authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// helper function to sign in with google
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

// create user in firebase function
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

// helper function for sign up
export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// helper function for sign in
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// helper function for sign out
export const signOutUser = async () => await signOut(auth);

// helper function to listen for changes in authentication
export const onAuthStateChangedListener = callback => onAuthStateChanged(auth, callback);