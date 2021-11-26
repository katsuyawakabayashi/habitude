import React from "react";

export const TitleLogo = ({ setMainSection }) => {
  return (
    <button className="text-4xl dark:text-gray-300" onClick={() => setMainSection("home")}>
      habitude
    </button>
  );
};
