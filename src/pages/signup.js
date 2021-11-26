import React from "react";
import { useRef, useState } from "react";
import AuthButton from "../components/AuthButton";
import AuthContainer from "../components/AuthContainer";
import AuthInput from "../components/AuthInput";
import { signup } from "../firebase"

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [ loading, setLoading ] = useState(false);

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
      <AuthInput ref={emailRef} placeholder="  email" />
      <AuthInput ref={passwordRef} type="password" placeholder="  password" />
      <AuthInput ref={passwordConfirmRef} type="password" placeholder="  confirm password" />
      <div className="flex justify-center text-lg text-gray-500 pt-2 pb-5">
        {/* <AuthButton text="sign up" /> */}
          <button disabled={loading} onClick={handleSignup}>
        {
          <div className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 bg-opacity-50 text-center h-8 w-20">
            sign up
          </div>
        }
    </button>
      </div>
    </AuthContainer>
  );
}

export default Signup;
