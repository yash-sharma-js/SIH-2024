import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';

import StatBoxes2 from './components/statistics/StatBoxes2.jsx';
import AQIHeatMap from './components/Aqi_Heat_Map.jsx';
import HistoryNO2Component from './components/HistoryNO2.jsx';
import StartPage from './components/StartPage.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center">
        <Navbar className='z-50' />
        <div className='border border-gray-500'></div>

        <Routes>  {/* Use Routes instead of Switch for React Router v6 */}
          
          <Route path="/" element={<StartPage />} />
          {/* <Route path="/" element={<Map />} /> */}
          <Route path="/statistics" element={<StatBoxes2 />} />
          <Route path="/history-no2" element={<HistoryNO2Component />} />
          <Route path="/aqi-heatmap" element={<AQIHeatMap />} />
          {/* Add more routes for other components as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;