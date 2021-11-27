import React, { useEffect, useState } from "react";
import Habit from "./Habit";
import SearchBar from "./SearchBar";
import db, { useAuth } from "../firebase";
import { onSnapshot, collection } from "@firebase/firestore";

const HabitList = ({ mainSection, handleMainSection }) => {
  // this initial state will be replaced with API request
  const [habits, setHabits] = useState([
    // { name: "Sample habit 1", id: 1 },
    // { name: "Sample habit 2", id: 2 },
    // { name: "Sample habit 3", id: 3 },
  ]);

  const currentUser = useAuth();
  if(currentUser) {
    console.log('uid: ', currentUser.uid)
    const currentUserPath=currentUser.uid;
  }
    
  useEffect(
    () => 
    onSnapshot(collection(db, "users/${currentUserPath}/user_habits"), (snapshot) => 
      setHabits(snapshot.docs.map((doc) => doc.data()))
      //setHabits(snapshot.docs.map((doc) => doc.data())); // make sure that setHabits works and sets snapshot to habits
      //console.log(habits); // habits should have the habits from firebase, not the initial habits we hardcoded
        ), 
      []
    );


  const [searchString, setSearchString] = useState("");

  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  let searchedHabits;
  console.log(searchString)
  if (searchString != ""){
    searchedHabits = habits.filter(task => task.name.toLowerCase().includes(searchString.toLowerCase())
    );
  }
  else{
    searchedHabits = habits;
  }

  return (
    <div className="flex flex-col">
      <SearchBar 
        handleSearch={handleSearch}
      />

      {searchedHabits.map((h) => (
        <Habit
          habitName={h.habit_name}
          handleMainSection={handleMainSection}
          key={h.id}
        />
      ))}
    </div>
  );
};

export default HabitList;
