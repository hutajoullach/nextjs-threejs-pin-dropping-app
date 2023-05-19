import { useState, useEffect } from "react";

import { IPApiGeocode } from "../types/ip-api-geocode";

import axios, { AxiosResponse } from "axios";

const useIPLocation = () => {
  const [ipLocStatus, setIPLocStatus] = useState("");
  const [ipLocCoords, setIPLocCoords] = useState<IPApiGeocode>();

  const ipAPIUrl = "http://ip-api.com/json/?fields=61439";

  useEffect(() => {
    axios.get(ipAPIUrl).then((res: AxiosResponse<IPApiGeocode>) => {
      setIPLocStatus("success");
      setIPLocCoords(res.data);
    });
  }, []);

  return { ipLocStatus, ipLocCoords };
};

export default useIPLocation;
