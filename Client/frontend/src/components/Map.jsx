import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const Map = () => {
  return (
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
    </div>
  )
}

export default Map