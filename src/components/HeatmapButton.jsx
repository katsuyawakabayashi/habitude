import React from "react";

const HeatmapButton = ({ text }) => {
  return (
    <button className="text-base font-semibold rounded-lg py-2 px-4 bg-green-600 text-white">
      {text}
    </button>
  );
};

export default HeatmapButton;
