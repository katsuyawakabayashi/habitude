import React, { useState } from "react";

const Habit = ({ habitName, habitData, handleMainSection, handleHabitName, handleHabitData, habitId, handleHabitId }) => {
  const handleClick = () => {
    handleMainSection("habit");
    handleHabitName(habitName);
    handleHabitData(habitData);
    handleHabitId(habitId);
  }
  return (
    <button onClick={() => handleClick() }>
      <div className="text-sm bg-gray-900 dark:bg-gray-800 dark:text-gray-300 bg-opacity-10 hover:bg-gray-400 p-1 m-2 rounded-lg">
        {habitName}
      </div>
    </button>
  );
};

export default Habit;
