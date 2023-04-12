import React from 'react'
import {Image} from '@mui/icons-material';
import CameraIcon from '@mui/icons-material/Camera';
import SliderImage from '../Images/imageslider.jpg'
import SliderIcon from '../icons/icon-inspiration.svg'
import { Skeleton } from '@mui/material';


    
    class ImageSlider extends React.Component {
       
        // Constructor 
        constructor(props) {
            super(props);
       
            this.state = {
                quotes: [],
                DataisLoaded: false
            };
        }
       
        // ComponentDidMount is used to
        // execute the code 
        componentDidMount() {
            fetch(
            "https://type.fit/api/quotes")
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        items: json,
                        DataisLoaded: true
                    });
                });
        }
        render() {
            const { DataisLoaded, items } = this.state;
            if (!DataisLoaded) return <div>
<Skeleton variant="rounded" width={"100%"} height={"300px"} sx = {{bgcolor: "#20222b"}} />
 </div> ;
       
       return (
        <div className='imageslider w-full h-1/3 mx-auto mb-4'>
            <div className='imageslider-wrapper relative h-full'>
                <img src={SliderImage} style = {style.image}/>
                <div className='imageslider-content flex flex-row px-2 absolute bottom-0 right-0 w-full justify-start' style = {style.imagesliderContent}>
                    <div className='imageslider-content-left flex justify-around w-full'>
                    <img src = {SliderIcon} className='w-1/6' style = {style.icon}></img>
                    <h3 className='text-xs font-bold w-5/6 pl-2 m-auto'>{this.state.items[Math.floor(Math.random() * 1642)].text} </h3>

                    </div>
                </div>
            </div>
        </div>
    )
    }
    }

const style = {
    main: {
        borderRadius: "25px",
    },
    imageslider: {
        width: "100%",
        height: "600px",
        "filter": "blur(10px)",
        background : "red !important"
    },
    icon : {
        maxWidth : "10px !important",
        padding: "15px"
    },
    image : {
        borderRadius: "25px",
        height: "100%",
        width: "100%",
    },
    imagesliderContent : {
        width: "100%",
        "backdrop-filter": "blur(33px)",
        background: "#f53d741a",
        "background-blend-mode": "overlay",
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",

    },

}

export default ImageSlider
