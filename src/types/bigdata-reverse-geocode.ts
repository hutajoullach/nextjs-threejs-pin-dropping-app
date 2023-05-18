// BigdataReverseGeocode interface
export interface BigdataReverseGeocode {
  latitude: number;
  longitude: number;
  continent: string;
  lookupSource: string;
  continentCode: string;
  localityLanguageRequested: string;
  city: string;
  countryName: string;
  countryCode: string;
  postcode: string;
  principalSubdivision: string;
  principalSubdivisionCode: string;
  plusCode: string;
  locality: string;
  localityInfo: LocalityInfo;
}

export interface LocalityInfo {
  LikelyLand: boolean;
  administrative: Administrative[];
  informative: Informative[];
}

export interface Administrative {
  name: string;
  description?: string;
  order: number;
  adminLevel: number;
  isoCode?: string;
  wikidataId?: string;
  geonameId?: number;
}

export interface Informative {
  name: string;
  description?: string;
  order: number;
  isoCode?: string;
  wikidataId?: string;
  geonameId?: number;
}
