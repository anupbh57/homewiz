import React from 'react'
import Calendar from '../modules/Calendar'

function Right() {
  return (
    <div className ='w-2/5 p-4 my-auto mx-4' style = {style.main}>
      <Calendar/>
    </div>
  )
}

export default Right

const style = {
  main: {
    borderRadius: "25px",
    height: "97vh"
  }
}