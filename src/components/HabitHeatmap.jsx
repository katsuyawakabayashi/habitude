import React, { useState } from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import './Heatmap.css';
import 'react-calendar-heatmap/dist/styles.css';

const HabitHeatmap = () => {
      // this initial state will be replaced with API request
      const [habitData, setHabitData] = useState([
        { date: '2021-02-01', completed: true },
        { date: '2021-02-02', completed: false },
        { date: '2021-03-01', completed: true },
        { date: '2021-04-01', completed: false },
        ]);
    return (
        <div className="p-5 pb-0 flex flex-row space-x-4 justify-items-end">
        <div>
        <CalendarHeatmap
            startDate={new Date('2021-01-01')}
            endDate={new Date('2021-12-31')}
            horizontal={false}
            values={habitData}
            tooltipDataAttrs={(value) => {
                if (value.date == null) {
                    return;
                }
                return {
                    'data-tip': `${value.date}: ${value.completed ? 'completed' : 'not completed'}`,
                };
            } }
            classForValue={(value) => {
                if (!value) {
                    return 'color-empty';
                }
                if (value.completed) {
                    return `color-scale-5`;
                } else {
                    return `color-scale-0`;
                }
            } } 
            onClick={(value) => {
                if (!value) {
                    return;
                } else {
                    alert(value.completed);
                }
            }} 
        />
        <ReactTooltip multiline={true}/>
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

export default HabitHeatmap;
