import React, { useState } from "react";
import HabitHeatmap from "./HabitHeatmap";
import Checkoff from "./Checkoff";
import HabitName from "./HabitName";
import HabitTodayButton from "./HabitTodayButton";
import HabitDeleteButton from "./HabitDeleteButton";
import { useAuth } from "../firebase";
import { deleteHabitFromFirestore } from "../firebase.js";

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
};

const HabitContent = ({ setMainSection, habitName, habitData, setHabitData, habitId }) => {
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const currentUser = useAuth();
  const deleteHabit = () => {deleteHabitFromFirestore(currentUser.uid, habitId)};
  return (
    <div className="w-screen bg-gray-100 dark:bg-gray-800 dark:text-gray-300 overflow-scroll">
      <div className="flex flex-row space-x-10">
        <div className="m-10 w-80 flex flex-col justify-between">
          <div className="space-y-8">
            <div className="space-y-2">
              <HabitName habitName={habitName} />
              <HabitTodayButton 
                setCurrentDate={setCurrentDate}
                getCurrentDate={getCurrentDate}
                writeDate={writeDate}
              />
            </div>
            <div className="space-y-4">
              <div className="text-2xl">
                {/* displays current date */}
                {writeDate(currentDate)}
              </div> 
              <Checkoff 
                habitName={habitName} 
                currentDate={currentDate}
                habitData={habitData} 
                setHabitData={setHabitData}
                habitId={habitId}
              />
            </div>
          </div>
          <div>
              <HabitDeleteButton 
                setMainSection={setMainSection}
                deleteHabit={deleteHabit}
              />
          </div>
        </div>
        <div className="m-5">
            <HabitHeatmap 
              setCurrentDate={setCurrentDate} 
              habitData={habitData} 
            />
        </div>
      </div>
    </div>
  );
};

export default HabitContent;
