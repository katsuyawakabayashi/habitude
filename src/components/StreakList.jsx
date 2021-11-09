import React, { useState } from "react";
import Streak from "./Streak";

const StreakLeaderboard = () => {
  return (
    <div className="mt-3 mb-3 p-3 rounded-lg bg-green-50">
    <table class="table-auto w-full">
      <tbody>
        <tr>
          <td class="px-3 py-2">1</td>
          <td>
            <Streak />
          </td>
          <td>200🔥</td>
        </tr>
        <tr>
          <td class="px-3 py-2 w-1/12">2</td>
          <td>
            <Streak />
          </td>
          <td>100🔥</td>
        </tr>
        <tr>
          <td class="px-3 py-2">3</td>
          <td>
            <Streak />
          </td>
          <td>50🔥</td>
        </tr>
        <tr>
          <td class="px-3 py-2">4</td>
          <td>
            <Streak />
          </td>
          <td>25🔥</td>
        </tr>
        <tr>
          <td class="px-3 py-2">5</td>
          <td>
            <Streak />
          </td>
          <td>1🔥</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

const StreakList = () => {
  const [showStreakList, setShowStreakList] = useState(true);
  const handleShowStreakList = () => {
    setShowStreakList((cur) => !cur);
  };
  return (
    <div>
      <div className="p-4 rounded-lg bg-green-600">
        <div className="text-white">
          <div className="flex flex-row space-x-1">
            <div className="font-serif text-xl font-medium">
              Longest Streaks
            </div>
          </div>
        </div>
        {showStreakList ? <StreakLeaderboard/> : 
          <div className="mt-3 mb-3 p-3 rounded-lg bg-green-50">
          <table class="table-auto w-full">
            <tbody>
              <tr>
                <td class="px-3 py-2 w-1/12">1</td>
                <td>
                  <Streak />
                </td>
                <td>200🔥</td>
              </tr>
            </tbody>
          </table>
          </div>}
        <button onClick={handleShowStreakList} className="text-sm text-white italic">show {showStreakList ? 'less' : 'more'}</button>
      </div>
    </div>
  );
};

export default StreakList;
