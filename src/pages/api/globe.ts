import { NextApiRequest, NextApiResponse } from "next";

import { GeoJsonCollection } from "../../types/geo-json-collection";
import { GlobeData } from "../../types/globe-data";

import axios, { AxiosResponse } from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    const globeDataUrl = `https://raw.githubusercontent.com/iamanas20/geojson/main/map11.geojson`;

    let globeData: GlobeData = {
      countries: { features: [] },
      points: { features: [] },
    };

    const response: AxiosResponse<GeoJsonCollection<object>[]> =
      await axios.get(globeDataUrl);
    if (
      Array.isArray(response.data) &&
      response.data[0] !== undefined &&
      response.data[1] !== undefined
    ) {
      globeData = {
        countries: { features: response.data[0].features },
        points: { features: response.data[1].features },
      };
    }

    return res.status(200).json(globeData);
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
}
