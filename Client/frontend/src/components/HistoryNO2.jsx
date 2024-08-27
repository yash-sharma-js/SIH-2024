import React from 'react';

const HistoryNO2 = [
  { city: 'Kolkata', no2: 20.41, aqi: 84 },
  { city: 'Delhi', no2: 33.76, aqi: 72 },
  { city: 'Bengaluru', no2: 35.72, aqi: 54 },
  { city: 'Hyderabad', no2: 31.63, aqi: 51 },
  { city: 'Chennai', no2: 22.63, aqi: 47 },
  { city: 'Mumbai', no2: 17.01, aqi: 40 },
];

const getQualityIndex = (aqi) => {
  if (aqi <= 50) return 'Good';
  if (aqi <= 100) return 'Moderate';
  if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
  if (aqi <= 200) return 'Unhealthy';
  if (aqi <= 300) return 'Very Unhealthy';
  return 'Hazardous';
};

const HistoryNO2Component = () => {
  return (
    <div className=" mx-10 bg-transparent backdrop-blur-md border border-gray-500 rounded-xl shadow-lg p-6 mt-8 mb-10">
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
        >
          <option>Last Day</option>
          <option>Last Week</option>
          <option>Last Month</option>
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
          {HistoryNO2.map((data, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{data.city}</td>
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

export default HistoryNO2Component;
