import React from "react";
import { signup } from "../firebase"
import Signup from "../pages/Signup";
// maybe make this type="submit" later???

const AuthButton = ({ text }) => {
  async function handleSignup() {
    await signup(Signup.emailRef.current.value, Signup.passwordRef.current.value);
  }
  return (
    <button onClick={handleSignup}>
      {
        <div className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 bg-opacity-50 text-center h-8 w-20">
          {text}
        </div>
      }
    </button>
  );
};

export default AuthButton;
