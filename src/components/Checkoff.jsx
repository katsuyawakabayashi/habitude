import React from "react";
import "./Checkoff.css";

const Checkoff = ( {habitName} ) => {
  return (
    <div className="text-lg">
      <label className="container">
        <input type="checkbox" />
        <span className="text dark:text-gray-300">{habitName}</span>
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkoff;
