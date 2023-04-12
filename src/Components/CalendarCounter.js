import React from 'react'
import AddIco from '../icons/icon-plus.svg'
function CalendarCounter() {
    return (
        <div className='calendar-counter mt-4 flex justify-between' >
            <div className='calendar-counter-wrapper flex justify-around text-center p-4 w-3/4' style = {style.main}>
                <div className='calendar-counter-top w-1/3' style = {style.top}>
                    <p className='text-xl font-bold'>9</p>
                    <p className='text-xs'>Today</p>
                </div>
                <div className='calendar-counter-top w-1/3' style = {style.top}>
                    <p className='text-xl font-bold'>4</p>
                    <p className='text-xs'>Tomorrow</p>
                </div>
                <div className='calendar-counter-top w-1/3'>
                    <p className='text-xl font-bold'>11</p>
                    <p className='text-xs'>Tuesday</p>
                </div>
            </div>
            <div className='calendar-counter-add w-1/5 flex' style = {style.main}>
                <img className='calendar-counter-icon m-auto w-4/5 h-2/5' src = {AddIco}></img>
            </div>
        </div>
    )
}

export default CalendarCounter

const style = {
    main: {
        background: "#15191e",
        borderRadius: "20px",
    },
    top: {
        borderRight : "solid 1px #23252d",
    }

}