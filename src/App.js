import "./App.css";
import MainBar from "./components/MainBar";
import SideBar from "./components/SideBar";
import { TitleLogo } from "./components/TitleLogo";

//hello world
function App() {
  return (
    <div>
      <SideBar />
      <TitleLogo />
      <MainBar />
    </div>
  );
}

export default App;
