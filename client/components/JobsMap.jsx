import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet'
import { Link } from 'react-router-dom'

function JobsMap({ position, jobs }) {
  return (
    <MapContainer
      center={position}
      zoom={11}
      scrollWheelZoom={true}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Your Location
        </Popup>
      </Marker>
      {jobs.map((job) => (
        <Marker position={[+job.lat, +job.lon]} key={`marker-${job.id}`}>
          <Popup>
            {/* map over jobs, display job link and information */}
            <h2>{job.title}</h2>
            <Link to={`/alljobs/${job.id}`}>View Job</Link>
          </Popup>
        </Marker>
      ))}
      <PositionHandler position={position} />
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
