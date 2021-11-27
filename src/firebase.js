// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
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

// eventually write a logout function

export async function sendHabitToFirestore(uidPath, habitName) {
  const db = getFirestore();
  const habitId = uuidv4();
  const pathDocRef = doc(db, "users", uidPath, "user_habits", habitId);
  
  //initialize habitValues for the whole year
  const habitValues = []
  var d = new Date();
  var year = d.getFullYear();
  for (let month = 1; month <=12; month++) {
    for (let day = 1; day <= 31; day++) {
      var dateString = year.toString() + '-' + month.toString() + '-' + day.toString(); 
      var value = { date: dateString, completed: false };
      habitValues.push(value);
    }
  }

  await setDoc(pathDocRef, {
    name: habitName, 
    id: habitId,
    calendarData: habitValues,
  });
}

export function useAuth() {
  const [currentUser, setCurrentUser ] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

export default getFirestore();


