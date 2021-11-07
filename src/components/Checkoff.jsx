import React from "react";
import './Checkbox.css';

const Checkoff = () => {
  return (
    
    <div className="text-lg">
      <label class="container">
        <input type="checkbox" />
        <span class="text">Checkbox example</span>
        <span class="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkoff;
