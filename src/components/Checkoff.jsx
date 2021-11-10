import React from "react";
import './CheckOff.css';

const CheckOff = () => {
  return (
    <div className="text-lg">
      <label className="container">
        <input type="checkbox" />
        <span className="text">Checkbox example</span>
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default CheckOff;
