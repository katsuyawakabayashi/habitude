import React from "react";
import CheckOffPanel from "./CheckOffPanel";
import GreetingPanel from "./GreetingPanel";
import StreakPanel from "./StreakPanel";
import MainHeatMap from "./MainHeatMap";

const MainBar = () => {
  return (
    <div className="h-screen w-screen bg-gray-100">
      <div className="p-5 flex flex-row space-x-10">
        <div className="p-5 space-y-8">
          <GreetingPanel />
          <StreakPanel />
          <CheckOffPanel />
        </div>
        <div className="p-5 pb-0 flex flex-row space-x-4 justify-items-end">
          <div>
            <MainHeatMap/>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="text-base font-semibold rounded-lg py-2 px-4 bg-green-600 text-white">2021</button>
            <button className="text-base font-medium rounded-lg py-2 px-4 bg-white text-black">2020</button>
            <button className="text-base font-medium rounded-lg py-2 px-4 bg-white text-black">2019</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MainBar;
