import React from 'react'
import MusicCover from '../Images/music.jpg';
import ExternalIco from '../icons/icon-external.svg'
import ClockIco from '../icons/icon-clock.svg'
import CalendarIco from '../icons/icon-calendar-1.svg'
function CalendarBlock() {
    return (
        <div className='calendarblock py-3' style = {style.main}>
            <div className='calendarblock-wrapper'>
                <div className='calendarblock-top flex justify-around'>
                    <div className='calendarblock-img w-1/6 h-full flex'>
                        <img src={CalendarIco} className="rounded-full" w="20px" h= "20px"/>
                    </div>
                    <div className='calendarblock-top-center pl-2 w-8/12'>
                        <p className="calendarblock-title text-sm font-bold">
                            Dentist Appointment
                        </p>
                        <p className='calendarblock-subtitle text-xs'>
                            Hobart Dental
                        </p>
                    </div>
                    <div className='calendarblock-icon w-1/12'>
                        <img src={ExternalIco}/>
                    </div>
                </div>
                <div className='calendarblock-bar flex justify-between text-xs p-2 w-full mt-2' style = {style.bar}>
                    <div className='calendarblock-day h-full flex w-1/6'>
                        <img src={ClockIco} width = "25%" className='mr-1'/>
                        <p>Today</p>
                    </div>
                    <div className='calendarblock-top-center pl-2'>
                        <p className="calendarblock-date">
                            Apr 20, 2023
                        </p>
                    </div>
                    <div className='calendarblock-time'>
                        <p>8:00 - 8:45 am</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarBlock


const style = {
    main:{
        borderBottom: "solid rgb(42, 47, 58)",
    },
    bar: {
        backgroundColor : "rgb(35 37 48)",
        borderRadius: "20px",
    }
}