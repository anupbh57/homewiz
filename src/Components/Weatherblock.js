import React from 'react'
import IconRain from "../icons/icon-rain.svg"
function Weatherblock() {
    return (
        <div className='weatherblock py-4' style = {style.main}>
            <div className='weatherblock-wrapper flex justify-between'>
                <div className='weatherblock-left w-3/12'>
                    <img src = {IconRain} width = "80%"></img>
                    
                </div>
                <div className='weatherblock-center flex flex-col justify-center w-1/2'>
                        <h1 className='text-xs'>Tomorrow</h1>
                        <h1 className='text-lg'>Rain</h1>
                </div>
                <div className='weatherblock-right flex flex-col justify-center w-3/12'>
                    <h1 className='inline'><span className='text-xl'>20</span><span className='text-xs'> /10</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Weatherblock

const style = {
    main: {
        borderBottom: "solid",
        borderBottomColor: "#2a2f3a",
    }
}
