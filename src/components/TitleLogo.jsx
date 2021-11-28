import React from "react";

export const TitleLogo = ({ setMainSection }) => {
  return (
    <button className="px-3 text-4xl dark:text-gray-300 font-bold" onClick={() => setMainSection("home")}>
      habitude
    </button>
  );
};
