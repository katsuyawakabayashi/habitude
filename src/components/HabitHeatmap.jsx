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
    var date = months[month-1] + ' ' + day + ', ' + year;
    return date;
  }

const HabitHeatmap = ({ setCurrentDate, habitData }) => {
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
                    'data-tip': `${writeDate(value.date)}: ${value.completed ? 'completed' : 'not completed'}`,
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
                    setCurrentDate(value.date);
                }
            }} 
        />
        <ReactTooltip multiline={true}/>
        </div>
        </div>
    );
};

export default HabitHeatmap;
