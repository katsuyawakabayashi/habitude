import React from "react";
import { useRef, useState } from "react";
import CheckoffPanel from "./CheckoffPanel";
import GreetingPanel from "./GreetingPanel";
import StreakPanel from "./StreakPanel";
import MainHeatmap from "./MainHeatmap";
import { logout, useAuth } from "../firebase"

const HomeContent = ({ setHabitData }) => {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  async function handleLogout(){
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error! Couldn't logout");
    }
    setLoading(false);
  }
  
  return (
    <div className="w-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl h-screen p-5 flex flex-row space-x-10 overflow-scroll">
        <div className="p-5 space-y-8">
          <GreetingPanel />
          <CheckoffPanel setHabitData={setHabitData}/>
        </div>
        <div className="p-5 flex flex-col">
          <button onClick={handleLogout} className="p-1 px-3 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 text-sm text-black dark:text-white">
            Currently logged in as: { currentUser?.email } logout 
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
