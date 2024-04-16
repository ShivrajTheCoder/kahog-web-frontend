import React from 'react';
import footerbg from "../../assets/layout/footer-bg.jpg";
import logo from "../../assets/homepage/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-cover bg-no-repeat relative mt-20 pt-20" style={{ backgroundImage: `url(${footerbg})` }}>
      <div className='bg-blue-500 absolute top-[-40px] right-56 justify-center px-10 py-5 rounded-3xl  grid grid-cols-2'>
        <div className='text-white flex flex-col'>
          <p className=' font-bold text-2xl '>Sign up for news letter</p>
          <p>Subscribe to our newsletter</p>
        </div>
        <div>
          <div className=' bg-white py-4 px-7 rounded-3xl'>
            <input type="email" name="" id="" placeholder='Enter Email' />
            <input type="submit" value="Subscribe" className='bg-blue-500 text-white py-1 px-3 rounded-3xl' />
          </div>
        </div>
      </div>
      <div className="py-8 px-4 text-white">
        <div className="mb-4 flex text-center items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto rounded-lg" />
          <p className=' text-lg font-semibold mx-3'>Made with love by Beatle Analytics | © All Rights Reserved </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
