// GeoJsonCollection interface
export interface GeoJsonCollection<T> {
  type: string;
  features: Feature<T>[];
  bbox: number[];
  [Symbol.iterator](): IterableIterator<Feature<T>>;
}

export interface Feature<T> {
  type: string;
  properties: Properties<T>;
  bbox: number[];
  geometry: Geometry;
  [Symbol.iterator](): IterableIterator<T>;
}

export interface Properties<T> {
  ADMIN?: string;
  POP_EST?: number;
  type?: string;
  latitude?: T;
  longitude?: T;
}

export interface Geometry {
  type: string;
  coordinates: any[];
}
