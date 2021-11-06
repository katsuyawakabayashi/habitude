import "./App.css";
import MainSection from "./components/MainSection";
import SideSection from "./components/SideSection";
import { TitleLogo } from "./components/TitleLogo";

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
