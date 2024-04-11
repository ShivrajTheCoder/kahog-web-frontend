import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="https://wallpapers.com/images/featured-full/peacock-0knadm4fkubovbfr.jpg"
        alt="Banner background"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-75"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Kaho G</h1>
        <h2 className="text-white text-lg md:text-xl">Your media partner</h2>
      </div>
    </div>
  );
};

export default Banner;
