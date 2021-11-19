import React from "react";
import CheckoffPanel from "./CheckoffPanel";
import GreetingPanel from "./GreetingPanel";
import StreakPanel from "./StreakPanel";
import MainHeatmap from "./MainHeatmap";

const HomeContent = () => {
  return (
    <div className="w-screen bg-gray-100">
      <div className="h-screen p-5 flex flex-row space-x-10 overflow-scroll">
        <div className="p-5 space-y-8">
          <GreetingPanel />
          <StreakPanel />
          <CheckoffPanel />
        </div>
        <div >
          <div>
            <MainHeatmap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
