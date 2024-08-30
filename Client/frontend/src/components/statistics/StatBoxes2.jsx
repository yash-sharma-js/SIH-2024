import React, { useState, useEffect } from 'react';

// Cities API endpoint
const citiesApi = 'http://127.0.0.1:5000/api/sorted'; // Update with your actual API endpoint

const StatBoxes2 = () => {
  const [cities, setCities] = useState([]);
  const [selectedMetric, setSelectedMetric] = useState('AQI');
  const [selectedTimeRange, setSelectedTimeRange] = useState('last-7-days');
  const [selectedCity, setSelectedCity] = useState('Mumbai');

  // Fetch cities from the API
  useEffect(() => {
    fetch(citiesApi)
      .then((response) => response.json())
      .then((data) => {
        // Ensure data is in the expected format
        if (Array.isArray(data)) {
          // Extract unique cities from the response
          const uniqueCities = [...new Set(data.map((record) => record.city))];
          setCities(uniqueCities);
        } else {
          console.error('Unexpected response format:', data);
        }
      })
      .catch((error) => console.error('Error fetching cities:', error));

      
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Historic Air Quality Data</h2>
      <p className="text-gray-600 mb-6">
        Explore insightful air pollution data for:
      </p>

      <div className="flex gap-4">
        {/* Data Type Dropdown */}
        <select
          className="p-4 border rounded"
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
        >
          <option value="AQI">AQI</option>
          <option value="NO2">NO2</option>
        </select>

        {/* Time Range Dropdown */}
        <select
          className="p-4 px-6 border rounded"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option value="last-7-days">Last 7 days</option>
          <option value="last-15-days">Last 15 days</option>
          <option value="last-30-days">Last 30 days</option>
        </select>

        {/* City Dropdown */}
        <select
          className="p-2 border rounded"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select City...</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      {/* Placeholder for the "Best AQI" and "Worst AQI" markers */}
      <div className="mt-6 flex flex-col gap-2">
        <div className="w-16 h-8 bg-green-500 text-white flex items-center justify-center rounded">
          Best AQI
        </div>
        <div className="w-16 h-8 bg-red-500 text-white flex items-center justify-center rounded">
          Worst AQI
        </div>
      </div>
    </div>
    

      
  );
};

export default StatBoxes2;