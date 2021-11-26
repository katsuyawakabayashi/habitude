import React from "react";
import HabitPanel from "../components/HabitPanel";
import SideSection from "../components/SideSection";
import MainSection from "../components/MainSection";
import { TitleLogo } from "../components/TitleLogo";

const Home = ({ mainSection, setMainSection }) => {
  return (
    <div className="h-screen flex">
      <SideSection>
        <TitleLogo setMainSection={setMainSection} />
        <HabitPanel mainSection={mainSection} setMainSection={setMainSection} />
      </SideSection>
      <MainSection mainSection={mainSection} setMainSection={setMainSection} />
    </div>
  );
};

export default Home;
