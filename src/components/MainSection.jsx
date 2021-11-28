import React from "react";
import HabitContent from "./HabitContent";
import HomeContent from "./HomeContent";
import NewHabitContent from "./NewHabitContent";

const MainSection = ({ mainSection, setMainSection, habitName, habitData, setHabitData }) => {
  if (mainSection === "home") {
    return <HomeContent />;
  } else if (mainSection === "new-habit") {
    return <NewHabitContent setMainSection={setMainSection}/>;
  } else {
    // need logic to validate if habit exists in habits here
    return <HabitContent setMainSection={setMainSection} 
            habitName={habitName} habitData={habitData} setHabitData={setHabitData} />;
  }
};

export default MainSection;
