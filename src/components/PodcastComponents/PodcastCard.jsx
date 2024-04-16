import React, { useState, useRef, useEffect } from 'react';
import { FaCalendarAlt, FaUser, FaHeart, FaPlay, FaPause } from 'react-icons/fa';
import { IoMdHeartEmpty } from "react-icons/io";
import audiofile from "../../assets/dummy/dummyaudio.mp3";

export default function PodcastCard({ item }) {
    const [isLiked, setIsLiked] = useState(false); // State to track like status
    const [isPlaying, setIsPlaying] = useState(false); // State to track audio playing status
    const [currentTime, setCurrentTime] = useState(0); // State to track current time of audio
    const audioPlayer = useRef(null); // Ref for accessing the audio element
    const progressBar = useRef(null); // Ref for accessing the progress bar element

    useEffect(() => {
        // Update the current time of audio every second
        const interval = setInterval(() => {
            setCurrentTime(audioPlayer.current.currentTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleLikeClick = () => {
        setIsLiked(!isLiked); // Toggle like state on click
    };

    const handleAudioToggle = () => {
        if (isPlaying) {
            audioPlayer.current.pause(); // Pause the audio if it's playing
        } else {
            audioPlayer.current.play(); // Play the audio if it's paused
        }
        setIsPlaying(!isPlaying); // Toggle the playing state
    };

    const handleAudioEnded = () => {
        setIsPlaying(false); // Set playing state to false when audio ends
        setCurrentTime(0); // Reset current time
    };

    const handleProgressBarClick = (e) => {
        const rect = progressBar.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const clickedTime = (offsetX / rect.width) * audioPlayer.current.duration;
        audioPlayer.current.currentTime = clickedTime;
        setCurrentTime(clickedTime);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const calculateProgressBarWidth = () => {
        if (audioPlayer.current && audioPlayer.current.duration) {
            return (currentTime / audioPlayer.current.duration) * 100 + '%';
        } else {
            return '0';
        }
    };

    return (
        <div className="w-full grid grid-cols-12 rounded-md overflow-hidden shadow-lg my-5 border border-gray-200 ">
            <img className="col-span-3" src={item.image} alt="Episode" />
            <div className="col-span-9 p-5 flex flex-col justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                    <div className="flex items-center mr-4">
                        <FaCalendarAlt className="mr-1" color='#4361ee'/>
                        <span>12/04/2024</span>
                    </div>
                    <div className="flex items-center">
                        <FaUser className="mr-1" color='#4361ee'/>
                        <span>Anandi Ben</span>
                    </div>
                    <div className="flex items-center ml-auto cursor-pointer" onClick={handleLikeClick}>
                        {isLiked ? <FaHeart className="text-red-500 mr-1" size={30}  /> : <IoMdHeartEmpty className="mr-1 text-red-500" size={30}  />}
                    </div>
                </div>
                <div>
                    <div className="font-bold text-xl mb-2">Episode Title</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate magni animi cum doloribus facilis? Consequatur quos at similique voluptate veniam totam delectus pariatur, nemo nihil necessitatibus sunt autem, incidunt vel.
                    </p>
                </div>

                <div className="grid grid-cols-12 items-center mt-4">
                    <button onClick={handleAudioToggle} className="bg-transparent border-none focus:outline-none col-span-1">
                        {isPlaying ? <FaPause size={20} color='#4361ee' /> : <FaPlay size={20} color='#4361ee' />}
                    </button>
                    <div className="ml-3 w-full relative col-span-7" onClick={handleProgressBarClick} ref={progressBar} style={{ height: '5px', background: '#f1f1f1', borderRadius: '2px' }}>
                        <div style={{ width: calculateProgressBarWidth(), background: '#4361ee', height: '100%', borderRadius: '2px' }}></div>
                    </div>
                    <div className="mx-5 text-sm col-span-4">
                        <span>{formatTime(currentTime)}</span> / <span>{audioPlayer.current && formatTime(audioPlayer.current.duration)}</span>
                    </div>
                </div>
                <audio
                    ref={audioPlayer}
                    src={audiofile}
                    onEnded={handleAudioEnded}
                    onTimeUpdate={() => setCurrentTime(audioPlayer.current.currentTime)}
                    className='hidden'
                ></audio>

            </div>
        </div>
    );
}
