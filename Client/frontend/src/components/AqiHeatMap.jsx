import React, { useState } from 'react';
import { format, getDaysInMonth, getDay, startOfMonth } from 'date-fns';

const AqiHeatMap = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedType, setSelectedType] = useState('NO₂');

  const months = [
    { name: 'Jan', number: 1 },
    { name: 'Feb', number: 2 },
    { name: 'Mar', number: 3 },
    { name: 'Apr', number: 4 },
    { name: 'May', number: 5 },
    { name: 'Jun', number: 6 },
    { name: 'Jul', number: 7 },
    { name: 'Aug', number: 8 },
    { name: 'Sep', number: 9 },
    { name: 'Oct', number: 10 },
    { name: 'Nov', number: 11 },
    { name: 'Dec', number: 12 }
  ];

  const aqiLevels = [
    { range: [0, 50], color: 'bg-blue-100' },
    { range: [51, 100], color: 'bg-blue-200' },
    { range: [101, 200], color: 'bg-blue-300' },
    { range: [201, 300], color: 'bg-blue-400' },
    { range: [301, 400], color: 'bg-blue-500' },
    { range: [401, 500], color: 'bg-blue-600' },
  ];

  const no2Levels = [
    { range: [0, 50], color: 'bg-green-100' },
    { range: [51, 100], color: 'bg-green-200' },
    { range: [101, 200], color: 'bg-green-300' },
    { range: [201, 300], color: 'bg-green-400' },
    { range: [301, 400], color: 'bg-green-500' },
    { range: [401, 500], color: 'bg-green-600' },
  ];

  const generateRandomValue = () => Math.floor(Math.random() * 501);

  const getColorForValue = (value, levels) => {
    for (const level of levels) {
      if (value >= level.range[0] && value <= level.range[1]) {
        return level.color;
      }
    }
    return 'bg-gray-300'; // Default color if not matched
  };

  const currentLevels = selectedType === 'AQI' ? aqiLevels : no2Levels;

  const renderCalendar = (monthNumber) => {
    const daysInMonth = getDaysInMonth(new Date(selectedYear, monthNumber - 1));
    const startDay = getDay(startOfMonth(new Date(selectedYear, monthNumber - 1)));

    return (
      <div className="border border-gray-300 rounded-lg p-4 bg-white">
        <div className="font-bold text-lg mb-2">{months.find(m => m.number === monthNumber).name}</div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="text-center font-medium">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}</div>
          ))}
          {Array.from({ length: startDay }).map((_, i) => (
            <div key={`empty-${i}`} className="w-8 h-8" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, dayIndex) => {
            const dayNumber = dayIndex + 1;
            const value = generateRandomValue();
            const date = `${selectedYear}-${monthNumber}-${dayNumber}`;
            return (
              <div
                key={dayIndex}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${getColorForValue(value, currentLevels)}`}
                title={`${selectedType}: ${value}, Date: ${date}`}
              >
                <span className="text-xs font-medium">{dayNumber}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-lg shadow-md mx-10 mb-10 mt-10 p-4 border border-black bg-transparent">
      <h2 className="text-xl font-bold mb-4">{selectedType} Scale</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <label className="mr-2 font-medium">Select Year:</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              {/* Add more years as needed */}
            </select>
          </div>
          <div className="flex items-center">
            <label className="mr-2 font-medium">Select Type:</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="AQI">AQI</option>
              <option value="NO₂">NO₂</option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {currentLevels.map((level, index) => (
            <div key={index} className={`w-20 h-6 border border-black ${level.color} flex items-center justify-center text-black text-sm`}>
              {`${level.range[0]} - ${level.range[1]}`}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        {months.map(month => renderCalendar(month.number))}
      </div>
    </div>
  );
};

export default AqiHeatMap;
