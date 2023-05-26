import { useState, useEffect } from "react";

import { IPApiGeocode } from "../types/ip-api-geocode";

import axios, { AxiosResponse } from "axios";

const useIPLocation = () => {
  const [ipLocStatus, setIPLocStatus] = useState("");
  const [ipLocCoords, setIPLocCoords] = useState<IPApiGeocode>();

  useEffect(() => {
    axios
      .get("/api/ip-data")
      .then((res: AxiosResponse<IPApiGeocode>) => {
        setIPLocStatus("success");
        setIPLocCoords(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { ipLocStatus, ipLocCoords };
};

export default useIPLocation;
