import React from "react";
import AuthButton from "../components/AuthButton";
import AuthContainer from "../components/AuthContainer";
import AuthInput from "../components/AuthInput";
import { useRef, useState } from "react";
import { login } from "../firebase"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
 
  const [ loading, setLoading ] = useState(false);

  const navigate = useNavigate();

  async function handleLogin() {
    setLoading(true);
    try{
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error! Couldn't login!")
    }
    setLoading(false);
  }

  return (
    <AuthContainer>
      <AuthInput ref={emailRef} placeholder="email" />
      <AuthInput ref={passwordRef} type="password" placeholder="password" />
      <div className="flex justify-center text-lg text-gray-500 pt-2 pb-5">
        <AuthButton text="log in" handleClick={handleLogin} loading={loading} />
      </div>
      <div className="flex justify-center pb-3">
        <button onClick={() => navigate('../signup', { replace: true })} className="text-base underline">
        new here? create account
        </button>
        </div>
    </AuthContainer>
  );
};

export default Login;
