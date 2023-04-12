import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CartIco from "../icons/icon-cart.svg";

function Shoppinglistblock() {
  return (
    <div className='shoppinglistblock w-full py-2 ' style = {style.shoppinglistblock}>
        <div className='shoppinglistblock-wrapper flex justify-start'>
        <img src = {CartIco} width = "40px"></img>
                <p className='my-auto mx-3 text-xs'>Lorem ipsum dolor sit amet</p>
        </div>
    </div>
  )
}

export default Shoppinglistblock

const style = {
    shoppinglistblock: {
      borderBottom: "solid rgb(42, 47, 58)"
    },
    icon: {
        fontSize: "20px",
    }

}