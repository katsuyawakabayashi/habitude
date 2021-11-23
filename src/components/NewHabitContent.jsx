import React from "react";

const NewHabitContent = ({}) => {
  return (
    <div className="w-screen bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
      <div className="flex flex-col">
        Everyday, I will:<input className="bg-gray-200 dark:bg-gray-300 w-40"></input>
        <button className="w-40"
          onClick={() => {
            console.log("API request here");
          }}
        >
          Add a habit
        </button>
      </div>
    </div>
  );
};

export default NewHabitContent;
