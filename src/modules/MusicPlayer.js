import React from 'react'
import MusicCover from '../Images/music.jpg';
import Play from '../icons/icon-play.svg'
import Next from '../icons/icon-next.svg'
import Previous from '../icons/icon-previous.svg'
import Pause from '../icons/icon-pause.svg'
import { Slider } from '@mui/material';
function MusicPlayer() {
  return (
    <div className='musicplayer p-4' style = {style.main}>
        <div className='musicplayer-wrapper'>
            <div className='musicplayer-top flex justify-around w-full'>
                <div className='musicplayer-image w-1/4 flex'>
                    <img src = {MusicCover} width = "" className='rounded-xl m-auto'></img>
                </div>
                <div className='musicplayer-info w-3/4 pl-2 flex flex-col'>
                    <p className='musicplayer-artist text-lg overflow-x-scroll w-3/4 h-9'>Certified lover Boy</p>
                    <p className='musicplayer-artist text-xs'>Drake</p>
                </div>
            </div>
            <div className='musicplayer-controls flex justify-around w-3/4 m-auto mt-6 '>
                    <img src = {Previous} className="w-1/6"/>
                    <img src = {Play} className="w-1/6"/>
                    <img src = {Next} className="w-1/6"/>
            </div>
            <div className='musicplayer-progress mt-2'>
            <Slider aria-label="Progress" value="50" onChange={null} />
            </div>
        </div>
    </div>
  )
}

export default MusicPlayer

const style = {
    main: {
        borderRadius: "25px",
        background: "#232530",
        height: "23.5%"
    }
}