import React from "react";
import { TitleLogo } from "./TitleLogo";

const AuthContainer = ({ children }) => {
  return (
    <div className="h-screen w-screen dark:text-gray-300">
      <div className="grid place-content-center h-full w-100 rounded-lg bg-gray-300 dark:bg-gray-800">
        <div className="mx-auto my-auto">
          <div className="flex justify-center pt-5">
            <div className="text-4xl dark:text-gray-300 font-bold">
              habitude
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
{
  /* <div className="mx-auto my-auto">
      <AuthInput placeholder = "  test1"/>
      <AuthInput placeholder = "  test2"/>
      <AuthInput placeholder = "  test3"/>
      <AuthInput placeholder = "  test4"/>
      <AuthInput placeholder = "  test5"/>
      <AuthInput placeholder = "  test6"/>
      </div> */
}

{
  /* return (<div className='flex bg-gray-400 rounded-lg items-center justify-center w-2/5 h-3/5 '></div>)}*/
}
