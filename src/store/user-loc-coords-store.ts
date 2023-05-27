import { create } from "zustand";

type Coords = {
  lat: number;
  lng: number;
};

interface UserLocCoordsStore {
  coords: Coords;
  setCoords: (newCoords: Coords) => void;
  resetCoords: () => void;
}

const useUserLocCoords = create<UserLocCoordsStore>((set) => ({
  coords: {
    lat: -77.508333,
    lng: 164.754167,
  },
  setCoords: (newCoords: Coords) =>
    set((state) => ({
      ...state,
      coords: {
        lat: newCoords.lat,
        lng: newCoords.lng,
      },
    })),
  resetCoords: () =>
    set((state) => ({
      ...state,
      coords: {
        lat: -77.508333,
        lng: 164.754167,
      },
    })),
}));

export default useUserLocCoords;
