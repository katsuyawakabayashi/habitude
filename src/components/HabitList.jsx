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
  var currentUserPath;
  if(currentUser) {
    console.log('uid: ', currentUser.uid)
    currentUserPath=currentUser.uid;
    console.log('currentUser: ', currentUser);
  }
    
  // useEffect(
  //   () => 
  //   onSnapshot(collection(db, `users/QTKVV0WOBMhkq7Q6TPpDsGvprXf1/user_habits`), (snapshot) => 
  //     setHabits(snapshot.docs.map((doc) => doc.data()))
  //     //setHabits(snapshot.docs.map((doc) => doc.data())); // make sure that setHabits works and sets snapshot to habits
  //     //console.log(habits); // habits should have the habits from firebase, not the initial habits we hardcoded
  //       ), 
  //     []
  //   );

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
          habitName={h.name}
          handleMainSection={handleMainSection}
          key={h.id}
        />
      ))}
      </div>
  );
}

export default HabitList;
