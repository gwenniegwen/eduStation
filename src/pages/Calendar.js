import React from 'react'
import '../index.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


function Calendar(){

    return(
            
        <FullCalendar 
        
        defaultView="dayGridMonth" 
        plugins={[ dayGridPlugin ]}
        weekends={false}
        events={[
          { title: 'event 1', date: '2020-06-02' },
          { title: 'event 2', date: '2019-06-02' }
        ]}/>
        )
}

// class Calendar extends Component{

//     render(){
//         return(
            
//         <FullCalendar 
        
//         defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}/>
//         )
//     }
// }


export default Calendar