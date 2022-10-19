import React, { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import CustomMarker from "../images/icon-location.svg";
import { useGlobalContext } from "./context";

const customMarker = new L.Icon({
  iconUrl: CustomMarker,
  iconSize: [35, 45],
});

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.flyTo(center, zoom);
  return null;
};

function MapComponent() {
  const { data } = useGlobalContext();
  const { ip, location } = data;
  const { city, lat, lng } = location;
  const center = [lat, lng];

  useEffect(() => {}, [data]);

  return (
    <div className="h-[65vh] w-full">
      <MapContainer
        key={JSON.stringify(lat, lng)}
        center={center}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={false}
        className="z-0"
        style={{ height: "100%", width: "100%" }}
      >
        <ChangeView center={center} zoom={13} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={customMarker}>
          <Popup>
            {ip}
            <br />
            {city}
          </Popup>
        </Marker>
        <ZoomControl
          position="bottomleft"
          zoomInTitle="zoom in"
          zoomOutTitle="zoom out"
        />
      </MapContainer>
    </div>
  );
}

export default MapComponent;
