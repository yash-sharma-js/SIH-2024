import React from 'react';
import { Link } from 'react-router-dom';
import projectLogo from '../assets/project_logo.svg'
function Navbar() {
  return (
    <>
    <nav className="bg-transparent backdrop-blur-sm sticky top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6">
      <Link to='/'>
      <div className="text-gray-800 text-2xl border border-black p-2 font-semibold">VAYU-MITRA</div>
      {/* <div className=''><img className='' src={projectLogo} alt="" /></div> */}
      </Link>
      <ul className="flex space-x-4 ml-20  text-gray-800">
        
        <li className='hover:text-gray-700 hover:font-bold text-lg cursor-pointer'>
          <Link to='/'>Home</Link> </li>
        <li className='hover:text-gray-700 hover:font-bold text-lg cursor-pointer'>
          <Link to='history-no2'>NO2 History</Link> </li>
        <li className='hover:text-gray-700 hover:font-bold text-lg cursor-pointer'>
        <Link to='aqi-heatmap'>AQI MAP</Link></li>
        <li className='hover:text-gray-700 hover:font-bold text-lg cursor-pointer'>
        <Link to='statistics'>Statistics</Link></li>
        <li className='hover:text-gray-700 hover:font-bold text-lg cursor-pointer'>
        <Link to='map'>Map</Link></li>
        <li className='hover:text-gray-700 hover:font-bold text-lg cursor-pointer'>
        <Link to='cmap'>ChloroMap</Link></li>
        
      </ul>
      <div className="relative border border-gray-400 rounded-md  px-4 py-1">
        <input
          type="text"
          className="bg-transparent border-none text-gray-800 focus:outline-none  placeholder-gray-800"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute  right-0 top-1/2 transform -translate-y-1/2"
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
    
    </>
  );
}

export default Navbar;