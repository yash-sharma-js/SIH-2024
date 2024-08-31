import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const cityData = [
  { city: 'Kolkata', no2: 20.41, aqi: 84 },
  { city: 'Delhi', no2: 33.76, aqi: 72 },
  { city: 'Bengaluru', no2: 35.72, aqi: 54 },
  { city: 'Hyderabad', no2: 31.63, aqi: 51 },
  { city: 'Chennai', no2: 22.63, aqi: 47 },
  { city: 'Mumbai', no2: 17.01, aqi: 40 },
];

const HistoricAirQualityData = () => {
  const [selectedRange, setSelectedRange] = useState('last-24-hours');
  const [showGraph, setShowGraph] = useState('NO₂');
  const [graphType, setGraphType] = useState('line');
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState('');

  const handleCity1Change = (e) => {
    setCity1(e.target.value);
  };

  const handleCity2Change = (e) => {
    setCity2(e.target.value);
  };

  const handleGraphToggle = (type) => {
    setShowGraph(type);
  };

  const handleGraphTypeChange = (e) => {
    setGraphType(e.target.value);
  };

  const filteredData = cityData.filter(city => [city1, city2].includes(city.city));

  const dataForGraph = (key) => {
    return filteredData.map((data) => ({
      city: data.city,
      value: data[key],
    }));
  };

  const getExtremeValues = (key) => {
    const dataKey = key === 'NO₂' ? 'no2' : 'aqi';
    const data = filteredData.length > 0 ? filteredData : cityData;

    const values = data.map((city) => ({
      city: city.city,
      value: city[dataKey],
    }));

    const minValue = Math.min(...values.map((v) => v.value));
    const maxValue = Math.max(...values.map((v) => v.value));

    const minCity = values.find((v) => v.value === minValue);
    const maxCity = values.find((v) => v.value === maxValue);

    return { minCity, maxCity };
  };

  const { minCity, maxCity } = getExtremeValues(showGraph);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full relative">
      <h2 className="text-xl font-semibold mb-2">Historic Air Quality Data</h2>
      <p className="text-sm text-gray-500 mb-4">
        Explore insightful air pollution data for:
      </p>
      <ul className="list-disc ml-5 mb-4">
        <li>Last 24 hours</li>
        <li>Last 7 days</li>
        <li>Last 1 month</li>
      </ul>
      <div className="flex gap-2 mb-4">
        <select
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="last-24-hours">Last 24 Hours</option>
          <option value="last-7-days">Last 7 Days</option>
          <option value="last-month">Last Month</option>
        </select>
        <div className="flex gap-2">
          <select value={city1} onChange={handleCity1Change} className="border p-2 rounded">
            <option value="">Select City 1</option>
            {cityData.map((city) => (
              <option key={city.city} value={city.city}>
                {city.city}
              </option>
            ))}
          </select>
          <select value={city2} onChange={handleCity2Change} className="border p-2 rounded">
            <option value="" >Select City 2</option>
            {cityData.map((city) => (
              <option key={city.city} value={city.city}>
                {city.city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Boxes for Min and Max Values */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h4 className="text-md font-semibold">City with Lowest {showGraph}</h4>
          <p className="text-lg">{minCity ? minCity.city : 'N/A'}</p>
          <p className="text-lg">{minCity ? minCity.value.toFixed(2) : 'N/A'}</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          <h4 className="text-md font-semibold">City with Highest {showGraph}</h4>
          <p className="text-lg">{maxCity ? maxCity.city : 'N/A'}</p>
          <p className="text-lg">{maxCity ? maxCity.value.toFixed(2) : 'N/A'}</p>
        </div>
      </div>

      {(city1 && city2) && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Comparison Graphs</h3>
          <div className="mb-4">
            <select
              value={showGraph}
              onChange={(e) => handleGraphToggle(e.target.value)}
              className="border p-2 rounded mr-2"
            >
              <option value="NO₂">Show NO₂ Graph</option>
              <option value="AQI">Show AQI Graph</option>
            </select>
            <select
              value={graphType}
              onChange={handleGraphTypeChange}
              className="border p-2 rounded"
            >
              <option value="bar">Bar Graph</option>
              <option value="line">Line Graph</option>
            </select>
          </div>

          {/* NO₂ Graph */}
          {showGraph === 'NO₂' && graphType === 'line' && (
            <div className="mb-6">
              <h4 className="text-md font-semibold mb-2">NO₂ Levels Comparison</h4>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={dataForGraph('no2')}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" name="NO₂ (μg/m³)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {showGraph === 'AQI' && graphType === 'line' && (
            <div className="mb-6">
              <h4 className="text-md font-semibold mb-2">AQI Levels Comparison</h4>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={dataForGraph('aqi')}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#82ca9d" name="AQI" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* NO₂ Bar Graph */}
          {showGraph === 'NO₂' && graphType === 'bar' && (
            <div className="mb-6">
              <h4 className="text-md font-semibold mb-2">NO₂ Levels Comparison</h4>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={dataForGraph('no2')}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" name="NO₂ (μg/m³)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* AQI Bar Graph */}
          {showGraph === 'AQI' && graphType === 'bar' && (
            <div className="mb-6">
              <h4 className="text-md font-semibold mb-2">AQI Levels Comparison</h4>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={dataForGraph('aqi')}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#82ca9d" name="AQI" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HistoricAirQualityData;