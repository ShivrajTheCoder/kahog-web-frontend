import React from 'react';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

export default function AdminNavbar() {
    return (
        <div className="bg-white flex justify-between items-center p-4">
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search for..."
                    className="border bg-gray-100 border-gray-300 rounded-l-md py-2 px-3 w-80" 
                />
                <button className='bg-[#2D54C6] rounded-r-md px-4 py-3 h-full'>
                    <FaSearch className="text-white" />
                </button>
            </div>
            <div className="flex items-center">
                <FaBell className="text-gray-600 mr-4" />
                <FaUser className="text-gray-600" />
            </div>
        </div>
    );
}
