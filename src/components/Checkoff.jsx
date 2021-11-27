import React from "react";
import "./Checkoff.css";

const writeDate = ( dateString ) => {
  const str = dateString.split('-');
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
  var year = parseInt(str[0]);
  var month = parseInt(str[1]);
  var day = parseInt(str[2]);
  var date = months[month-1] + ' ' + day + ', ' + year;
  return date;
}

const Checkoff = ({ habitName, currentDate, habitData, setHabitData }) => {
  const getHabitIndex = ( currentDate, habitData ) => {
    var index = habitData.findIndex(x => writeDate(x.date) === writeDate(currentDate));
    return index;
  }
  const habitIndex = getHabitIndex(currentDate, habitData);
  const handleSetHabitData = () => {
    var g = habitData[habitIndex];
    g.completed = !g.completed;

    setHabitData([
      ...habitData.slice(0,habitIndex),
      g,
      ...habitData.slice(habitIndex+1)
    ]);
  }
  var habitCompleted = false;
  if (habitIndex != -1) { // error checking 
    habitCompleted = habitData[habitIndex].completed;
  }

  return (
    <div className="text-lg">
      <label className="container">
        <input type="checkbox" checked={habitCompleted} 
          onClick={() => {
              if (habitIndex != -1) handleSetHabitData()
            }}/>
        <span className="text dark:text-gray-300">{habitName}</span>
        <span className="checkmark"></span>
      </label>
    </div>
    
  );
};

export default Checkoff;
