import React from 'react';
import "./VideoFooter.css";

function VideoFooter() {
    return (
        <div className="videofooter">
            <div className="videofooter__text">
               <h3>@piyushsh19</h3>
               <p>This is a description</p> 
            </div>
            <img className="videofooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt =" image"/>
        </div>
    )
}

export default VideoFooter
