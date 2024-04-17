import React, { useState } from 'react';
import { FaGreaterThan, FaAngleDown } from 'react-icons/fa';
import logo from '../../assets/homepage/logo.jpeg';
import { RiDashboard3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Karyashala from './../../screens/OriginalsScreen.jsx/Karyashala';

export default function Sidebar() {
  const [isAddOptionsVisible, setAddOptionsVisible] = useState({
    podcast: false,
    book: false,
    shop: false,
    workshop: false,
    social: false,
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
      <ul className="space-y-1 text-white font-semibold border-b border-white pb-5">
        <li className="w-full pt-4">
          <button className="grid grid-cols-5 w-full items-center" onClick={() => toggleAddOptions('podcast')}>
            <span className="col-span-4 text-start">Podcasts</span>
            <span>{isAddOptionsVisible.podcast ? <FaAngleDown size={20} /> : <FaGreaterThan size={15} />}</span>
          </button>
          {isAddOptionsVisible.podcast && (
            <div className="ml-4 mt-2 bg-white rounded-md text-blue-900 text-center">
              <Link to={'/dashboard/addpodcast'} className="block  w-full py-2 rounded-md">
                Upload Podcast
              </Link>
              <Link to={'/dashboard/addinterest'} className="block  w-full py-2 rounded-md">
                Add Interest
              </Link>
              <Link to={'/dashboard/addcategory'} className="block  w-full py-2 rounded-md">
                Add Category
              </Link>
              <Link to={'/dashboard/podcasts'} className="block  w-full py-2 rounded-md">
                View Podcasts
              </Link>
              {/* Add more options here */}
            </div>
          )}
        </li>
        <li className="w-full pt-4">
          <button className="grid grid-cols-5 w-full items-center" onClick={() => toggleAddOptions('book')}>
            <span className="col-span-4 text-start">Books</span>
            <span>{isAddOptionsVisible.book ? <FaAngleDown size={20} /> : <FaGreaterThan size={15} />}</span>
          </button>
          {isAddOptionsVisible.book && (
            <div className="ml-4 mt-2 bg-white rounded-md text-blue-900 text-center">
              <Link to={'/dashboard/addebook'} className="block  w-full py-2 rounded-md">
                Upload Ebook
              </Link>
              <Link to={'/dashboard/addaudiobook'} className="block  w-full py-2 rounded-md">
                Upload Audiobook
              </Link>
              <Link to={'/dashboard/ebooks'} className="block  w-full py-2 rounded-md">
                View Ebooks
              </Link>
              <Link to={'/dashboard/audiobooks'} className="block  w-full py-2 rounded-md">
                View Audiobooks
              </Link>
            </div>
          )}
        </li>
        <li className="w-full pt-4">
          <button className="grid grid-cols-5 w-full items-center" onClick={() => toggleAddOptions('shop')}>
            <span className="col-span-4 text-start">Shop</span>
            <span>{isAddOptionsVisible.shop ? <FaAngleDown size={20} /> : <FaGreaterThan size={15} />}</span>
          </button>
          {isAddOptionsVisible.shop && (
            <div className="ml-4 mt-2 bg-white rounded-md text-blue-900 text-center">
              <Link to={'/dashboard/addproduct'} className="block  w-full py-2 rounded-md">
                Add Product
              </Link>
              <Link to={'/dashboard/products'} className="block  w-full py-2 rounded-md">
                View Products
              </Link>
            </div>
          )}
        </li>
        <li className="w-full pt-4">
          <button className="grid grid-cols-5 w-full items-center" onClick={() => toggleAddOptions('workshop')}>
            <span className="col-span-4 text-start">Workshops</span>
            <span>{isAddOptionsVisible.workshop ? <FaAngleDown size={20} /> : <FaGreaterThan size={15} />}</span>
          </button>
          {isAddOptionsVisible.workshop && (
            <div className="ml-4 mt-2 bg-white rounded-md text-blue-900 text-center">
              <Link to={'/dashboard/addkaryashala'} className="block  w-full py-2 rounded-md">
                Add Karyashala
              </Link>
              <Link to={'/dashboard/addpathshala'} className="block  w-full py-2 rounded-md">
                Add Pathshala
              </Link>
              <Link to={'/dashboard/karyashala'} className="block  w-full py-2 rounded-md">
                View Karyashala
              </Link>
              <Link to={'/dashboard/pathshala'} className="block  w-full py-2 rounded-md">
                View Pahtshala
              </Link>
            </div>
          )}
        </li>
        <li className="w-full pt-4">
          <button className="grid grid-cols-5 w-full items-center" onClick={() => toggleAddOptions('social')}>
            <span className="col-span-4 text-start">Social</span>
            <span>{isAddOptionsVisible.social ? <FaAngleDown size={20} /> : <FaGreaterThan size={15} />}</span>
          </button>
          {isAddOptionsVisible.social && (
            <div className="ml-4 mt-2 bg-white rounded-md text-blue-900 text-center">
              <Link to={'/dashboard/addcommunity'} className="block  w-full py-2 rounded-md">
                Add Community
              </Link>
              <Link to={'/dashboard/addcircle'} className="block  w-full py-2 rounded-md">
                Add Circle
              </Link>
              <Link to={'/dashboard/addevents'} className="block  w-full py-2 rounded-md">
                Post Event
              </Link>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
