import React from "react";

const HabitName = ({ habitName }) => {
    return (
        <div className="font-serif text-3xl dark:text-gray-300 font-medium">
            {habitName}
        </div>
    );
};

export default HabitName;
