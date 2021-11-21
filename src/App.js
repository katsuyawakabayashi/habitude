import { useState } from "react";
import "./App.css";
import AuthButton from "./components/AuthButton";
import HabitPanel from "./components/HabitPanel";
import MainSection from "./components/MainSection";
import SideSection from "./components/SideSection";
import { TitleLogo } from "./components/TitleLogo";
import AuthInput from "./components/AuthInput";
import AuthContainer from "./components/AuthContainer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [mainSection, setMainSection] = useState("home");

  return (
    <div className="h-screen flex items-center justify-center">
      {/* <SideSection>
        <TitleLogo setMainSection={setMainSection} />
        <HabitPanel mainSection={mainSection} setMainSection={setMainSection} />
      </SideSection>
      <MainSection mainSection={mainSection} setMainSection={setMainSection} /> */}
      {/* <Signup/> */}
      <Login/>
      
    </div>
  );
}

export default App;
