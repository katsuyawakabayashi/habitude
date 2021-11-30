import { useState } from "react";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  const [mainSection, setMainSection] = useState("home");

  const d = new Date();
  const time = d.getHours();
  if (time >= 18 || time < 5) {
    document.documentElement.classList.add("dark");
  }

  return (
    <BrowserRouter>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
