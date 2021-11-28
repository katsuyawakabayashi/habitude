import React from "react";
import HabitContent from "./HabitContent";
import HomeContent from "./HomeContent";
import NewHabitContent from "./NewHabitContent";

const MainSection = ({ mainSection, setMainSection, habitName, setHabitName, setHabitData }) => {
  if (mainSection === "home") {
    return <HomeContent />;
  } else if (mainSection === "new-habit") {
    return <NewHabitContent setMainSection={setMainSection}/>;
  } else {
    // need logic to validate if habit exists in habits here
    return <HabitContent mainSection={mainSection} setMainSection={setMainSection} habitName={habitName} />;
  }
};

export default MainSection;
