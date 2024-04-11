import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserNavbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyle = "text-white mx-4 relative font-bold text-lg";

  const underlineStyle = "absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition duration-500 ease-in-out";

  const handleMouseEnter = (index) => {
    setHoveredLink(index);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div className="bg-[#003049] flex justify-center py-4">
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
    </div>
  );
}
