import React from "react";
import HabitContent from "./HabitContent";
import HomeContent from "./HomeContent";
import NewHabitContent from "./NewHabitContent";

const MainSection = ({ mainSection, setMainSection }) => {
  if (mainSection === "home") {
    return <HomeContent />;
  } else if (mainSection === "new-habit") {
    return <NewHabitContent />;
  } else {
    // need logic to validate if habit exists in habits here
    return <HabitContent habitName={mainSection} setMainSection={setMainSection} />;
  }
};

export default MainSection;
