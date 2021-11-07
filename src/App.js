import "./App.css";
import MainSection from "./components/MainSection";
import SideSection from "./components/SideSection";
import { TitleLogo } from "./components/TitleLogo";
import Habits from "./components/Habits";

//hello world
function App() {
  return (
    <div className="h-screen flex ">
      <SideSection>
        <TitleLogo />
        <Habits />
      </SideSection>
      <MainSection />
    </div>
  );
}

export default App;
