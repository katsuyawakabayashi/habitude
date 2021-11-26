import React, { useState } from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import './Heatmap.css';
import 'react-calendar-heatmap/dist/styles.css';

const writeDate = ( dateString ) => {
    const str = dateString.split('-');
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
    var year = parseInt(str[0]);
    var month = parseInt(str[1]);
    var day = parseInt(str[2]);
    var date = months[month] + ' ' + day + ', ' + year;
    return date;
  }

const HabitHeatmap = ({currentDate}) => {
      // this initial state will be replaced with API request
      const [habitData, setHabitData] = useState([
        { date: '2021-01-01', completed: true },
        { date: '2021-01-02', completed: true },
        { date: '2021-01-03', completed: true },
      ]);
    return (
        <div className="p-5 pb-0 flex flex-row space-x-4 justify-items-end">
        <div>
        <CalendarHeatmap
            startDate={new Date('2020-12-31')}
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
                    alert(currentDate);
                    return;
                } else {
                    alert(value.completed);
                    currentDate = value.date;
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
