import { MapContainer, TileLayer } from 'react-leaflet'
import CraftMarker from './CraftMarker'
import '../styles/Map.css'

function CraftMap({ crafts }) {
  // ヨーロッパの中心座標（ドイツ・フランクフルト付近）
  const center = [50.1109, 8.6821]
  const zoom = 5

  return (
    <div className="map-container">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {crafts.map(craft => (
          <CraftMarker key={craft.id} craft={craft} />
        ))}
      </MapContainer>
    </div>
  )
}

export default CraftMap
