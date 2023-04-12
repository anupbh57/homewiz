import React from 'react'
import IconSunnys from "../icons/icon-sunny.svg"
import IconSunny from "../icons/icon-cloudy.svg"
import Weatherblock from '../Components/Weatherblock'
import WeatherMetric from '../Components/WeatherMetric'

function Weather() {
    return (
        <div className='weather h-3/4 mb-4'
            style={
                style.main
        }>
            <div className='weather-wrapper p-4'>
                <div className='weather-top'>
                    <div className='weather-top-wrapper flex w-full'>
                        <div className='weather-top-left flex justify-center w-1/2'>
                            <img src={IconSunny} width = "80px"></img>
                        </div>
                        <div className='weather-top-right w-1/2'>
                            <h1 className='text-4xl inline'>52</h1>
                            <h1 className='text-xl inline'>/29</h1>
                            <h1 className='text-xs'>The sun is out and about</h1>
                        </div>
                    </div>
                </div>
                <div className='weather-center p-5 mt-7' style = {style.center}>
                    <Weatherblock/>
                    <Weatherblock/>
                    <Weatherblock/>
                </div>
                <div className='weather-bottom mt-4'>
                    <div className='weather-bottom-row mb-4 flex'>
                    <WeatherMetric bg = "red"/>
                    <WeatherMetric  bg = "yellow"/>
                    </div>
                    <div className='weather-bottom-row flex'>
                    <WeatherMetric bg = "blue"/>
                    <WeatherMetric bg = "green" />
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Weather

const style = {
    main: {
        background: "#232530",
        borderRadius: "25px"
    },
    center: {
        background: "#242832",
        borderRadius: "25px"
    }
}
