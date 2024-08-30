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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/sorted", {
          responseType: "text",
        });

        // Clean up unwanted characters and parse JSON
        let cleanedData;
        try {
          cleanedData = response.data.replace(/\\+/g, ""); // Remove backslashes
          cleanedData = cleanedData.replace(/[\u0000-\u001F]+/g, ""); // Remove control characters
          cleanedData = cleanedData.replace(/(\r\n|\n|\r)/gm, ""); // Remove newlines
          cleanedData = cleanedData.trim();
          console.log(cleanedData);

          // Attempt to parse JSON
          const parsedData = JSON.parse(cleanedData);

          // Set the cleaned and parsed data to state
          setData(parsedData);

          if (Array.isArray(parsedData)) {
            const extractedNo2Data = parsedData.map((item) => ({
              year: item.year,
              no2: item.no2,
            }));
            setNo2Data(extractedNo2Data);

            setAqiData({
              city: parsedData[0].city,
              no2: parsedData[0].no2,
              aqi: parsedData[0].aqi,
              year: parsedData[0].year,
              aqi_quality: parsedData[0].aqi_quality,
            });
          } else {
            console.error("Unexpected response format:", parsedData);
          }
        } catch (parseError) {
          console.error("JSON Parsing Error:", parseError.message);
          setError("Invalid JSON format received from API.");
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || error}</p>;

  return (
    <div className="flex flex-col items-center mt-20 mx-10 gap-10">
      <div className="flex justify-center items-center w-full gap-10">
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
