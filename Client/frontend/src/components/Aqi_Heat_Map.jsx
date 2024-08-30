import React from 'react';

const AQIHeatMap = () => {
  return (
    <div className="mx-10 mt-40 mb-10 flex items-center justify-between bg-transparent p-4 rounded-lg shadow-md border border-black ">
      <div className="flex flex-col items-start backdrop-blur-lg">
        <h2 className="text-xl font-bold">AQI Heat Map</h2>
        <div className="mt-2">
          <label htmlFor="year-select" className="mr-2 text-lg">Select Year:</label>
          <select id="year-select" className="border rounded p-1">
            <option value="">--Select--</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-20 h-6 bg-green-500 flex items-center justify-center text-white text-sm">0 - 50</div>
        <div className="w-20 h-6 bg-yellow-400 flex items-center justify-center text-white text-sm">51 - 100</div>
        <div className="w-20 h-6 bg-orange-500 flex items-center justify-center text-white text-sm">101 - 200</div>
        <div className="w-20 h-6 bg-pink-500 flex items-center justify-center text-white text-sm">201 - 300</div>
        <div className="w-20 h-6 bg-purple-500 flex items-center justify-center text-white text-sm">301 - 400</div>
        <div className="w-20 h-6 bg-red-500 flex items-center justify-center text-white text-sm">401 - 500</div>
      </div>
    </div>
  );
};

export default AQIHeatMap;
