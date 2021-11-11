import React, { useEffect } from "react";
import HabitList from "./HabitList";

const HabitPanel = ({ mainSection, setMainSection }) => {
  const handleMainSection = (e) => {
    setMainSection(e);
  };
  useEffect(() => {
    console.log("mainSection: ", mainSection);
  }, [mainSection]);
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex-auto text-2xl ">my habits</div>
        <button className="flex-auto" onClick={() => console.log("Add habit")}>
          +
        </button>
      </div>

      <HabitList handleMainSection={handleMainSection} />
    </>
  );
};

export default HabitPanel;
