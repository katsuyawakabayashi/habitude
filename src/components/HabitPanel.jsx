import React, { useEffect } from "react";
import HabitList from "./HabitList";
import SearchBar from "./SearchBar";

const HabitPanel = ({ mainSection, setMainSection }) => {
  const handleMainSection = (e) => {
    setMainSection(e);
  };
  useEffect(() => {
    console.log("mainSection: ", mainSection);
  }, [mainSection]);
  return (
    <div>
      <div className="flex justify-center items-center dark:text-gray-300">
        <div className="flex-auto text-2xl ">my habits</div>
        <button
          className="flex-auto"
          onClick={() => setMainSection("new-habit")}
        >
          +
        </button>
      </div>

      <HabitList handleMainSection={handleMainSection} />
    </div>
  );
};

export default HabitPanel;
