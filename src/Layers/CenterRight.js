import React from 'react'
import Weather from '../modules/Weather'
import ImageSlider from '../modules/ImageSlider'
import MusicPlayer from '../modules/MusicPlayer'

function CenterRight() {
  return (
    <div className='centerRight w-2/5 pr-4 py-4'>
      <div className='centerRight-wrapper w-full h-full'>
        <Weather/>
        <MusicPlayer />
      </div>
    </div>
  )
}

export default CenterRight

const style = {
  main: {
    background: "#22242e",
    borderRadius: "25px",
    padding: "30px",
  }
}