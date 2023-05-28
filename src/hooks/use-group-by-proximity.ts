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

type GeolocationPinWithUser = RouterOutputs["geolocationPins"]["getAll"];

const useGroupByProximity = (
  data: GeolocationPinWithUser,
  threshold: number
) => {
  const groups: GeolocationPinWithUser[] = [];
  const filteredData: GeolocationPinWithUser = [];

  data.forEach((item, i) => {
    if (!filteredData.includes(item)) {
      const group = [item];
      data.slice(i + 1).forEach((otherItem) => {
        if (
          distance(
            parseFloat(item.geolocationPin.lat),
            parseFloat(item.geolocationPin.lon),
            parseFloat(otherItem.geolocationPin.lat),
            parseFloat(otherItem.geolocationPin.lon)
          ) <= threshold &&
          !filteredData.includes(otherItem)
        ) {
          group.push(otherItem);
        }
      });
      if (group.length > 1) {
        groups.push(group);
      } else {
        filteredData.push(item);
      }
    }
  });

  return { filteredData, groups };
};

export default useGroupByProximity;
