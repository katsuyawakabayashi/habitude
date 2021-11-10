import React from 'react';

const TimeStatus = () => {
    const d = new Date();
    const timeOfDay = (time) => {
      if (time >= 5 && time < 12) {
        return 'morning';
      } else if (time >= 12 && time < 19) {
        return 'afternoon';
      } else {
        return 'evening';
      }
    }
    
    var greeting = 'Good ' + timeOfDay(d.getHours()) + '!';
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
    var date = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    return (
        <div className="font-serif text-3xl font-medium">
            {greeting} Today is {date}
        </div>
    );
};

export default TimeStatus;
