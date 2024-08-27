import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

const Map = () => {
  const [position, setPosition] = useState([19.0760, 72.8777]); // Initial position (Mumbai)

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]); // Update position with click location
      },
    });
    return null;
  };

  return (
<<<<<<< HEAD
    <div className=' '>
        <MapContainer className=' border border-black rounded-lg m-10 mr-10 ' center={[28.6139, 72.8777]} zoom={13}
            style={{
                height: '30rem',
                width : "95%"
            }}
        >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        
      />
      <Marker position={[28.6139, 77.2090]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
=======
    <div className='z-10'>
      <MapContainer 
        className='border  border-black rounded-lg m-10 mr-10'
        center={position}
        zoom={13}
        style={{
          height: '30rem',
          width: '95%',
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler />
        <Marker position={position}>
          <Popup>
            You clicked here: <br /> {position[0].toFixed(4)}, {position[1].toFixed(4)}.
          </Popup>
        </Marker>
      </MapContainer>
>>>>>>> 688bd0529ce13cc193c8acc0bb05c39172b276b9
    </div>
  );
}

export default Map;
