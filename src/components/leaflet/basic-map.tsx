import { useEffect, useState, useRef } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

type LocationMarkerProps = {
  userLocCoords: { lat: number; lng: number };
};

const LocationMarker = ({ userLocCoords }: LocationMarkerProps) => {
  const [bbox, setBbox] = useState([]);
  const map = useMap();

  useEffect(() => {
    map.flyTo([userLocCoords.lat, userLocCoords.lng], map.getZoom());
  }, [userLocCoords]);

  return (
    <Marker position={[userLocCoords.lat, userLocCoords.lng]}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

type BasicMapProps = {
  userLocCoords: { lat: number; lng: number };
};

const BasicMap = ({ userLocCoords }: BasicMapProps) => {
  const ZOOM_LEVEL = 9;

  // console.log(userLocCoords);

  return (
    <MapContainer
      center={userLocCoords}
      zoom={ZOOM_LEVEL}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg"
    >
      <TileLayer
        url={osm.maptiler.url}
        attribution={osm.maptiler.attribution}
      />

      <LocationMarker userLocCoords={userLocCoords} />
    </MapContainer>
  );
};

export default BasicMap;
