import React, { useRef, useState } from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

function Video({
    url,
    channel,
    description,
    songs,
    likes,
    messages,
    shares
}) {
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
            src={url}></video>
            <VideoFooter channel={channel} description={description} songs={songs}/>
            <VideoSideBar likes={likes} messages={messages} shares={shares}/> 
        </div>
    )
}

export default Video;
