import React, { useState } from "react";
import Habit from "./Habit";
import SearchBar from "./SearchBar";

const HabitList = ({ mainSection, handleMainSection }) => {
  // this initial state will be replaced with API request
  const [habits, setHabits] = useState([
    { name: "Sample habit 1", id: 1 },
    { name: "Sample habit 2", id: 2 },
    { name: "Sample habit 3", id: 3 },
  ]);

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
};

export default HabitList;
