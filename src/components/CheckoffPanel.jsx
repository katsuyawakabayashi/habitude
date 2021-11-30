import React from "react";
import CheckoffList from "./CheckoffList";

const CheckoffPanel = ({ setHabitData }) => {
  return (
    <div className="max-w-xl">
      <div className="p-4 rounded-lg bg-green-600 dark:text-gray-300 text-white">
        <div className="font-serif text-2xl font-medium">
          Track your progress
        </div>
      </div>
      <CheckoffList setHabitData={setHabitData} />
    </div>
  );
};

export default CheckoffPanel;
