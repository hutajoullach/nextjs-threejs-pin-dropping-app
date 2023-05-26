import { NextApiRequest, NextApiResponse } from "next";

import { BigdataReverseGeocode } from "../../types/bigdata-reverse-geocode";

import axios, { AxiosResponse } from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { coords } = req.body;

    if (!coords || !coords.latitude || !coords.longitude) {
      throw new Error("no coords provided");
    }

    const geoAPIUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.latitude}&longitude=${coords.longitude}&localityLanguage=en`;

    const reverseGeocode = await axios
      .get(geoAPIUrl)
      .then((res: AxiosResponse<BigdataReverseGeocode>) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    return res.status(200).json(reverseGeocode);
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
}
