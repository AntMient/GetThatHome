import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ lat, lng, address }) => {
  const latitude = +lat;
  const longitude = +lng;
  const ubication = [latitude, longitude];

  return (
    <>
      <MapContainer
        style={{ width: "760px", height: "760px" }}
        center={ubication}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={ubication}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
