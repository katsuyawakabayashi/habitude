import React from "react";

const PledgeHabit = () => {
  return (
    <div
      className="p-2 text-4xl hover:text-gray-600"
      onClick={() => {
        console.log("PledgeHabit Clicked");
      }}
    >
      +
    </div>
  );
};

export default PledgeHabit;
