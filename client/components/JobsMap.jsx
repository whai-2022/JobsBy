import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import { useMapEvents } from 'react-leaflet/hooks'

function JobsMap({ position }) {
  // const position = [-36.856912, 174.763399]
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default JobsMap