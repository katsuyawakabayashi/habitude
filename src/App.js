import { useState } from "react";
import "./App.css";
import AuthButton from "./components/AuthButton";
import HabitPanel from "./components/HabitPanel";
import MainSection from "./components/MainSection";
import SideSection from "./components/SideSection";
import { TitleLogo } from "./components/TitleLogo";
import AuthInput from "./components/AuthInput";
import AuthContainer from "./components/AuthContainer";

function App() {
  const [mainSection, setMainSection] = useState("home");

  return (
    <div className="h-screen flex justify-center items-center">
      {/* <SideSection>
        <TitleLogo setMainSection={setMainSection} />
        <HabitPanel mainSection={mainSection} setMainSection={setMainSection} />
      </SideSection>
      <MainSection mainSection={mainSection} setMainSection={setMainSection} /> */}
      <AuthContainer>
      <AuthInput placeholder = "  email"/>
      <AuthInput placeholder = "  password"/>
      <AuthInput placeholder = "  confirm password"/>
      </AuthContainer>
    </div>
  );
}

export default App;
