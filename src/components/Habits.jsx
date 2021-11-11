import React from "react";
import Habit from "./Habit";

//need to rename Habits to HabitList
const HabitPanel = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex-auto text-2xl ">my habits</div>
        <button className="flex-auto" onClick={() => console.log("Add habit")}>
          +
        </button>
      </div>
      <Habit />
      <div className="text-lg">{">"} Sample Habit</div>
    </>
  );
};

export default HabitPanel;
