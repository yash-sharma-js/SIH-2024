import React, { useState } from 'react';

const LeastPollutedCities = () => {
  const [selectedRange, setSelectedRange] = useState('last-day');
  const [selectedType, setSelectedType] = useState('AQI');

  const cities = [
    {
      rank: 1,
      city: 'Nashik',
      aqi: { 'last-day': 18, 'last-week': 20, 'last-month': 22 },
      no2: { 'last-day': 10, 'last-week': 12, 'last-month': 14 },
    },
    {
      rank: 2,
      city: 'Thiruvananthapuram',
      aqi: { 'last-day': 19, 'last-week': 21, 'last-month': 23 },
      no2: { 'last-day': 12, 'last-week': 14, 'last-month': 16 },
    },
    {
      rank: 3,
      city: 'Baran',
      aqi: { 'last-day': 20, 'last-week': 22, 'last-month': 24 },
      no2: { 'last-day': 14, 'last-week': 16, 'last-month': 18 },
    },
    {
      rank: 4,
      city: 'Tirupati',
      aqi: { 'last-day': 22, 'last-week': 24, 'last-month': 26 },
      no2: { 'last-day': 16, 'last-week': 18, 'last-month': 20 },
    },
    {
      rank: 5,
      city: 'Sasaram',
      aqi: { 'last-day': 22, 'last-week': 23, 'last-month': 25 },
      no2: { 'last-day': 18, 'last-week': 20, 'last-month': 22 },
    },
    {
      rank: 6,
      city: 'Charkhi Dadri',
      aqi: { 'last-day': 22, 'last-week': 24, 'last-month': 26 },
      no2: { 'last-day': 20, 'last-week': 22, 'last-month': 24 },
    },
    // Add more cities as needed
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full ">
      <h2 className="text-xl font-semibold mb-2">Least Polluted Cities in India</h2>
      <p className="text-sm text-gray-500 mb-4">Real Time Best city rankings</p>
      <div className="flex items-center mb-4">
        <select
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
          className="border p-2 rounded mr-2"
        >
          <option value="last-day">Last Day</option>
          <option value="last-week">Last Week</option>
          <option value="last-month">Last Month</option>
        </select>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="AQI">AQI</option>
          <option value="NO₂">NO₂</option>
        </select>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600">
            <th className="py-2">RANK</th>
            <th className="py-2">CITY</th>
            <th className="py-2">{selectedType}</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.rank} className="border-t">
              <td className="py-2">{city.rank}</td>
              <td className="py-2">{city.city}</td>
              <td className="py-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {selectedType === 'AQI'
                    ? city.aqi[selectedRange]
                    : city.no2[selectedRange]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeastPollutedCities;