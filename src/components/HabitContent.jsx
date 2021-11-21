import React from "react";
import HabitHeatmap from "./HabitHeatmap";

const HabitContent = ({ habitName }) => {
  return (
    <div>
      <div className="flex flex-row space-x-10">
        <div>
            <div>today is: SAMPLE DATE</div>
            <div>{habitName}</div>
            <div>longest streak: 25 days</div>
            <div>start date: 1/11/11</div>
            <div>notes:</div>
            <input className="bg-gray-200"></input>
        </div>
        <div className="flex flex-col space-y-5">
          <div><HabitHeatmap /></div>
          <button onClick={() => console.log("clicked")}>
            <div className="underline">delete</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitContent;
