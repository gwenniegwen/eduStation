import React, { useState, useEffect } from 'react'
import './style.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import AddEvent from "../../components/Forms/AddEvent"
import API from '../../utils/API'


// Previous Event Add attempt not working
function Calendar() {
  const [calEvents, setCalEvents] = useState([{ }]);

  useEffect(() => {
    loadEventToCal();
  }, []);

 function addEventToCal(e){
    e.preventDefault();
    API.saveCalendar({
      title: e.target.form[0].value, 
      start: e.target.form[1].value,
      end: e.target.form[2].value,
    })
    .then(res=>{ 
      loadEventToCal();
    })
    .catch(err => console.log(err));
  }
  function loadEventToCal(){
    API.getCalendars()
    .then(res=>{
      setCalEvents(res.data.map(event=> ({
        title: event.title,
        start: event.start,
        end: event.end,
        url: "/calendar/"+event._id
      })))
    })
    .catch(err=>console.log(err));
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
        eventClick={e=>{e.jsEvent.preventDefault();if(e.event.url){window.location.replace(e.event.url)}}}
        />
</div>
    </div>
  )
}

export default Calendar