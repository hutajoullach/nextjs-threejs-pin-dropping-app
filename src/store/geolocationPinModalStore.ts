import { create } from "zustand";

interface GeolocationPinModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useGeolocationPinModal = create<GeolocationPinModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useGeolocationPinModal;
