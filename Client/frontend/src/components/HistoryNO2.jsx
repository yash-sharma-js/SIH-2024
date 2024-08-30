import React, { useState, useEffect } from "react";
import axios from "axios";

const HistoryNO2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // List of cities to include
  const citiesToInclude = ["Delhi", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Kolkata"];

  // API endpoint
  const apiEndpoint = "http://127.0.0.1:5000/api";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);

        // Filter data to include only specified cities
        const filteredData = response.data.filter((item) =>
          citiesToInclude.includes(item.city)
        );

        // Ensure filtered data has required properties
        if (filteredData.every((item) => item.city && item.no2 && item.aqi && item.aqi_quality)) {
          setData(filteredData);
          setLoading(false);
        } else {
          console.error("Unexpected response format: Missing required properties in some data objects.");
        }
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const getQualityIndex = (aqi) => {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Unhealthy for Sensitive Groups";
    if (aqi <= 200) return "Unhealthy";
    if (aqi <= 300) return "Very Unhealthy";
    return "Hazardous";
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
          {data.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{item.city}</td>
              <td className="py-2 px-4">{item.no2}</td>
              <td className="py-2 px-4">{item.aqi}</td>
              <td className="py-2 px-4">{getQualityIndex(item.aqi)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryNO2;