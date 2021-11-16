import React from "react";
import HabitHeatmap from "./HabitHeatmap";

const HabitContent = ({ habitName }) => {
  return (
    <div>
      Page for {habitName}
      <HabitHeatmap />
    </div>
  );
};

export default HabitContent;
