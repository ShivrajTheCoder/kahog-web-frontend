import React, { useState, useEffect } from 'react';
import { FaVideo } from "react-icons/fa";
import { MdAudiotrack } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import axios from 'axios';

export default function DashboardHome() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl=import.meta.env.VITE_API_URL;  
  useEffect(() => {
    const fetchDashInfo = async () => {
      try {
        const response = await axios.get(`${apiUrl}/others/getdashinfo`); // Assuming the API endpoint is '/api/dashinfo'
        setInfo(response.data.dashInfo);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDashInfo();
  }, []);

  return (
    <div className='px-20 py-10'>
      <h1 className='font-bold text-2xl text-gray-400' >Dashboard</h1>
      <section className='grid grid-cols-4 my-5 gap-5'>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <DashboardItem title="Total Videos" count={info.audioBooksCount} icon={<FaVideo size={50} color='#adb5bd' />} />
            <DashboardItem title="Total Audios" count={info.ebooksCount} icon={<MdAudiotrack size={50} color='#adb5bd' />} />
            <DashboardItem title="Audio Books" count={info.shopItemsCount} icon={<FaPlay size={40} color='#adb5bd' />} />
            <DashboardItem title="E Books" count={info.podcastsCount} icon={<FaBook size={50} color='#adb5bd' />} />
            <DashboardItem title="Users" count={10} icon={<FaUser size={50} color='#adb5bd' />} />
            <DashboardItem title="Orders" count={1} icon={<FaShoppingCart size={50} color='#adb5bd' />} />
          </>
        )}
      </section>
    </div>
  );
}

const DashboardItem = ({ title, count, icon }) => (
  <div className='flex items-center rounded-md shadow-md bg-white p-5 w-full border-l-4 border-blue-400'>
    <div className=' flex flex-col mr-5 w-full'>
      <h3 className='text-lg font-semibold text-blue-400'>{title}</h3>
      <div className='my-3 font-bold text-xl text-gray-400'>{count}</div>
    </div>
    {icon}
  </div>
);
