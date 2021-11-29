import React, { useState, useEffect } from "react";
import Checkoff from "./Checkoff";
import db, { useAuth } from "../firebase";
import { onSnapshot, collection } from "@firebase/firestore";

const getCurrentDate = () => {
  const d = new Date();
  var month = parseInt(d.getMonth()) + 1;
  var today = d.getFullYear() + '-' + month + '-' + d.getDate();
  return today;
}

const CheckoffList = ({ setHabitData }) => {
    const today = getCurrentDate();
    const [habits, setHabits] = useState([]);

    const currentUser = useAuth();
    var currentUserPath;
    if(currentUser) {
      console.log('uid: ', currentUser.uid)
      currentUserPath=currentUser.uid;
      console.log('currentUserPathAgain: ', currentUserPath);
    }
      
    useEffect(() => {
      if (currentUser == null) { // signed out/not ready
        // if habits is already empty, don't trigger a rerender
        setHabits(habits.length === 0 ? habits : []);
        return;
      }
     
      const userDocRef = collection(db, `users/${currentUser.uid}/user_habits`);
      return onSnapshot(
        userDocRef,
        (snapshot) => {
          const newHabits = snapshot.docs.map((doc) => doc.data()); 
          setHabits(newHabits); // consider using snapshot.docChanges() in later renders for efficiency
          console.log("New version of habits found!", newHabits); // note: habits isn't updated straight away, so we use the array passed to setHabits
          console.log("New version of currentUser: ", currentUser);
        }
        
      );
    }, [currentUser]); // rerun if currentUser changes (e.g. validated, signed in/out)

  return (
    <div className="p-5 space-y-4 flex flex-col">
      {habits.map((h) => (
        <Checkoff
          habitName={h.name}
          currentDate={today}
          habitData={h.calendarData}
          setHabitData={setHabitData}
          key={h.id}
        />
      ))}
    </div>
  );
};

export default CheckoffList;
