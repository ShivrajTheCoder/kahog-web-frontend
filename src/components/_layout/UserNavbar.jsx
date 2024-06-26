import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBell } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";

export default function UserNavbar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showCont, setShowCont] = useState(false);
  const [showNoti,setShowNoti]=useState(false);
  const linkStyle = "text-white mx-4 relative font-bold text-lg";
  const underlineStyle = "absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition duration-500 ease-in-out";

  const handleMouseEnter = (index) => {
    setHoveredLink(index);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div className="bg-black flex justify-center py-4">
      <Link to="/" className={linkStyle} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
        Kaho G
        <div className={hoveredLink === 0 ? underlineStyle + " bg-white" : underlineStyle}></div>
      </Link>
      <Link to="/podcasts" className={linkStyle} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
        Podcasts
        <div className={hoveredLink === 1 ? underlineStyle + " bg-white" : underlineStyle}></div>
      </Link>
      <Link to="/ebooks" className={linkStyle} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
        E-Books
        <div className={hoveredLink === 2 ? underlineStyle + " bg-white" : underlineStyle}></div>
      </Link>
      <Link to="/audiobooks" className={linkStyle} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
        Audiobooks
        <div className={hoveredLink === 3 ? underlineStyle + " bg-white" : underlineStyle}></div>
      </Link>
      <Link to="/haat" className={linkStyle} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
        Haat
        <div className={hoveredLink === 4 ? underlineStyle + " bg-white" : underlineStyle}></div>
      </Link>
      <Link to="/events" className={linkStyle} onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
        Events
        <div className={hoveredLink === 5 ? underlineStyle + " bg-white" : underlineStyle}></div>
      </Link>
      <div className='ml-auto flex ' >
        <RiMessage2Fill color='white' size={25} className='mx-2' />
        <div className='ml-auto s relative' onMouseEnter={() => setShowNoti(true)} onClick={() => {
          setShowNoti(prev => !prev);
        }}>
          <FaBell color='white' size={25} className='mx-2' />
          {showNoti && (
            <div className="absolute top-full right-0 bg-white shadow-md rounded-md overflow-hidden mt-1 z-50 w-32">
              
            </div>
          )}
        </div>
        <div className='ml-auto mr-10 relative' onMouseEnter={() => setShowCont(true)} onClick={() => {
          setShowCont(prev => !prev);
        }}>
          <GiHamburgerMenu color='white' size={30} />
          {showCont && (
            <div className="absolute top-full right-0 bg-white shadow-md rounded-md overflow-hidden mt-1 z-50 w-32">
              {/* List elements with appropriate styles */}
              <ul className="list-none py-2 px-4">
                <li className="hover:bg-gray-100">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link to={"/karyashala"}>Karyasha</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link to={"/pathshala"}>Pathshala</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link to={"/circles&communities"}>Circles & Communities</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link to={"/coaches"}>Coaches</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link to={"/following"}>Following</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link to={"/channels"}>Channels</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link to={"/creatorstudio"}>Creator Studio</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
