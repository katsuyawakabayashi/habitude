import { useState } from "react";
import "./App.css";
import AuthButton from "./components/AuthButton";
import HabitPanel from "./components/HabitPanel";
import MainSection from "./components/MainSection";
import SideSection from "./components/SideSection";
import { TitleLogo } from "./components/TitleLogo";

function App() {
  const [mainSection, setMainSection] = useState("home");

  return (
    <div className="h-screen flex">
      <SideSection>
        <TitleLogo setMainSection={setMainSection} />
        <HabitPanel mainSection={mainSection} setMainSection={setMainSection} />
      </SideSection>
      <MainSection mainSection={mainSection} setMainSection={setMainSection} />
    </div>
  );
}

export default App;
