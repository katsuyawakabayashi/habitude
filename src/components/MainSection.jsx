import React from "react";
import CheckoffList from "./CheckoffList";
import StreakList from "./StreakList";

const MainBar = () => {
  const d = new Date();
  console.log(d);
  return (
    <div className="p-5 w-4/5">
      Today is :{d.toString()}
      <CheckoffList />
      <StreakList />
    </div>
  );
};

export default MainBar;
