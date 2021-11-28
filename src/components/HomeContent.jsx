import React from "react";
import CheckoffPanel from "./CheckoffPanel";
import GreetingPanel from "./GreetingPanel";
import StreakPanel from "./StreakPanel";
import MainHeatmap from "./MainHeatmap";

const HomeContent = () => {
  return (
    <div className="w-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl h-screen p-5 flex flex-row space-x-10 overflow-scroll justify-between">
        <div className="w-5/6 p-5 space-y-8">
          <GreetingPanel />
          <CheckoffPanel />
        </div>
        <div className="p-5">
          <button className="p-1 px-3 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 text-sm text-black dark:text-white">
            logout 
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
