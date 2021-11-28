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
      
    useEffect(
      () => 
      onSnapshot(collection(db, `users/QTKVV0WOBMhkq7Q6TPpDsGvprXf1/user_habits`), (snapshot) => 
        setHabits(snapshot.docs.map((doc) => doc.data()))
        //setHabits(snapshot.docs.map((doc) => doc.data())); // make sure that setHabits works and sets snapshot to habits
        //console.log(habits); // habits should have the habits from firebase, not the initial habits we hardcoded
          ), 
        []
      );

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
