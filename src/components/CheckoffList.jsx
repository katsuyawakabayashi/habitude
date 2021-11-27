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
    <div className="px-10 py-5 space-y-2">
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
