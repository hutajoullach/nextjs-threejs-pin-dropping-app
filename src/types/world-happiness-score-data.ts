// WorldHappinessScoreData interface
export interface WorldHappinessScoreData {
  countryName: string;
  region: string;
  happinessRank: string;
  happinessScore: string;
  standardError: string;
  economyGDPperCapita: string;
  family: string;
  healthLifeExpectancy: string;
  freedom: string;
  trustGovernmentCorruption: string;
  generosity: string;
  dystopiaResidual: string;
  year: string;
  geoData?: GeoData;
}

export interface GeoData {
  countryName: string;
  capitalName: string;
  capitalLat: string;
  capitalLong: string;
}
