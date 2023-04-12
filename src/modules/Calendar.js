import React from 'react'
import CalendarCounter from '../Components/CalendarCounter'
import VerticalTabs from '../Components/CalendarEvents'
import CalendarIco from '../icons/icon-calendar.svg'
function Calendar() {
  return (
    <div className='calendar'>
        <div className='calendar-wrapper'>
            <div className='calendar-top flex justify-between'>
                <p className='calendar-title flex text-lg font-bold'>Calendar</p>
                <img src = {CalendarIco} width="7%"></img>
            </div>
            <div className='calendar-counter-wrap'>
                <CalendarCounter/>
                <VerticalTabs/>
            </div>
            
        </div>
    </div>
  )
}

export default Calendar