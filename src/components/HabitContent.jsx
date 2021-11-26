import React, { useState } from "react";
import HabitHeatmap from "./HabitHeatmap";
import Checkoff from "./Checkoff";

const writeDate = ( dateString ) => {
  const str = dateString.split('-');
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
  var year = parseInt(str[0]);
  var month = parseInt(str[1])-1;
  var day = parseInt(str[2]);
  var date = months[month] + ' ' + day + ', ' + year;
  return date;
}

const getCurrentDate = () => {
  const d = new Date();
  var month = parseInt(d.getMonth()) + 1;
  var today = d.getFullYear() + '-' + month + '-' + d.getDate();
  return today;
}


const HabitContent = ({ habitName }) => {
  const [currentDate, setCurrentDate] = useState(getCurrentDate);
  const [habitData, setHabitData] = useState([
    { date: '2021-01-01', completed: true },
    { date: '2021-01-02', completed: true },
    { date: '2021-01-03', completed: true },
  ]);
  return (
    <div className="w-screen bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
      <div className="flex flex-row space-x-10">
        <div className="space-y-8 m-5">
          <div className="space-y-2">
            <div className="text-3xl">{habitName}</div>
            <div>Start date: {writeDate(habitData[0].date)}</div>
          </div>
          <div className="space-y-4">
            <div className="text-2xl">{writeDate(currentDate)}</div>
            <Checkoff />
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div><HabitHeatmap currentDate={currentDate}/></div>
          <button onClick={() => console.log("clicked")}>
            <div className="underline">delete</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitContent;
