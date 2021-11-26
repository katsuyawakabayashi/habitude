import React from "react";
import CheckoffList from "./CheckoffList";

const CheckoffPanel = () => {
  return (
    <div>
      <div className="p-4 rounded-lg bg-green-600 dark:text-gray-300 text-white">
        <div className="font-serif text-2xl font-medium">
          Track your progress
        </div>
      </div>
      <CheckoffList />
    </div>
  );
};

export default CheckoffPanel;
