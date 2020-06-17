import React, { useState } from "react";
import "./style.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import AddEvent from "../../components/Forms/AddEvent";

// Previous Event Add attempt not working
function Calendar() {
  const [calEvents, setCalEvents] = useState([{}]);

  function addEventToCal(e) {
    e.preventDefault();
    console.log(e.target.form[2].value);
    const newEvent = {
      title: e.target.form[0].value,
      start: e.target.form[1].value,
      end: e.target.form[2].value,
      emoji: e.target.form[3].value,
      url: "/",
      //add emoji key-value pair
    };

    console.log(e.target.form[3].value);

    setCalEvents([...calEvents, newEvent]);
  }
  return (
    <div className="calendarPage">
      <AddEvent addEventToCal={addEventToCal} />
      <div className="calendar">
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: "prev,next",
            center: "title",
            right: "today",
          }}
          plugins={[dayGridPlugin]}
          weekends={false}
          editable={true}
          events={calEvents}
          eventClick={(e) => {
            e.jsEvent.preventDefault();
            if (e.event.url) {
              window.location.replace(e.event.url);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Calendar;
