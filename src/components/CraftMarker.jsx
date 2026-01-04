import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import CraftPopup from './CraftPopup'

// カスタムマーカーアイコンの設定
const craftIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

function CraftMarker({ craft }) {
  return (
    <Marker
      position={craft.coordinates}
      icon={craftIcon}
    >
      <Popup>
        <CraftPopup craft={craft} />
      </Popup>
    </Marker>
  )
}

export default CraftMarker
