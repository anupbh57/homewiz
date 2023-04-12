import React from 'react'
import CenterLeft from './CenterLeft'
import CenterRight from './CenterRight'
function Center() {
  return (
    <div className='center w-3/4 m-auto' style = {style.main}>
      <div className='center-wrapper w-full flex flex-row text-white m-auto h-full'>
      <CenterLeft />
      <CenterRight />
      </div>
      
    </div>
  )
}

export default Center

const style = {
  main: {
    background: "#161a1f",
    borderRadius: "25px",
    height: "97vh"
  }
}