import React from "react";

const HabitTodayButton = ({ setCurrentDate, getCurrentDate, writeDate }) => {
    return (
        <button className="p-2 px-4 rounded-lg bg-green-600 text-sm dark:text-gray-300 hover:bg-green-700 text-white"
            onClick={() => setCurrentDate(getCurrentDate())}>
          Today is {writeDate(getCurrentDate())} 
        </button>
    );
};

export default HabitTodayButton;