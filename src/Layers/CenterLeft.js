import React from 'react'
import ShoppingList from '../modules/ShoppingList'
import ImageSlider from '../modules/ImageSlider'

function CenterLeft() {
  return (
    <div className='centerLeft w-3/5 m-auto h-full p-4' style = {style.main}>
      <div className='centerLeft-wrapper w-full h-full'>
      <ImageSlider/>
      <ShoppingList />
      </div>
      
    </div>
  )
}

export default CenterLeft

const style = {
 
}