import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";

const distance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

type GeolocationPinWithoutUser =
  RouterOutputs["geolocationPins"]["getAll"][number][GeolocationPin];

const useGroupByProximity = (data: object[], threshold: number) => {
  const groups = [];
  const filteredData = [];
  for (let i = 0; i < data.length; i++) {
    const group = [data[i]];
    for (let j = i + 1; j < data.length; j++) {
      if (
        distance(data[i].lat, data[i].lon, data[j].lat, data[j].lon) <=
        threshold
      ) {
        group.push(data[j]);
      }
    }
    if (group.length > 1) {
      groups.push(group);
    } else {
      filteredData.push(data[i]);
    }
  }
  return { filteredData, groups };
};

export default useGroupByProximity;

// const myData = [
//   { name: "Location 1", lat: 40.7128, lon: -74.006 },
//   { name: "Location 2", lat: 51.5074, lon: -0.1278 },
//   { name: "Location 3", lat: 35.6895, lon: 139.6917 },
// ];

// const { filteredData, groups: proximityCoordsGroups } = useGroupByProximity(myData, 500); // Group data within 500 km of each other

// console.log(filteredData);
// console.log(proximityCoordsGroups);
