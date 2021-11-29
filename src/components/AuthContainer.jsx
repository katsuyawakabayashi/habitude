import React from "react";
import { TitleLogo } from "./TitleLogo";

const AuthContainer = ({ children }) => {
  return (
    <div className="h-screen w-screen dark:text-gray-300">
      <div className="grid place-content-center h-full w-100 rounded-lg bg-gray-300 dark:bg-gray-800">
        <div className="mx-auto my-auto">
          <div className="flex justify-center pt-5">
            <div className="text-4xl dark:text-gray-300 font-bold mb-6">
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
