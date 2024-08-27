import React from 'react';

function Navbar() {
  return (
    <nav className="bg-transparent backdrop-blur-sm sticky top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6">
      <div className="text-gray-800 text-2xl font-semibold">Nitro</div>
      <ul className="flex space-x-4 ml-20  text-gray-800">
        
        <li className='hover:text-gray-400 cursor-pointer'>NO2 History</li>
        <li className='hover:text-gray-400 cursor-pointer'>AQI MAP</li>
        <li className='hover:text-gray-400 cursor-pointer'>Contact US</li>
      </ul>
      <div className="relative border border-gray-400 px-2 py-1">
        <input
          type="text"
          className="bg-transparent border-none text-gray-800 focus:outline-none  placeholder-gray-800"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute right-0 top-1/2 transform -translate-y-1/2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0 1 14 0z"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;