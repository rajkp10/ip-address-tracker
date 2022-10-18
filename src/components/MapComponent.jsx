import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import CustomMarker from "../images/icon-location.svg";

const customMarker = new L.Icon({
  iconUrl: CustomMarker,
  iconSize: [35, 45],
});

function MapComponent() {
  return (
    <div className="h-[65vh] w-full">
      <MapContainer
        center={[37.40599, -122.078514]}
        zoom={13}
        scrollWheelZoom={false}
        className="z-0"
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.40599, -122.078514]} icon={customMarker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapComponent;
