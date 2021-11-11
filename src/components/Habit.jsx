import React, { useState } from "react";

const Habit = ({ habit }) => {
  return (
    <button onClick={() => console.log("Habit clicked")}>
      <button className="text-sm bg-gray-600 bg-opacity-10 p-1 m-2 rounded-lg">
        {habit}
      </button>
    </button>
  );
};

export default Habit;
