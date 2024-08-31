// FoliumChoroplethMap.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './foliummap.css';  // Include your CSS for map styling

const FoliumChoroplethMap = ({ geoJsonData, no2DataDist }) => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    // Merge NO2 data with GeoJSON data
    const mergedGeoJson = { ...geoJsonData };

    // Assuming your geoJsonData has 'properties' with a 'district' key matching the no2Data
    mergedGeoJson.features = mergedGeoJson.features.map(feature => {
      const districtName = feature.properties.district; // Update key according to GeoJSON
      const no2Info = no2DataDist.find(data => data.district === districtName);

      return {
        ...feature,
        properties: {
          ...feature.properties,
          no2: no2Info ? no2Info.no2 : 0, // Set NO2 value, default to 0 if not found
        },
      };
    });

    setMapData(mergedGeoJson);
  }, [geoJsonData, no2DataDist]);

  const getColor = (no2) => {
    return no2 > 30 ? '#800026' :
           no2 > 20 ? '#BD0026' :
           no2 > 10 ? '#E31A1C' :
           no2 > 5  ? '#FC4E2A' :
                      '#FFEDA0';
  };

  const style = (feature) => {
    return {
      fillColor: getColor(feature.properties.no2),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  };

  return (
    <div className="map-container">
      <MapContainer center={[22.5937, 78.9629]} zoom={5} style={{ height: '80vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {mapData && <GeoJSON data={mapData} style={style} />}
      </MapContainer>
    </div>
  );
};

export default FoliumChoroplethMap;
