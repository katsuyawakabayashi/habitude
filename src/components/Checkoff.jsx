import React from "react";
import "./Checkoff.css";

const Checkoff = ({ habitName, habitIndex, habitData, setHabitData }) => {
  const handleSetHabitData = () => {
    var g = habitData[habitIndex];
    g.completed = !g.completed;

    setHabitData([
      ...habitData.slice(0,habitIndex),
      g,
      ...habitData.slice(habitIndex+1)
    ]);
  }
  var habitCompleted = false;
  if (habitIndex != -1) { // error checking 
    habitCompleted = habitData[habitIndex].completed;
  }

  return (
    <div className="text-lg">
      <label className="container">
        <input type="checkbox" checked={habitCompleted} 
          onClick={() => {
              if (habitIndex != -1) handleSetHabitData()
            }}/>
        <span className="text dark:text-gray-300">{habitName}</span>
        <span className="checkmark"></span>
      </label>
    </div>
    
  );
};

export default Checkoff;
