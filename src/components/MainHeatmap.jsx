import React, { useState } from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import './Heatmap.css';
import 'react-calendar-heatmap/dist/styles.css';

const MainHeatmap = () => {
    // this initial state will be replaced with API request
    const [habitsTotalData, setHabitsTotalData] = useState([
        { date: '2021-02-01', habitsCompleted: 4, habitsTotal: 4 },
        { date: '2021-02-02', habitsCompleted: 1, habitsTotal: 3 },
        { date: '2021-03-01', habitsCompleted: 0, habitsTotal: 4 },
        { date: '2021-04-01', habitsCompleted: 2, habitsTotal: 4 },
        ]);
  return (
      <div className="p-5 pb-0 flex flex-row space-x-4 justify-items-end">
      <div>
      <CalendarHeatmap
          startDate={new Date('2021-01-01')}
          endDate={new Date('2021-12-31')}
          horizontal={false}
          values={habitsTotalData}
          tooltipDataAttrs={(value) => {
              if (value.date == null) {
                  return;
              }
              var percent = parseInt(value.habitsCompleted / value.habitsTotal * 100);
              return {
                  'data-tip': `${value.date}: ${percent}% <br /> ${value.habitsCompleted}/${value.habitsTotal} completed`,
              };
          } }
          classForValue={(value) => {
              if (!value) {
                  return 'color-empty';
              }
              var percent = parseInt(value.habitsCompleted / value.habitsTotal * 100);
              if (percent > 0 && percent <= 20) {
                    return `color-scale-1`;
              } else if (percent > 20 && percent <= 40) {
                    return `color-scale-2`;
              } else if (percent > 40 && percent <= 60) {
                    return `color-scale-3`; 
              } else if (percent > 60 && percent <= 80) {
                    return `color-scale-4`;
              } else if (percent > 80 && percent <= 100) {
                    return `color-scale-5`;
              } else {
                    return `color-scale-0`;
              }
          } } 
      />
      <ReactTooltip multiline={true} />
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
  );
};

export default MainHeatmap;
