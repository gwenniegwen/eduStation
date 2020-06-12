import React, { useState } from 'react'
import './style.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import AddEvent from "../../components/Forms/AddEvent"


// Previous Event Add attempt not working
function Calendar() {
  const [calEvents, setCalEvents] = useState([{ }]);

 function addEventToCal(e)

 {

    e.preventDefault()
    console.log(e)
  const newEvent = {
    title: e.target.form[0].value, 
    date: e.target.form[1].value};

  setCalEvents([
    ...calEvents, 
    newEvent
  ])


 }
  return (
    <div className="calendarPage">
    <AddEvent addEventToCal = {addEventToCal}/>
  <div className="calendar">
      <FullCalendar

        defaultView="dayGridMonth"
        header={{
          left: 'prev,next',
          center: 'title',
          right: 'today'
        }}
        plugins={[dayGridPlugin]}
        weekends={false}
        editable= {true}
        events= {calEvents}
        />
</div>
    </div>
  )
}

export default Calendar