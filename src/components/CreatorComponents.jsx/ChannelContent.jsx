import React, { useState } from 'react';

export default function ChannelContent() {
    const [activeSection, setActiveSection] = useState('audios'); // Initial active section

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap  mb-4">
                <button
                    className={`text-gray-700 py-2 px-4 rounded-md focus:outline-none bg-gray-300  mx-5 ${activeSection === 'audios' ? 'bg-gray-500 text-white' : ''
                        }`}
                    onClick={() => handleSectionClick('audios')}
                >
                    Audios
                </button>
                <button
                    className={`text-gray-700 py-2 px-4 rounded-md focus:outline-none   bg-gray-300  ${activeSection === 'videos' ? 'bg-gray-500 text-white' : ''
                        }`}
                    onClick={() => handleSectionClick('videos')}
                >
                    Videos
                </button>
            </div>

            {activeSection === 'audios' && (
                <>
                    <h3 className=' text-lg font-semibold my-5'>Audios</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Replace with your audio content cards */}
                        <div className="shadow-md rounded-lg overflow-hidden">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktP3DzS-iZdMLfITImqCGSscOTuV0fOXiTA&s" alt="Audio Thumbnail" className="w-full h-24 object-cover" />
                            <div className="p-4">
                                <h2>Audio Title</h2>
                                <p className="text-gray-600">Audio Description</p>
                                <button className="bg-black w-full text-white font-bold py-2 px-4 rounded-md">Listen Now</button>
                            </div>
                        </div>
                        <div className="shadow-md rounded-lg overflow-hidden">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktP3DzS-iZdMLfITImqCGSscOTuV0fOXiTA&s" alt="Audio Thumbnail" className="w-full h-24 object-cover" />
                            <div className="p-4">
                                <h2>Another Audio Title</h2>
                                <p className="text-gray-600">Another Audio Description</p>
                                <button className="bg-black w-full text-white font-bold py-2 px-4 rounded-md">Listen Now</button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {activeSection === 'videos' && (
                <>
                <h3 className=' text-lg font-semibold my-5'>Videos</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Replace with your video content cards */}
                        <div className="shadow-md rounded-lg overflow-hidden">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktP3DzS-iZdMLfITImqCGSscOTuV0fOXiTA&s" alt="Video Thumbnail" className="w-full h-24 object-cover" />
                            <div className="p-4">
                                <h2>Video Title</h2>
                                <p className="text-gray-600">Video Description</p>
                                <button className="bg-black w-full text-white font-bold py-2 px-4 rounded-md">Watch Now</button>
                            </div>
                        </div>
                        <div className="shadow-md rounded-lg overflow-hidden">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktP3DzS-iZdMLfITImqCGSscOTuV0fOXiTA&s" alt="Video Thumbnail" className="w-full h-24 object-cover" />
                            <div className="p-4">
                                <h2>Another Video Title</h2>
                                <p className="text-gray-600">Another Video Description</p>
                                <button className="bg-black w-full text-white font-bold py-2 px-4 rounded-md">Watch Now</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
