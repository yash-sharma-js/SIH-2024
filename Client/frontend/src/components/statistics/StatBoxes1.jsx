import React, { useState, useEffect } from "react";
import axios from "axios";

const StatBoxes1 = ({ latitude, longitude }) => {
  const [no2Data, setNo2Data] = useState([]);
  const [aqiData, setAqiData] = useState({
    city: "",
    no2: 0,
    aqi: 0,
    year: 0,
    aqi_quality: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api");
        const responseData = response.data;
        // console.log(responseData, response)

        // Ensure data is in the expected format
        if (Array.isArray(responseData)) {
          // Extract relevant data from the response
          const extractedNo2Data = responseData.map((item) => ({
            year: item.year,
            no2: item.no2,
          }));
          setNo2Data(extractedNo2Data);

          // Extract AQI data assuming the first element represents the current AQI
          setAqiData({
            city: responseData[0].city,
            no2: responseData[0].no2,
            aqi: responseData[0].aqi,
            year: responseData[0].year,
            aqi_quality: responseData[0].aqi_quality,
          });
        } else {
          console.error("Unexpected response format:", responseData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <>
    <div className="flex justify-center items-center mt-20 mx-10 gap-10">
      {/* AQI Data Box */}
      <div
        className="backdrop-blur-md border flex justify-center items-center border-black w-3/6 h-60 rounded-lg"
        style={{
          background: "#ebe3e0",
          overflow: "hidden",
          position: "relative",
        }}
        >
        <div className="bg-white w-full h-full flex items-center justify-center rounded-lg shadow-md p-4 flex-col relative">
          <h3 className="text-xl font-semibold mb-2">{aqiData.city}</h3>
          <p className="text-gray-700">
            Air Quality Index (AQI): {aqiData.aqi}
          </p>
          <p className="text-gray-700">Air Quality: {aqiData.aqi_quality}</p>
        </div>
      </div>

      {/* NO2 Data Box */}
      <div
        className="backdrop-blur-md border flex justify-center items-center border-black w-3/6 h-60 rounded-lg"
        style={{
          background: "#ebe3e0",
          overflow: "hidden",
          position: "relative",
        }}
        >
        <div className="bg-white w-full h-full flex items-center justify-center rounded-lg shadow-md p-4 flex-col relative">
          <h3>NO2 Data Sorted by Year</h3>
          {no2Data.length > 0 ? (
            <ul>
              {no2Data.map((item) => (
                <li key={item.year}>
                  {" "}
                  {/* Use item.year as the key */}
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
    
          </>
  );
};

export default StatBoxes1;
