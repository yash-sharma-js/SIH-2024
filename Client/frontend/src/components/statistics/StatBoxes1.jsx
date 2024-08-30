import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // Import Axios

const StatBoxes1 = ({ latitude, longitude }) => {
  const [data, setData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Make an API call to your Flask backend using Axios
        const response = await axios.get(`/api`, {
          params: {
            city: latitude,
            longitude: longitude,
          },
        });

        setData(response.data); // Store the fetched data
      } catch (error) {
        setError(error.message); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchData();
  }, [latitude, longitude]); // Re-fetch data when latitude or longitude changes

  const cardVariants = {
    enter: {
      opacity: 0,
      scale: 0.8,
      y: 10,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const parentBoxVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const childBoxVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center mt-20 mx-10 gap-10"
      variants={parentBoxVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="backdrop-blur-md border flex justify-center items-center border-black w-3/6 h-60 rounded-lg"
        style={{
          background: "#ebe3e0",
          overflow: "hidden",
          position: "relative",
        }}
        variants={childBoxVariants}
      >
        <motion.div
          className="bg-white w-full h-full flex items-center justify-center rounded-lg shadow-md p-4 flex-col relative"
          style={{
            backgroundImage: `
              url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23f5ccd4' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23f5ccd4' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e"),
              url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23f5ccd4' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23f5ccd4' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e"),
              url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23f5ccd4' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23f5ccd4' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e")
              `,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            boxShadow: "0 0 2rem rgba(0, 0, 0, 0.15)",
          }}
          variants={cardVariants}
          initial="enter"
          animate="visible"
          exit="exit"
        >
          <div className="absolute inset-0 backdrop-blur-md rounded-lg" />
          <div className="relative z-10 flex flex-col items-center justify-center text-black text-lg font-semibold">
            <h2 className="text-2xl font-semibold mb-2">Current AQI</h2>

            {loading && <p>Loading...</p>} {/* Show loading state */}
            {error && <p>Error: {error}</p>} {/* Show error message */}

            {/* Show fetched data */}
            {data && (
              <>
                <p>City: {data.city}</p>
                {/* <p>NO2: {data.no2}</p> */}
                <p>AQI: {data.aqi}</p>
                <p>Year: {data.year}</p>
                <p>Quality: {data.aqi_quality}</p>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="backdrop-blur-md border flex justify-center items-center border-black w-3/6 h-60 rounded-lg"
        style={{
          background: "#ebe3e0",
          overflow: "hidden",
          position: "relative",
        }}
        variants={childBoxVariants}
      >
        <motion.div
          className="bg-white w-full h-full flex items-center justify-center rounded-lg shadow-md p-4 flex-col relative"
          style={{
            backgroundImage: `
              url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23f5ccd4' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23f5ccd4' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e"),
              url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23f5ccd4' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23f5ccd4' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e"),
              url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23f5ccd4' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23f5ccd4' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e")
              `,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            boxShadow: "0 0 2rem rgba(0, 0, 0, 0.15)",
          }}
          variants={cardVariants}
          initial="enter"
          animate="visible"
          exit="exit"
        >
          <div className="absolute inset-0 backdrop-blur-md rounded-lg" />
          <div className="relative z-10 flex flex-col items-center justify-center text-black text-lg font-semibold">
            <h2 className="text-2xl font-semibold mb-2">Current AQI</h2>

            {loading && <p>Loading...</p>} {/* Show loading state */}
            {error && <p>Error: {error}</p>} {/* Show error message */}

            {/* Show fetched data */}
            {data && (
              <>
                {/* <p>City: {data.city}</p> */}
                <p>NO2: {data.no2}</p>
                {/* <p>AQI: {data.aqi}</p> */}
                <p>Year: {data.year}</p>
                {/* <p>Quality: {data.aqi_quality}</p> */}
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StatBoxes1;