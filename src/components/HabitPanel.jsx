import React, { useEffect } from "react";
import HabitList from "./HabitList";

const HabitPanel = ({ mainSection, setMainSection, setHabitName, setHabitData , setHabitId}) => {
  const handleMainSection = (e) => {
    setMainSection(e);
  };
  const handleHabitName = (e) => {
    setHabitName(e);
  };
  const handleHabitData = (e) => {
    setHabitData(e);
  };
  const handleHabitId = (e) => {
    setHabitId(e);
  };
  useEffect(() => {
    console.log("mainSection: ", mainSection);
  }, [mainSection]);
  return (
    <div>
      <div className="flex justify-center items-center dark:text-gray-300">
        <div className="px-3 flex-auto text-2xl ">my habits</div>
        <button
          className="flex-auto"
          onClick={() => setMainSection("new-habit")}
        >
          +
        </button>
      </div>

      <HabitList handleMainSection={handleMainSection} handleHabitName={handleHabitName}
        handleHabitData={handleHabitData} handleHabitId={handleHabitId}/>
    </div>
  );
};

export default HabitPanel;
