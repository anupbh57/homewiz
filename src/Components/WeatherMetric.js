import React from 'react'

function WeatherMetric(props) {
    let chosenStyle = style.icoBlue;
    if (props.bg == "red") {
        chosenStyle = style.icoRed;
    }
    else if (props.bg == "green") {
        chosenStyle = style.icoGreen;
    }
    else if (props.bg == "yellow") {
        chosenStyle = style.icoYellow;
    }
    else {
        chosenStyle = style.icoBlue;
    }
    
  return (
    <div className='weathermetric w-full'>
        <div className='weathermetric-wrapper flex flex-row justify-center w-full'>
            <div className='weathermetric-left w-1/12'>
                <div className='weathermetric-ico bg-red-50 h-1/2 rounded-lg w-fit text-transparent' style = {chosenStyle}>
                    .
                </div>
            </div>
            <div className='weathermetric-right w-11/12'>
                <div className = "weathermetric-degree text-lg">18 &#8451;</div>
                <div className = "weathermetric-type text-xs">Indoor Temp</div>
            </div>
        </div>
    </div>
  )
}

export default WeatherMetric

const style = {
    icoRed: {
        background: "rgb(164,56,62)",
        background: "linear-gradient(180deg, rgba(164,56,62,1) 0%, rgba(113,44,52,1) 100%)",
    },
    icoYellow: {
        background: "rgb(114,84,42)",
        background: "linear-gradient(180deg, rgba(114,84,42,1) 0%, rgba(157,118,67,1) 100%)"
    },
    icoBlue: {
        background: "rgb(51,151,197)",
        background: "linear-gradient(180deg, rgba(51,151,197,1) 0%, rgba(44,181,247,1) 100%)"
    },
    icoGreen: {
        background: "rgb(151,232,68)",
        background: "linear-gradient(180deg, rgba(151,232,68,1) 0%, rgba(151,248,60,1) 100%)",
    }
}