import React, { useState } from 'react';
import { FaGreaterThan, FaAngleDown } from 'react-icons/fa';
import logo from '../../assets/homepage/logo.jpeg';
import { RiDashboard3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isAddOptionsVisible, setAddOptionsVisible] = useState({
    podcast: false,
    book: false,
    shop: false,
    workshop:false,
    community: false,
    circles: false,
    category: false,
    interests: false,
    events: false,
  });

  const toggleAddOptions = (option) => {
    setAddOptionsVisible({ ...isAddOptionsVisible, [option]: !isAddOptionsVisible[option] });
  };

  return (
    <div className="min-h-screen w-1/4 bg-[#2D54C6] shadow-md p-4 z-50">
      <h1 className="text-white font-bold text-xl mb-4 flex items-center border-white border-b pb-5">
        <span>
          <img src={logo} alt="kahog logo" className="h-10 w-10 rounded-md mx-2" />
        </span>{' '}
        Kaho G Admin
      </h1>
      <button className="text-white w-full py-2 flex items-center pb-3 border-white border-b">
        <RiDashboard3Fill color="#ffffff" size={30} />
        <span className="mx-1 font-semibold">Dashboard</span>
      </button>
      <h3 className="text-blue-200 text-sm font-thin my-2">UPLOADS</h3>
      <ul className="space-y-1 text-white font-semibold">
        <li  className="w-full my-4">
          <button className="grid grid-cols-5 w-full items-center" onClick={() => toggleAddOptions('podcast')}>
            <span className="col-span-4 text-start">Podcasts</span>
            <span>{isAddOptionsVisible.podcast ? <FaAngleDown size={20} /> : <FaGreaterThan size={15} />}</span>
          </button>
          {isAddOptionsVisible.podcast && (
            <div className="ml-4 mt-2 bg-white rounded-md text-blue-900 text-center">
              <Link to={"/dashboard/addpodcast" } className="block  w-full py-2 rounded-md">Upload Podcast</Link>
              {/* Add more options here */}
            </div>
          )}
        </li>
        <li  className="w-full my-4">
          <button className="grid grid-cols-5 w-full items-center" onClick={() => toggleAddOptions('book')}>
            <span className="col-span-4 text-start">Books</span>
            <span>{isAddOptionsVisible.book ? <FaAngleDown size={20} /> : <FaGreaterThan size={15} />}</span>
          </button>
          {isAddOptionsVisible.book && (
            <div className="ml-4 mt-2 bg-white rounded-md text-blue-900 text-center">
              <Link to={"/dashboard/addebook" } className="block  w-full py-2 rounded-md">Upload Ebook</Link>
              <Link to={"/dashboard/addaudiobook" } className="block  w-full py-2 rounded-md">Upload Audiobook</Link>
            </div>
          )}
        </li>
        <li  className="w-full my-4">
          <button className="grid grid-cols-5 w-full items-center" onClick={() => toggleAddOptions('shop')}>
            <span className="col-span-4 text-start">Shop</span>
            <span>{isAddOptionsVisible.shop ? <FaAngleDown size={20} /> : <FaGreaterThan size={15} />}</span>
          </button>
          {isAddOptionsVisible.book && (
            <div className="ml-4 mt-2 bg-white rounded-md text-blue-900 text-center">
              {/* Add options for books */}
            </div>
          )}
        </li>
        <li  className="w-full my-4">
          <button className="grid grid-cols-5 w-full items-center" onClick={() => toggleAddOptions('book')}>
            <span className="col-span-4 text-start">Workshops</span>
            <span>{isAddOptionsVisible.workshop? <FaAngleDown size={20} /> : <FaGreaterThan size={15} />}</span>
          </button>
          {isAddOptionsVisible.book && (
            <div className="ml-4 mt-2 bg-white rounded-md text-blue-900 text-center">
              {/* Add options for books */}
            </div>
          )}
        </li>
        <li  className="w-full my-4">
          <button className="grid grid-cols-5 w-full items-center" onClick={() => toggleAddOptions('book')}>
            <span className="col-span-4 text-start">Social</span>
            <span>{isAddOptionsVisible.book ? <FaAngleDown size={20} /> : <FaGreaterThan size={15} />}</span>
          </button>
          {isAddOptionsVisible.book && (
            <div className="ml-4 mt-2 bg-white rounded-md text-blue-900 text-center">
              {/* Add options for books */}
            </div>
          )}
        </li>
        {/* <li li className="w-full my-4">
          <button className="grid grid-cols-5 w-full items-center" onClick={() => toggleAddOptions('book')}>
            <span className="col-span-4 text-start">Social</span>
            <span>{isAddOptionsVisible.book ? <FaAngleDown size={20} /> : <FaGreaterThan size={15} />}</span>
          </button>
          {isAddOptionsVisible.book && (
            <div className="ml-4 mt-2 bg-white rounded-md text-blue-900 text-center">
          
            </div>
          )}
        </li> */}
      
      </ul>
    </div>
  );
}
