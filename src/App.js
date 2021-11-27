import { useState } from "react";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [mainSection, setMainSection] = useState("home");

  const d = new Date();
  const time = d.getHours();
  if (time >= 18 || time < 5) {
    document.documentElement.classList.add("dark");
  }

  return (
      <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home mainSection={mainSection} setMainSection={setMainSection} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
