import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import StatBoxes1 from "./statistics/StatBoxes1";

// A component to handle map click events
const MapClickHandler = ({ setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]); // Update position with click location
    },
  });
  return null;
};

const Map = () => {
  const [position, setPosition] = useState([19.076, 72.8777]); // Initial position (Mumbai)

  // Bounding box coordinates for India
  const indiaBounds = [
    [6.5546079, 68.1113787], // Southwest corner
    [35.6745457, 97.395561], // Northeast corner
  ];

  return (
    <div className="flex justify-center items-center py-10 ">
      <div className="w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        <MapContainer
          className="border border-black rounded-lg m-10 mr-10"
          center={position}
          zoom={5}
          style={{
            height: "30rem",
            width: "95%",
          }}
          maxBounds={indiaBounds}
          maxBoundsViscosity={1.0} // Keeps the map from moving outside the bounds
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          
          {/* Add Map Click Handler */}
          <MapClickHandler setPosition={setPosition} />

          {/* Marker based on click position */}
          <Marker position={position}>
            <Popup>You clicked here</Popup>
          </Marker>

          {/* Display StatBoxes1 component with updated coordinates */}
          <StatBoxes1 latitude={position[0]} longitude={position[1]} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
