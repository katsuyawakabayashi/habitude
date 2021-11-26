import React from "react";
import { useRef, useState } from "react";
import AuthButton from "../components/AuthButton";
import AuthContainer from "../components/AuthContainer";
import AuthInput from "../components/AuthInput";
import { signup, useAuth } from "../firebase"

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  async function handleSignup() {
    setLoading(true);
    try{
      await signup(emailRef.current.value, passwordRef.current.value);
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
      <AuthInput ref={passwordConfirmRef} type="password" placeholder="  confirm password" />
      <div className="flex justify-center text-lg text-gray-500 pt-2 pb-5">
        {/* <AuthButton text="sign up" /> */}
          <button disabled={loading} onClick={handleSignup}>
        {
          <div className="p-1 rounded-full bg-gray-200 dark:bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-400 bg-opacity-50 dark:bg-opacity-100 text-center h-8 w-20">
            sign up
          </div>
        }
    </button>
      </div>
    </AuthContainer>
  );
}

export default Signup;
