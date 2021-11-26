import React from "react";

const NewHabitContent = ({}) => {
  return (
    <div className="w-screen bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
      <div className="flex flex-col m-5 space-y-4">
        <div className="text-3xl">
        Everyday, I will: <input className="w-80 rounded-lg bg-gray-300 text-black p-2"></input>
        </div>
        <button className="w-40 p-2 rounded-lg bg-green-600 dark:text-gray-300 text-white"
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
