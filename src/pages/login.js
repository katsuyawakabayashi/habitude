import React from "react";
import AuthButton from "../components/AuthButton";
import AuthContainer from "../components/AuthContainer";
import AuthInput from "../components/AuthInput";

const Login = () => {
  return (
    <AuthContainer>
      <AuthInput placeholder="  email" />
      <AuthInput placeholder="  password" />
      <div className="flex justify-center text-lg text-gray-500 pb-2">
        <AuthButton text="log in" />
      </div>
      <div className="flex justify-center pb-3">create account</div>
    </AuthContainer>
  );
};

export default Login;
