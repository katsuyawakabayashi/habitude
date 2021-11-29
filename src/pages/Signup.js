import React from "react";
import { useRef, useState } from "react";
import AuthButton from "../components/AuthButton";
import AuthContainer from "../components/AuthContainer";
import AuthInput from "../components/AuthInput";
import { logout, signup, useAuth } from "../firebase"
import { useNavigate } from 'react-router-dom';


function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();
  const navigate = useNavigate();

  
  async function handleLogout(){
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error! Couldn't logout!");
    }
    setLoading(false);
  }

  async function handleSignup() {
    setLoading(true);
    try{
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error! Couldn't make account!")
    }
    setLoading(false);
  }

  return (
    <AuthContainer>
      <AuthInput ref={emailRef} placeholder="email" />
      <AuthInput ref={passwordRef} type="password" placeholder="password" />
      <div className="flex justify-center text-lg text-gray-500 pt-2 pb-5">
        {/* <AuthButton text="sign up" /> */}
          <button disabled={loading} onClick={handleSignup}>
        {
          <div className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-300 hover:bg-gray-300 dark:hover:bg-gray-400 bg-opacity-50">
            sign up
          </div>
        }
          </button>
      </div>
      <div className="flex justify-center pb-3">
        <button onClick={() => navigate('../login', { replace: true })} className="text-base underline">
        already have an account? log in
        </button>
      </div>
    </AuthContainer>
  );
}

export default Signup;
