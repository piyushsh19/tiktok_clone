import React, { useRef, useState } from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter';

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
            <VideoFooter/>
        </div>
    )
}

export default Video;
