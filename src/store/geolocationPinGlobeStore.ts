import { create } from "zustand";

interface GeolocationPinGlobeStore {
  isDisplayed: boolean;
  onToggle: () => void;
}

const useGeolocationPinGlobe = create<GeolocationPinGlobeStore>((set) => ({
  isDisplayed: true,
  onToggle: () =>
    set((state) => ({
      ...state,
      isDisplayed: !state.isDisplayed,
    })),
}));

export default useGeolocationPinGlobe;
