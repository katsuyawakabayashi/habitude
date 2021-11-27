import React, { useState } from "react";
import Checkoff from "./Checkoff";

const getCurrentDate = () => {
  const d = new Date();
  var month = parseInt(d.getMonth()) + 1;
  var today = d.getFullYear() + '-' + month + '-' + d.getDate();
  return today;
}

const CheckoffList = () => {
    const today = getCurrentDate();
    // this initial state will be replaced with API request
    const [habits, setHabits] = useState([
      { name: "Sample habit 1", id: 1 },
      { name: "Sample habit 2", id: 2 },
      { name: "Sample habit 3", id: 3 },
    ]);
    const [habitData, setHabitData] = useState([
      { date: '2021-01-01', completed: true },
      { date: '2021-01-02', completed: true },
      { date: '2021-01-03', completed: true },
      { date: '2021-01-04', completed: false },
      { date: '2021-01-05', completed: false },
      { date: '2021-01-06', completed: false },
      { date: '2021-01-07', completed: false },
      { date: '2021-01-08', completed: false },
      { date: '2021-01-09', completed: false },
      { date: '2021-01-10', completed: false },
      { date: '2021-01-11', completed: false },
      { date: '2021-01-12', completed: false },
      { date: '2021-01-13', completed: false },
      { date: '2021-01-14', completed: false },
      { date: '2021-01-15', completed: false },
      { date: '2021-01-16', completed: false },
      { date: '2021-01-17', completed: false },
      { date: '2021-01-18', completed: false },
      { date: '2021-01-19', completed: false },
      { date: '2021-01-20', completed: false },
      { date: '2021-01-21', completed: false },
      { date: '2021-01-22', completed: false },
      { date: '2021-01-23', completed: false },
      { date: '2021-01-24', completed: false },
      { date: '2021-01-25', completed: false },
      { date: '2021-01-26', completed: false },
      { date: '2021-01-27', completed: false },
      { date: '2021-01-28', completed: false },
      { date: '2021-01-29', completed: false },
      { date: '2021-01-30', completed: false },
    ]);  
  return (
    <div className="p-5 space-y-4 flex flex-col">
      {habits.map((h) => (
        <Checkoff
          habitName={h.name}
          currentDate={today}
          habitData={habitData}
          setHabitData={setHabitData}
          key={h.id}
        />
      ))}
    </div>
  );
};

export default CheckoffList;
