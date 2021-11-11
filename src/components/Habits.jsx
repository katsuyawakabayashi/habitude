import React from "react";
import Habit from "./Habit";
import PledgeHabit from "./PledgeHabit";

//need to rename Habits to HabitList
const HabitPanel = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex-auto text-2xl ">my habits</div>

        <PledgeHabit />
      </div>
      <Habit />
      <div className="text-lg">{">"} Sample Habit</div>
    </>
  );
};

export default HabitPanel;
