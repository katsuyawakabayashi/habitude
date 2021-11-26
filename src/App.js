import { useState } from "react";
import "./App.css";
<<<<<<< HEAD
import Signup from "./pages/Signup";
import Login from "./pages/Login";

=======
import Signup from "./pages/Signup";
import Login from "./pages/Login";
>>>>>>> a6e84b9e7d681070fd4db02940355890025e5a29
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
