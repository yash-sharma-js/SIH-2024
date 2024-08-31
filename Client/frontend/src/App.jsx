import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import StatBoxes2 from './components/statistics/StatBoxes2.jsx';
import AQIHeatMap from './components/AqiHeatMap.jsx';
import HistoryNO2Component from './components/HistoryNO2.jsx';
import StartPage from './components/StartPage.jsx';
import FoliumMap from './components/FoliumMap.jsx';
import FoliumChoroplethMap from './components/FOliumChloroplethMap.jsx';
import StatBoxes3 from './components/statistics/StatBoxes3.jsx'
function App() {
  const no2DataDist = [
    { district: 'Mumbai', no2: 25 },
    { district: 'Pune', no2: 22 },
    { district: 'Nagpur', no2: 18 },
    { district: 'Thane', no2: 30 },
    // Add other districts' data here
  ];

  

  const no2Data = [
    { lat: 28.6139, lon: 77.2090, no2: 30 },  // New Delhi
    { lat: 19.0760, lon: 72.8777, no2: 25 },  // Mumbai
    { lat: 12.9716, lon: 77.5946, no2: 22 },  // Bengaluru
    { lat: 13.0827, lon: 80.2707, no2: 20 },  // Chennai
    { lat: 22.5726, lon: 88.3639, no2: 28 },  // Kolkata
    { lat: 23.0225, lon: 72.5714, no2: 18 },  // Ahmedabad
    { lat: 17.3850, lon: 78.4867, no2: 27 },  // Hyderabad
    { lat: 26.9124, lon: 75.7873, no2: 15 },  // Jaipur
    { lat: 21.1702, lon: 72.8311, no2: 19 },  // Surat
    { lat: 18.5204, lon: 73.8567, no2: 21 },  // Pune
    { lat: 22.7196, lon: 75.8577, no2: 17 },  // Indore
    { lat: 25.3176, lon: 82.9739, no2: 16 },  // Varanasi
    { lat: 15.3173, lon: 75.7139, no2: 14 },  // Hubli-Dharwad
    { lat: 21.2514, lon: 81.6296, no2: 20 },  // Raipur
    { lat: 26.4499, lon: 80.3319, no2: 23 },  // Kanpur
];

  return (
    <Router>
      <div className="flex flex-col justify-center">
        <Navbar className='z-50' />
        <div className='border border-gray-500'></div>

        <Routes>  {/* Use Routes instead of Switch for React Router v6 */}
          
          <Route path="/" element={<StartPage />} />
          {/* <Route path="/" element={<Map />} /> */}
          <Route path="/statistics" element={
          <div className="flex gap-8 p-6">
          <StatBoxes2 />
          <StatBoxes3 />
        </div> } />
          <Route path="/history-no2" element={<HistoryNO2Component />} />
          <Route path="/aqi-heatmap" element={<AQIHeatMap />} />
          <Route path="/map" element={<FoliumMap no2Data={no2Data} />} />
          {/* <Route path="/cmap" element={<FoliumChoroplethMap no2DataDist={no2DataDist} geoJsonData={geojsonData} />} /> */}
          
        </Routes>
      </div>
    </Router> 
  );
}

export default App;