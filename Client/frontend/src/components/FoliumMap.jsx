import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './foliummap.css'; // Ensure this CSS file is correctly linked

const FoliumMap = ({ no2Data }) => {
  return (
    <div className='map-container'>
      {/* Center the map on India by default */}
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '80vh', width: '80vw' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {no2Data.map((data, index) => (
          <CircleMarker
            key={index}
            center={[data.lat, data.lon]}
            radius={data.no2 / 10} // Scale radius for visualization
            color='blue'
            fillColor='blue'
            fillOpacity={0.5}
          >
            <Popup>
              <div>
                <strong>Location:</strong> {`Lat: ${data.lat}, Lon: ${data.lon}`}<br />
                <strong>NO2 Level:</strong> {data.no2}
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}

export default FoliumMap;
