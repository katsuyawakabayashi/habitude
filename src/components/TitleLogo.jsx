import React from "react";

export const TitleLogo = ({ setMainSection }) => {
  return (
    <button className="text-4xl" onClick={() => setMainSection("home")}>
      habitude
    </button>
  );
};
