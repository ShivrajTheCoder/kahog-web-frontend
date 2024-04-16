import React, { useState, useRef } from 'react';
import dummyvideo from "../../assets/dummy/dummyvideo.mp4";
import dummyimage from "../../assets/dummy/dummyimage.png";

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleWatchNowClick = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <div className="video-container">
            <div className='relative'>
                <img
                    src={"https://res.cloudinary.com/dushmacr8/image/upload/v1686558008/samples/sheep.jpg"}
                    alt="Video Podcast"
                    className="video-preview w-64 h-64 rounded-lg shadow-md"
                    onClick={handleWatchNowClick}
                    style={{ display: isPlaying ? 'none' : 'block' }}
                />
                {!isPlaying && (
                <button className="absolute top-28 left-20" onClick={handleWatchNowClick}>
                    Watch Now
                </button>
            )}
            </div>
            <video ref={videoRef} src={dummyvideo} controls className={isPlaying ? 'video-player' : 'video-player hidden'} />
            
        </div>
    );
};

export default VideoPlayer;
