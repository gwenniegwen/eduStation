import React,{Component} from 'react'
import '../index.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class Calendar extends Component{

    render(){
        return(
        <FullCalendar 
        
        defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}/>
        )
    }
}


export default Calendar