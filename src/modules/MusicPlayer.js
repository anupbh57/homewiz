import React from 'react'
import MusicCover from '../Images/music.jpg';
import Play from '../icons/icon-play.svg'
import Next from '../icons/icon-next.svg'
import Previous from '../icons/icon-previous.svg'
import Pause from '../icons/icon-pause.svg'
import Volume from '../icons/icon-volume.svg'
import {Slider} from '@mui/material';
import {VolumeDown} from '@mui/icons-material';
import {VolumeUp} from '@mui/icons-material';
import {Stack} from '@mui/system';




function MusicPlayer() {
    return (
        <div className='musicplayer h-2/5 flex flex-col justify-start'
            style={
                style.main
        }>
            <div className='musicplayer-wrapper  p-4 m-auto' style = {style.wrapper}>
                <div className='musicplayer-info'>
                    <p className='musicplayer-artist text-lg overflow-x-scroll w-3/4 h-9'>Certified lover Boy</p>
                    <p className='musicplayer-artist text-xs'>Drake</p>
                </div>
                <div className='musicplayer-top flex justify-around w-full mt-4'>
                    <div className='musicplayer-image w-1/2 flex'>
                        <img src={MusicCover}
                            width=""
                            className='rounded-xl m-auto border border-gray-200'></img>
                    </div>
                    <div className='musicplayer-info w-3/4 pl-2 flex flex-col justify-center'>
                        <Stack spacing={2}
                            direction="row"
                            sx={
                                {width: "70%", margin: "auto"}
                            }
                            alignItems="center">
                            <VolumeDown/>
                            <Slider aria-label="Volume" value="10"
                                onChange={null}/>
                            <VolumeUp/>
                        </Stack>
                        <div className='musicplayer-controls flex justify-around w-3/4 m-auto '>
                    <img src={Previous}
                        className="w-2/6 p-1"/>
                    <img src={Play}
                        className="w-2/6 p-1"/>
                    <img src={Next}
                        className="w-2/6 p-1"/>
                </div>
                    </div>
                </div>
                <div className='musicplayer-progress mt-8'>
                    <Slider aria-label="Progress" value="50"
                        onChange={null}/>
                </div>
                

            </div>
        </div>
    )
}

export default MusicPlayer

const style = {
    main: {
        borderRadius: "25px",
       height: "40%",
    },
    wrapper : {
        background: "#161a1f",
    }
}
