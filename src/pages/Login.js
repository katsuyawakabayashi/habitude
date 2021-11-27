import React from "react";
import AuthButton from "../components/AuthButton";
import AuthContainer from "../components/AuthContainer";
import AuthInput from "../components/AuthInput";
import { useRef, useState } from "react";
import { login, useAuth } from "../firebase"

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  async function handleLogin() {
    setLoading(true);
    try{
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error! Email already in use!")
    }
    setLoading(false);
  }

  return (
    <AuthContainer>
      Currently logged in as: { currentUser?.email }
      <AuthInput ref={emailRef} placeholder="  email" />
      <AuthInput ref={passwordRef} type="password" placeholder="  password" />
      <div className="flex justify-center text-lg text-gray-500 pt-2 pb-2">
      <button disabled={loading} onClick={handleLogin}>
        {
          <div className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 bg-opacity-50 text-center h-8 w-20">
            log in
          </div>
        }
      </button>
      </div>
      <div className="flex justify-center pb-3">
        <div className="text-lg">
        create account
        </div>
        </div>
    </AuthContainer>
  );
};

export default Login;
