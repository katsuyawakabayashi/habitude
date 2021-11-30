import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext(null);

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("default");
  const auth = getAuth();

  onAuthStateChanged(auth, async (user) => {
    await setCurrentUser(user);
    if (currentUser === null) {
      setCurrentUser(user);
    } else if (currentUser === "default") {
      if (window.location.pathname === "/") {
        console.log("login now as", currentUser);
        navigate("/login");
      }

      console.log("---login now as", currentUser);
    } else {
      if (window.location.pathname !== "/") {
        console.log("login now as", currentUser);
        navigate("/");
      }
    }
  });

  useEffect(() => {}, []);

  const value = {
    currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
