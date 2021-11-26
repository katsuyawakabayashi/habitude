import React from "react";
import AuthButton from "../components/AuthButton";
import AuthContainer from "../components/AuthContainer";
import AuthInput from "../components/AuthInput";

function Signup() {
  return (
    <AuthContainer>
      <AuthInput placeholder="  email" />
      <AuthInput placeholder="  password" />
      <AuthInput placeholder="  confirm password" />
      <div className="flex justify-center text-lg text-gray-500 pb-5">
        <AuthButton text="sign up" />
        create account
      </div>
    </AuthContainer>
  );
}

export default Signup;
