import React from "react";
import HabitList from "./HabitList";

const HabitPanel = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex-auto text-2xl ">my habits</div>
        <button className="flex-auto" onClick={() => console.log("Add habit")}>
          +
        </button>
      </div>
      <HabitList />
    </>
  );
};

export default HabitPanel;
