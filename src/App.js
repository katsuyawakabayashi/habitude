import { useState } from "react";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import { useAuth } from "./firebase";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  const [mainSection, setMainSection] = useState("home");

  const d = new Date();
  const time = d.getHours();
  //if (time >= 18 || time < 5) {
    document.documentElement.classList.add("dark");
  //}

  // async function PrivateRoute({children}) {

  //   // setLoading(true);
  //   try{
  //     const currentUser = await useAuth();
  //     return currentUser ? children : <Navigate to="/login" />;
  //     // await login(emailRef.current.value, passwordRef.current.value);
  //   } catch {
  //     alert("Error! Authentication failed!!")
  //   }
  //   // setLoading(false);
  // }

  // function RequireAuth() {
  //   const currentUser = useAuth();
  //   console.log('currentUser (private router): ', currentUser);
  //   if (!currentUser) {
  //         return <Navigate to="/login"/>;
  //     }
  //   return <Outlet />
  //   // <Home mainSection={mainSection} setMainSection={setMainSection} />;
  //   // return auth ? children : <Navigate to="/signup" />;
  // }

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
