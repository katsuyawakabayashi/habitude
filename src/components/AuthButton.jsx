import React from "react";

const AuthButton = ({ text }) => {
  return (
    <button onClick={() => console.log("clicked")}>
      {
        <div className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 bg-opacity-50 text-center h-8 w-20">
          {text}
        </div>
      }
    </button>
  );
};

export default AuthButton;
