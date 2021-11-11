import React, { useState } from "react";
import Habit from "./Habit";

const HabitList = () => {
  // this initial state will be replaced with API request
  const [habits, setHabits] = useState([
    "Sample task 1",
    "Smple task 2",
    "Smple task 3",
  ]);
  return (
    <div className="flex flex-col">
      {habits.map((habit) => (
        <Habit habit={habit} />
      ))}
    </div>
  );
};

export default HabitList;
