import React from "react";

const NewHabitContent = ({}) => {
  return (
    <div className="flex flex-col ">
      Everyday, I will:<input className="bg-gray-200"></input>
      <button
        onClick={() => {
          console.log("API request here");
        }}
      >
        Add a habit
      </button>
    </div>
  );
};

export default NewHabitContent;
