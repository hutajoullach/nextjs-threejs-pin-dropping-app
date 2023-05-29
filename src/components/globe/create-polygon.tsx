import { Feature } from "../../types/geo-json-collection";
import { WorldHappinessScoreData } from "../../types/world-happiness-score-data";
import { Lookup } from "../../types/lookup";

import number from "numeral";
import chroma from "chroma-js";

let lookup: Lookup[] = [];

export const createPolygonCapColor = (
  obj: object,
  category: string | null,
  happinessScoreData: WorldHappinessScoreData[]
) => {
  const d = obj as Feature<string>;

  const colorScale = chroma.scale(["red", "yellow"]);

  if (category !== "health") return "#FF7F7F";

  if (lookup === undefined || lookup.length == 0) {
    (happinessScoreData as WorldHappinessScoreData[]).forEach((d) => {
      const countryData = { [d.countryName]: d };
      lookup.push(countryData);
    });
  }

  let lookedUpCountryData;
  for (const object of lookup) {
    for (const key in object) {
      if (key === d?.properties?.ADMIN) {
        lookedUpCountryData = object[key];
      }
    }
  }

  if (typeof lookedUpCountryData === "undefined") return "";

  return colorScale(parseInt(lookedUpCountryData?.happinessScore) * 0.1)
    .brighten(0.5)
    .hex();
};

export const createPolygonLabel = (
  obj: object,
  category: string | null,
  happinessScoreData: WorldHappinessScoreData[]
) => {
  const d = obj as Feature<string>;

  if (category !== "health") return "";

  if (lookup === undefined || lookup.length == 0) {
    (happinessScoreData as WorldHappinessScoreData[]).forEach((d) => {
      const countryData = { [d.countryName]: d };
      lookup.push(countryData);
    });
  }

  let lookedUpCountryData;
  for (const object of lookup) {
    for (const key in object) {
      if (key === d?.properties?.ADMIN) {
        lookedUpCountryData = object[key];
      }
    }
  }

  return `
    <div style="position: relative; z-index: 4; min-width: 108px; padding: 10px 14px;background: #fff;border: 1px solid #E5E5E5;box-shadow: 0px 2px 20px rgba(32, 32, 35, 0.13);border-radius: 4px; text-align: left;">
    <div style="font-family: 'Open sans', sans-serif; margin-bottom:10px;font-weight: 600;font-size: 13px;line-height: 16px;text-transform: capitalize;color: #2D3032;">
        ${d?.properties?.ADMIN}
    </div>
        <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            Visitors: ${number(d?.properties?.POP_EST).format("0a")}
        </div>
        <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            Happiness Score: ${lookedUpCountryData?.happinessScore}
        </div>
        <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            Happiness Rank: ${lookedUpCountryData?.happinessRank}
        </div>
        <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            Life Expectancy: ${lookedUpCountryData?.healthLifeExpectancy}
        </div>
        <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            Generosity: ${lookedUpCountryData?.generosity}
        </div>
        <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            Freedom: ${lookedUpCountryData?.freedom}
        </div>
        <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            TrustGovernmentCorruption: ${
              lookedUpCountryData?.trustGovernmentCorruption
            }
        </div>
        <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            DystopiaResidual: ${lookedUpCountryData?.dystopiaResidual}
        </div>
        <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            DataYear: ${lookedUpCountryData?.year}
        </div>

    </div>
`;
};
