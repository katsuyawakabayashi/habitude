import React from "react";
import Habit from "./Habit";

//need to rename Habits to HabitList
const Habits = () => {
  return (
    <div className="text-2xl">
      my habits
      <Habit/>
      <div className = "text-lg">
        {'>'} Sample Habit
      </div>
    </div>
  );
};

export default Habits;
