import React from "react";
import CheckoffPanel from "./CheckoffPanel";
import GreetingPanel from "./GreetingPanel";
import StreakPanel from "./StreakPanel";
import MainHeatmap from "./MainHeatmap";

const HomeContent = () => {
  return (
    <div className="w-screen bg-gray-100 dark:bg-gray-800">
      <div className="h-screen p-5 flex flex-row space-x-10 overflow-scroll justify-between">
        <div className="p-5 space-y-8">
          <GreetingPanel />
          <CheckoffPanel />
        </div>
        <div className="p-5 flex flex-col">
          <button className="p-1 px-3 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 text-xs text-black dark:text-white">
            logout longemail@g.ucla.edu
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
