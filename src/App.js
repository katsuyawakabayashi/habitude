import "./App.css";
import AuthButton from "./components/AuthButton";
import Habits from "./components/Habits";
import MainSection from "./components/MainSection";
import SideSection from "./components/SideSection";
import { TitleLogo } from "./components/TitleLogo";
import Habits from "./components/Habits";

function App() {
  return (
    <div className="h-screen flex">
      <SideSection>
        <TitleLogo />
        <Habits />
      </SideSection>
      <MainSection />
    </div>
  );
}

export default App;
