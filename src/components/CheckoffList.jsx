import React from "react";
import Checkoff from "./Checkoff";

const CheckoffList = () => {
  return (
    <div>
      {/* perhaps create custom colors to get every percent */}
      <div className="p-4 rounded-lg bg-green-600 bg-opacity-50"> 
        <div className="text-sm">
          50%
        </div>
        <div className="font-serif text-2xl font-medium">
          Track your progress
        </div>
      </div>
      <div className="px-10 py-5 space-y-2">
        <Checkoff />
        <Checkoff />
        <Checkoff />
      </div>
    </div>
  );
};

export default CheckoffList;
