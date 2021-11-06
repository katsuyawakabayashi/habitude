import React from "react";
import Habit from "./Habit";

const Habits = () => {
  const color = "gray";
  return (
    <div className="text-lg">
      My Habits
      <Habit color={color} />
    </div>
  );
};

export default Habits;
