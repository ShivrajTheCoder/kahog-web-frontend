import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='w-full bg-black text-white shadow-2xl'>
      <div className='mx-3 md:mx-10 pb-20'>
        <div className='bg-white  rounded-b-3xl shadow-2xl shadow-slate-700 md:py-20 py-7 md:px-4 text-black'>
          <div className='flex justify-center mb-10'>
            <div className='flex flex-col md:flex-row justify-center gap-10'>
              <div>
                <div><h3 className='text-sm font-bold uppercase tracking-wider'>Discover us</h3></div>
                <div className='flex justify-center flex-col mt-4 '>
                  <Link to="/about" className='hover:scale-110 hover:text-black uppercase tracking-wider text-sm'>About Us</Link>
                  <Link to="/team" className='hover:scale-110 hover:text-black uppercase tracking-wider text-sm'>Our Team</Link>
                </div>
              </div>
              <div className='md:border-l-2 border-slate-300 md:px-2'>
                <div><h3 className='text-sm font-bold uppercase tracking-wider'>Support</h3></div>
                <div className='flex flex-col mt-4'>
                  <Link to="/contact" className='hover:scale-110 hover:text-black uppercase tracking-wider text-sm'>Contact Us</Link>
                  <Link to="/how-to-book" className='hover:scale-110 hover:text-black uppercase tracking-wider text-sm'>How To Book</Link>
                </div>
              </div>
              <div className='md:border-l-2 border-slate-300 md:px-2'>
                <div><h3 className='text-sm font-bold uppercase tracking-wider'>Resources</h3></div>
                <div className='flex flex-col mt-4'>
                  <Link to="/guest-reviews" className='hover:scale-110 hover:text-black uppercase tracking-wider text-sm'>Guest Reviews</Link>
                  <Link to="/blog" className='hover:scale-110 hover:text-black uppercase tracking-wider text-sm'>Blog</Link>
                </div>
              </div>
            </div>
          </div>
          <div className='md:p-10'>
            <div className='flex justify-center items-center py-3'>
              <h3 className='text-white'> ___________ </h3>
              <h3 className='text-white text-xl'> kahoG </h3>
              <h3 className='text-white'> ___________ </h3>
            </div>
            <div className='flex justify-center gap-6'>
              <a href="https://www.instagram.com/kahog" target="_blank" rel="noopener noreferrer" className="hover:scale-110 text-2xl"><BsInstagram /></a>
              <a href="https://wa.link/kahog" target="_blank" rel="noopener noreferrer" className="hover:scale-110 text-2xl"><BsWhatsapp /></a>
            </div>
            <div className='mt-3 flex justify-center items-center'>
              <a href="tel:8181813626" className='flex items-center gap-2 text-blue-500'><FiPhoneCall />8181813626</a>
            </div>
            <div className='text-center mt-7'>
              <small className='text-md font-bold'>© 2023 kahoG All rights reserved.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
