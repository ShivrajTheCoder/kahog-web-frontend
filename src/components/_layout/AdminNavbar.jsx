import React, { useState } from 'react';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { adminLogout } from '../../redux/reducers/adminReducer';


export default function AdminNavbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigation
    const dispatch=useDispatch();
    const toggleDropdown = () => {
        setShowDropdown(prevState => !prevState);
    };

    const handleLogout = () => {
        // Add your logout logic here
        // For example: dispatching an action to log out the user
        // After logging out, navigate to the specified route
        dispatch(adminLogout());
        navigate('/'); // Replace 'Home' with the desired route
    };

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
            <div className="relative flex">
                <FaBell className="text-gray-600 mr-4 cursor-pointer" />
                <div className="relative inline-block text-left">
                    <div>
                        <FaUser className="text-gray-600 cursor-pointer" onClick={toggleDropdown} />
                    </div>
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                            <div className="py-1">
                                <button
                                    onClick={handleLogout}
                                    className="block w-full px-4 py-2  text-red-500 font-bold text-md hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
