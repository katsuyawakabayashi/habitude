import React from "react";
import CheckoffList from "./CheckoffList";

const CheckOffPanel = () => {
  return (
    <div>
      {/* perhaps create custom colors to get every percent */}
      <div className="p-4 rounded-lg bg-green-600 bg-opacity-50">
        <div className="text-sm">50%</div>
        <div className="font-serif text-2xl font-medium">
          Track your progress
        </div>
      </div>
      <CheckoffList />
    </div>
  );
};

export default CheckOffPanel;
