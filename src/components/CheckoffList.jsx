import React, { useState } from "react";
import Checkoff from "./Checkoff";

const CheckoffList = () => {
    // this initial state will be replaced with API request
    const [habits, setHabits] = useState([
      { name: "Sample habit 1", id: 1 },
      { name: "Sample habit 2", id: 2 },
      { name: "Sample habit 3", id: 3 },
    ]);
  return (
    <div className="p-5 space-y-4 flex flex-col">
      {habits.map((h) => (
        <Checkoff
          habitName={h.name}
          key={h.id}
        />
      ))}
    </div>
  );
};

export default CheckoffList;
