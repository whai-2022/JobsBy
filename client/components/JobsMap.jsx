import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet'

function JobsMap({ position }) {
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
          {/* map over jobs, display job link and information */}
          Job Info
        </Popup>
      </Marker>
      <PositionHandler position={position}/>
    </MapContainer>
  )
}

function PositionHandler({ position }) {
  const map = useMap()

  useEffect(() => {
    map.flyTo(position)
  }, [position])

  return null
}

export default JobsMap