import React from "react";
import HabitHeatmap from "./HabitHeatmap";

const HabitContent = ({ habitName }) => {
  return (
    <div className="w-screen bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
      <div className="flex flex-row space-x-10">
        <div className="space-y-16">
          <div className="space-y-4">
            <div>today is: SAMPLE DATE</div>
            <div className="text-3xl">{habitName}</div>
          </div>
          <div className="space-y-4">
            <div>longest streak: 25 days</div>
            <div>start date: 1/11/11</div>
            <div>notes:</div>
            <textarea className="bg-gray-300 h-40 text-black"></textarea>
          </div>
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
