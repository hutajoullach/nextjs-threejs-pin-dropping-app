import { useState, useRef } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";

const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  // const mapRef = useRef();

  return (
    <MapContainer
      center={center}
      zoom={ZOOM_LEVEL}
      // ref={mapRef}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg"
    >
      <TileLayer
        url={osm.maptiler.url}
        attribution={osm.maptiler.attribution}
      />
      <Marker position={[51, -0.09]}></Marker>
    </MapContainer>
  );
};

export default BasicMap;
