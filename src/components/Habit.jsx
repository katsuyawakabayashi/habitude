import React, { useState } from "react";

const Habit = ({ habitName, handleMainSection }) => {
  return (
    <button onClick={() => handleMainSection(habitName)}>
      <div className="text-sm bg-gray-600 bg-opacity-10 hover:bg-gray-400 p-1 m-2 rounded-lg">
        {habitName}
      </div>
    </button>
  );
};

export default Habit;
