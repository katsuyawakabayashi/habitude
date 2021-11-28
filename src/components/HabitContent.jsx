import React, { useState } from "react";
import HabitHeatmap from "./HabitHeatmap";
import Checkoff from "./Checkoff";
import { deleteHabitFromFirestore } from "../firebase.js";
import { useAuth } from "../firebase";

const writeDate = ( dateString ) => {
  const str = dateString.split('-');
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
  var year = parseInt(str[0]);
  var month = parseInt(str[1]);
  var day = parseInt(str[2]);
  var date = months[month-1] + ' ' + day + ', ' + year;
  return date;
}

const getCurrentDate = () => {
  const d = new Date();
  var month = parseInt(d.getMonth()) + 1;
  var today = d.getFullYear() + '-' + month + '-' + d.getDate();
  return today;
}

const HabitContent = ({ setMainSection, habitName, habitData, setHabitData }) => {
  const handleMainSection = (e) => {
    setMainSection(e);
  };
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const currentUser = useAuth();
  return (
    <div className="w-screen bg-gray-100 dark:bg-gray-800 dark:text-gray-300 overflow-scroll">
      <div className="flex flex-row space-x-10">
        <div className="m-10 w-80 flex flex-col justify-between">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="font-serif text-3xl dark:text-gray-300 font-medium">{habitName}</div>
              <button className="p-2 px-4 rounded-lg bg-green-600 text-sm dark:text-gray-300 hover:bg-green-700 text-white"
                onClick={() => setCurrentDate(getCurrentDate())}>
                  Today is {writeDate(getCurrentDate())} 
              </button>
            </div>
            <div className="space-y-4">
              <div className="text-2xl">{writeDate(currentDate)}</div>
              <Checkoff 
                habitName={habitName} 
                currentDate={currentDate}
                habitData={habitData} 
                setHabitData={setHabitData}
              />
            </div>
          </div>
          <div>
            <button className="p-2 px-4 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 text-xs text-black dark:text-white"
                onClick={() => {
                  deleteHabitFromFirestore(currentUser.uid, habitName);
                  handleMainSection("home");
                }}>
                delete
              </button>
          </div>
        </div>
        <div className="m-5 flex flex-col space-y-5">
          <div>
            <HabitHeatmap 
              setCurrentDate={setCurrentDate} 
              habitData={habitData} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitContent;
