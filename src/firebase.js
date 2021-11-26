// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN30k6RivLOuz7KToi_uD8V5s5cmyD9RM",
  authDomain: "auth-development-62c42.firebaseapp.com",
  projectId: "auth-development-62c42",
  storageBucket: "auth-development-62c42.appspot.com",
  messagingSenderId: "414005826367",
  appId: "1:414005826367:web:7b987851735426ebedf98a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Custom Hook

// eventually write a logout function

export function useAuth() {
  const [currentUser, setCurrentUser ] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}




