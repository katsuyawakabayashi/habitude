import React from "react";

const HabitDeleteButton = ({ setMainSection, deleteHabit }) => {
    const handleMainSection = (e) => {
        setMainSection(e);
      };
    return (
       <button className="p-2 px-4 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 text-xs text-black dark:text-white"
            onClick={() => {
                deleteHabit();
                handleMainSection("home");
            }}>
            delete
        </button>
    );
};

export default HabitDeleteButton;
