import { NextApiRequest, NextApiResponse } from "next";

import { IPApiGeocode } from "../../types/ip-api-geocode";

import axios, { AxiosResponse } from "axios";
import requestIp from "request-ip";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return res.status(405).end();

  // const detectedIp = "24.48.0.1";
  let detectedIp = requestIp.getClientIp(req);
  if (detectedIp !== null && detectedIp.substring(0, 7) === "::ffff:") {
    detectedIp = detectedIp.substring(7);
  }

  try {
    if (!detectedIp || detectedIp === null) {
      throw new Error("ip data not available");
    }

    // if (detectedIp === "127.0.0.1") {
    //   throw new Error("you are on localhost");
    // }

    const ipAPIUrl = `http://ip-api.com/json/${detectedIp}`;

    const ipData = await axios
      .get(ipAPIUrl)
      .then((res: AxiosResponse<IPApiGeocode>) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    return res.status(200).json(ipData);
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
}
