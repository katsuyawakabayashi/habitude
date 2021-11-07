import React from "react";
import CheckoffList from "./CheckoffList";
import StreakList from "./StreakList";
import Heatmap from "./Heatmap";

const MainBar = () => {
  const d = new Date();
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
  var date = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  console.log(d);
  return (
    <div className="h-screen w-screen bg-gray-100">
      <div className="p-5 flex flex-row space-x-10">
        <div className="p-5 space-y-8">
          <div>
            <div className="font-serif text-3xl font-medium">
              Good afternoon! Today is {date}
            </div>
            <div className="text-green-600 italic">
              Have a great day today!
            </div>
          </div>
          <StreakList />
          <CheckoffList />
        </div>
        <div className="p-5 pb-0 flex flex-row space-x-4 justify-items-end">
          <div>
            <Heatmap horizontal={false}/>
          </div>
          <div className="flex flex-col space-y-2">
            <button class="text-base font-semibold rounded-lg py-2 px-4 bg-green-600 text-white">2021</button>
            <button class="text-base font-medium rounded-lg py-2 px-4 bg-white text-black">2020</button>
            <button class="text-base font-medium rounded-lg py-2 px-4 bg-white text-black">2019</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MainBar;
