import { create } from "zustand";
import { Lookup } from "../types/lookup";

const addLookup = (lookups: Lookup[], lookup: Lookup) => [...lookups, lookup];

const removeLookups = () => [];

interface LookupStore {
  lookups: Lookup[];
  addLookup: (lookup: Lookup) => void;
  removeLookups: () => void;
}

const useLookup = create<LookupStore>(
  (set): LookupStore => ({
    lookups: [],
    addLookup: (lookup) =>
      set((state) => ({
        ...state,
        lookups: addLookup(state.lookups, lookup),
      })),
    removeLookups: () =>
      set((state) => ({
        ...state,
        lookups: removeLookups(),
      })),
  })
);

export default useLookup;
