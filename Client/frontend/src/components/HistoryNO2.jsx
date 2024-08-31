import React, { useState } from 'react';
import city1 from '../assets/city1.jpg';

// Mapping city names to a common image (or use different images for each city if available)
const cityImages = {
  Kolkata: city1,
  Delhi: city1,
  Bengaluru: city1,
  Hyderabad: city1,
  Chennai: city1,
  Mumbai: city1,
};

// Datasets for different time ranges
const LastDayNO2 = [
  { city: 'Kolkata', no2: 21.41, aqi: 85 },
  { city: 'Delhi', no2: 34.76, aqi: 73 },
  { city: 'Bengaluru', no2: 36.72, aqi: 55 },
  { city: 'Hyderabad', no2: 32.63, aqi: 52 },
  { city: 'Chennai', no2: 23.63, aqi: 48 },
  { city: 'Mumbai', no2: 18.01, aqi: 42 },
];

const LastWeekNO2 = [
  { city: 'Kolkata', no2: 22.41, aqi: 90 },
  { city: 'Delhi', no2: 35.00, aqi: 80 },
  { city: 'Bengaluru', no2: 37.12, aqi: 60 },
  { city: 'Hyderabad', no2: 31.53, aqi: 54 },
  { city: 'Chennai', no2: 24.13, aqi: 50 },
  { city: 'Mumbai', no2: 19.05, aqi: 46 },
];

const LastMonthNO2 = [
  { city: 'Kolkata', no2: 25.41, aqi: 95 },
  { city: 'Delhi', no2: 40.56, aqi: 85 },
  { city: 'Bengaluru', no2: 33.72, aqi: 58 },
  { city: 'Hyderabad', no2: 35.63, aqi: 68 },
  { city: 'Chennai', no2: 26.63, aqi: 53 },
  { city: 'Mumbai', no2: 20.21, aqi: 49 },
];

// Function to determine the quality index based on AQI
const getQualityIndex = (aqi) => {
  if (aqi <= 50) return 'Good';
  if (aqi <= 100) return 'Moderate';
  if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
  if (aqi <= 200) return 'Unhealthy';
  if (aqi <= 300) return 'Very Unhealthy';
  return 'Hazardous';
};

const HistoryNO2 = () => {
  const [timeRange, setTimeRange] = useState('Last Day');

  // Function to retrieve data based on the selected time range
  const getData = () => {
    switch (timeRange) {
      case 'Last Week':
        return LastWeekNO2;
      case 'Last Month':
        return LastMonthNO2;
      case 'Last Day':
      default:
        return LastDayNO2;
    }
  };

  return (
    <div className="mx-10 bg-transparent backdrop-blur-md border border-gray-500 rounded-xl shadow-lg p-6 mt-8 mb-10">
      <h2 className="text-2xl font-semibold text-gray-600">
        Historical NO2 Air Quality Data Of Metropolitan Cities
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Details about NO2 levels and AQI in metropolitan cities
      </p>
      <div className="flex items-center mb-4">
        <label htmlFor="timeRange" className="mr-2 text-gray-700">
          Select Time Range:
        </label>
        <select
          id="timeRange"
          className="border rounded-md px-2 py-1 text-gray-700"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="Last Day">Last Day</option>
          <option value="Last Week">Last Week</option>
          <option value="Last Month">Last Month</option>
        </select>
      </div>
      <table className="min-w-full bg-white border rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-50 text-left text-gray-700">
            <th className="py-2 px-4">CITY</th>
            <th className="py-2 px-4">NO2 (μg/m³)</th>
            <th className="py-2 px-4">AQI</th>
            <th className="py-2 px-4">Quality</th>
          </tr>
        </thead>
        <tbody>
          {getData().map((data, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 flex items-center">
                <img
                  src={cityImages[data.city]}
                  alt={data.city}
                  className="w-10 h-10 mr-2" // Updated size to larger values
                />
                {data.city}
              </td>
              <td className="py-2 px-4">{data.no2}</td>
              <td className="py-2 px-4">{data.aqi}</td>
              <td className="py-2 px-4">{getQualityIndex(data.aqi)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryNO2;