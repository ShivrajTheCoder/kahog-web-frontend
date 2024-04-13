import React from 'react';

export default function Sidebar() {
  return (
    <div className="min-h-screen w-1/4 bg-gray-300 shadow-md  p-4 z-50">
      <ul className="space-y-4">
        <li>
          <a href="#" className="block text-gray-800 hover:text-black">Link 1</a>
        </li>
        <li>
          <a href="#" className="block text-gray-800 hover:text-black">Link 2</a>
        </li>
        <li>
          <a href="#" className="block text-gray-800 hover:text-black">Link 3</a>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}
