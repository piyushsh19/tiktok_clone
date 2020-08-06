import React, { useRef, useState } from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

function Video() {
    const [playing, setPlay] = useState(false);
    const videoRef = useRef(null); 

    const onVideoPress =() => {
        if (playing) {
        videoRef.current.pause();
        setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    };

    return (
        <div className="video">
            <video 
            loop
            onClick={onVideoPress}
            ref={videoRef}
            className="video__player" 
            src=""></video>
            <VideoFooter channel="@piyush19" description="the music video" song="DHEMME DEHMME"/>
            <VideoSideBar/> 
        </div>
    )
}

export default Video;
