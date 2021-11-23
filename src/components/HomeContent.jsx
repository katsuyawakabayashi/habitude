import React from "react";
import CheckoffPanel from "./CheckoffPanel";
import GreetingPanel from "./GreetingPanel";
import StreakPanel from "./StreakPanel";
import MainHeatmap from "./MainHeatmap";

const HomeContent = () => {
  return (
    <div className="w-screen bg-gray-100 dark:bg-gray-800">
      <div className="h-screen p-5 flex flex-row space-x-10 overflow-scroll">
        <div className="p-5 space-y-8">
          <GreetingPanel />
          <StreakPanel />
          <CheckoffPanel />
        </div>
        <div className="p-5 pb-0 flex flex-row space-x-4 justify-items-end">
          <div>
            <MainHeatmap />
          </div>
          <div className="flex flex-col space-y-2">
            <button className="text-base font-semibold rounded-lg py-2 px-4 bg-green-600 text-white">
              2021
            </button>
            <button className="text-base font-medium rounded-lg py-2 px-4 bg-white text-black">
              2020
            </button>
            <button className="text-base font-medium rounded-lg py-2 px-4 bg-white text-black">
              2019
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
