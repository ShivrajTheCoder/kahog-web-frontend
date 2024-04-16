import React from 'react';
import homeplaycover from "../../assets/homepage/homeplaycover.jpg";
import hero from "../../assets/homepage/hero-bg.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={hero}
        alt="Banner background"
        className="w-full h-full object-cover"
      />

      <img src={homeplaycover} alt="homecover" className='w-96 h-96 absolute top-20 right-20 rounded-md' />
      
      <div className='absolute bottom-0 w-full h-20 bg-blue-300 opacity-30 grid grid-cols-12 px-10'>
        <div className=' col-span-4'>
          Name
        </div>
        <div className=' col-span-6'>Audio</div>
        <div className=' col-span-2'>Buttons</div>
      </div>
    </div>
  );
};

export default Banner;
