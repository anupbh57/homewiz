import React from 'react'
import { Home, Person, Cloud } from '@mui/icons-material'
import AccountInfo from '../modules/AccountInfo'
import HomeIco from "../icons/icon-home.svg"
import MusicIco from "../icons/icon-music.svg"
import UserIco from "../icons/icon-user.svg"
function MainMenu() {
  return (
    <div className='main-menu h-screen' id ="main-menu">
        <div className='main-menu-wrapper h-full '>
            <ul className='main-menu-ul h-full  flex-col flex justify-center relative'>
            <AccountInfo className="absolute" />
                <li className='main-menu-li text-2xl mx-auto px-4 active:animate-ping'><img src = {UserIco} width = "40px"></img></li>
                <li className='main-menu-li mx-auto border-l-2 border-l-slate-300 px-4 my-4 duration-75 active:animate-ping' style = {newstyle.active}><img src = {HomeIco} width = "40px"></img></li>
                <li className='main-menu-li mx-auto  px-4 active:animate-ping'><img src = {MusicIco} width = "40px"></img></li>
            </ul>
            
        </div>
    </div>
  )
}

const newstyle = {
  main: {
    width: "4%",
  },
   button : {
    fontSize: "40px",
    color: "#f53d74",
    background: "white",
    borderRadius: "8px",
    padding: "1px",

   },
   active: {
    "border-left-color": "#2cade8",
   }
  
   
}

export default MainMenu