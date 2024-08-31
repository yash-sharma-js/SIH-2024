import React, { useState, useEffect } from "react";
import axios from "axios";
// import LeafletMap from "./LeafletMap";

const StatBoxes1 = () => {
  const [no2Data, setNo2Data] = useState([]);
  const [aqiData, setAqiData] = useState({
    city: "",
    no2: 0,
    aqi: 0,
    year: 0,
    aqi_quality: "",
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch_data = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api');
      // Parse each JSON string in the response array
      const parsedData = response.data.map(item => JSON.parse(item));
      setData(parsedData);

      // Extract and set NO2 data
      const extractedNo2Data = parsedData.map(item => ({
        year: item.year,
        no2: item.no2,
      }));
      setNo2Data(extractedNo2Data);

      // Optionally, set the first item for demonstration
      setAqiData(parsedData[0]); // Example: setting the first item

    } catch (error) {
      console.error('There was an error fetching the data!', error);
      setError('There was an error fetching the data.');
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetch_data();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <p className="text-xl font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-200 p-4 rounded-lg shadow-lg">
          <p className="text-xl font-semibold text-red-700">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-20 mx-10 gap-10">
      <div className="flex justify-center items-center w-full gap-10">
        <div
          className="backdrop-blur-md border flex justify-center items-center border-black w-3/6 h-60 rounded-lg"
          style={{ background: "#ebe3e0", overflow: "hidden", position: "relative" }}
        >
          <div className="bg-white w-full h-full flex items-center justify-start rounded-lg shadow-md p-4 flex-col relative">
            <h3 className="text-2xl font-bold underline m-2">{aqiData.city}</h3>
            <p className="text-gray-700">Air Quality Index (AQI): {aqiData.aqi}</p>
            <p className="text-gray-700">Air Quality: {aqiData.aqi_quality}</p>
          </div>
        </div>
        <div
          className="backdrop-blur-md border flex justify-center items-center border-black w-3/6 h-60 rounded-lg"
          style={{ background: "#ebe3e0", overflow: "hidden", position: "relative" }}
        >
          <div className="bg-white w-full h-full flex items-center justify-start rounded-lg shadow-md p-4 flex-col relative">
            <h3 className="font-bold text-2xl underline m-2">NO2 Data Sorted by Year</h3>
            {no2Data.length > 0 ? (
              <ul>
                {no2Data.map((item) => (
                  <li key={item.year}>
                    <span className="text-gray-700">Year: {item.year}</span>
                    <span className="text-gray-700"> - NO2: {item.no2}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No data available.</p>
            )}
          </div>
        </div>
      </div>
      {/* <LeafletMap data={data} /> */}
    </div>
  );
};

export default StatBoxes1;
