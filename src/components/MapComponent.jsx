import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import CustomMarker from "../images/icon-location.svg";
import { useGlobalContext } from "./context";

const customMarker = new L.Icon({
  iconUrl: CustomMarker,
  iconSize: [35, 45],
});

function MapComponent() {
  const { data } = useGlobalContext();
  const { location } = data;
  const { lat, lng } = location;

  useEffect(() => {}, [data]);

  return (
    <div className="h-[65vh] w-full">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
        className="z-0"
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={customMarker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapComponent;
