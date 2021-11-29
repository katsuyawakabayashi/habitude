import React from "react";
import AuthButton from "../components/AuthButton";
import AuthContainer from "../components/AuthContainer";
import AuthInput from "../components/AuthInput";
import { useRef, useState } from "react";
import { login, useAuth, logout } from "../firebase"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
 
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

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

  async function handleLogout(){
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error! Couldn't logout!");
    }
    setLoading(false);
  }

  return (
    <AuthContainer>
      <AuthInput ref={emailRef} placeholder="email" />
      <AuthInput ref={passwordRef} type="password" placeholder="password" />
      <div className="flex justify-center text-lg text-gray-500 pt-2 pb-2">
      <button disabled={loading} onClick={handleLogin}
        className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-300 hover:bg-gray-300 dark:hover:bg-gray-400 bg-opacity-50">
        log in
      </button>
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
