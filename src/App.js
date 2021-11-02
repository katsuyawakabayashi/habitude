import "./App.css";
import Habit from "./components/Habit";
import MainSection from "./components/MainSection";
import SideSection from "./components/SideSection";
import { TitleLogo } from "./components/TitleLogo";

//hello world
function App() {
  return (
    <div style={{ backgroundColor: "gray", width: "20%", height: "100vh" }}>
      <MainSection />
      <SideSection>
        <TitleLogo />
        <Habit />
      </SideSection>
    </div>
  );
}

export default App;
