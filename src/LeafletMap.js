import React from "react";
import { Marker, useMap } from "react-leaflet";
import { Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import "./Map.css";
import L from "leaflet";
import location from "./assets/location.svg";

function LeafletMap({ center, zoom }) {
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  const locationIcon = new L.Icon({
    iconUrl: location,
    iconSize: [35, 45],
  });

  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={locationIcon}>
          
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafletMap;
