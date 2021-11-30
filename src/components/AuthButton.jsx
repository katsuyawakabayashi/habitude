import React from "react";
import { signup } from "../firebase"
import Signup from "../pages/Signup";
// maybe make this type="submit" later???

const AuthButton = ({ text, handleClick, loading }) => {
  return (
    <button onClick={handleClick} disabled={loading}>
      {
        <div className="px-3 py-1 rounded-xl bg-green-600 dark:text-gray-300 hover:bg-green-700 text-white">
          {text}
        </div>
      }
    </button>
  );
};

export default AuthButton;
