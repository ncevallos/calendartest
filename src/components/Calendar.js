import React from 'react'
import Calendar from 'react-calendar';
import { differenceInCalendarDays, format } from 'date-fns';
import parseISO from 'date-fns/parseISO';
import '../Calendar.css';


// const datesToAddClassTo = ["Sun Jun 06 2021 00:00:00 GMT-0400"];
const datesToAddClassTo = ["Sun Jun 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)"];
const dateFormat = "yyyy";
function isSameDay(a, b) {
    console.log("a contains", a);
    // format(a, dateFormat);
    // console.log("a now contains", a);
    console.log("b contains", b);
    // format(b, dateFormat);
    let test = parseISO(b);
    console.log("b now contains", test);
    return differenceInCalendarDays(a, b) === 0;
  }
  function tileClassName({ date, view }) {
    // Add class to tiles in month view only
    if (view === 'month') {
        console.log("date in tileclass function is", date);
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (datesToAddClassTo.find(dDate => isSameDay(dDate, date))) {
        console.log("Match found!");
        return 'myClassName';
      }
    }
  }


export const CalendarPage = () =>  {
        return (
                    <div className="block">
                        <div>
                        Test if page working
                        <Calendar
                        tileClassName={tileClassName}
                        />
                        {/* <button class="circle-div">HI</button> */}
                        </div>
                    </div>

    )
}



export default CalendarPage;