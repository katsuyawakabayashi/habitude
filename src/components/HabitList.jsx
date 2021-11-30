import React, { useEffect, useState } from "react";
import Habit from "./Habit";
import SearchBar from "./SearchBar";
import db, { useAuth } from "../firebase";
import { onSnapshot, collection } from "@firebase/firestore";

const HabitList = ({
  handleMainSection,
  handleHabitName,
  handleHabitData,
  handleHabitId,
}) => {
  // this initial state will be replaced with API request
  const [habits, setHabits] = useState([]);

  const currentUser = useAuth();
  var currentUserPath;
  if (currentUser) {
    console.log("uid: ", currentUser.uid);
    currentUserPath = currentUser.uid;
    console.log("currentUser: ", currentUser);
  }

  useEffect(() => {
    if (currentUser == null) {
      // signed out/not ready
      // if habits is already empty, don't trigger a rerender
      setHabits(habits.length === 0 ? habits : []);
      return;
    }

    const userDocRef = collection(db, `users/${currentUser.uid}/user_habits`);
    return onSnapshot(userDocRef, (snapshot) => {
      const newHabits = snapshot.docs.map((doc) => doc.data());
      setHabits(newHabits); // consider using snapshot.docChanges() in later renders for efficiency
      console.log("New version of habits found!", newHabits); // note: habits isn't updated straight away, so we use the array passed to setHabits
      console.log("New version of currentUser: ", currentUser);
    });
  }, [currentUser]); // rerun if currentUser changes (e.g. validated, signed in/out)

  const [searchString, setSearchString] = useState("");

  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  let searchedHabits;
  console.log(searchString);
  if (searchString != "") {
    searchedHabits = habits.filter((task) =>
      task.name.toLowerCase().includes(searchString.toLowerCase())
    );
  } else {
    searchedHabits = habits;
  }

  return (
    <div style={{ height: "86vh" }} className="flex flex-col">
      <SearchBar handleSearch={handleSearch} />

      <div className="flex flex-col pb-10 overflow-scroll">
        {searchedHabits.map((h) => (
          <Habit
            habitName={h.name}
            habitData={h.calendarData}
            habitId={h.id}
            handleMainSection={handleMainSection}
            handleHabitName={handleHabitName}
            handleHabitData={handleHabitData}
            handleHabitId={handleHabitId}
            key={h.id}
          />
        ))}
      </div>
    </div>
  );
};

export default HabitList;
