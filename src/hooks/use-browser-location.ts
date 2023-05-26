import { useState, useEffect } from "react";

import { BigdataReverseGeocode } from "../types/bigdata-reverse-geocode";

import axios, { AxiosResponse } from "axios";

const useBrowserLocation = () => {
  const [browserLocStatus, setBrowserLocStatus] = useState("");
  const [browserLocCoords, setBrowserLocCoords] =
    useState<GeolocationPosition>();
  const [browserLocData, setBrowserLocData] = useState<BigdataReverseGeocode>();

  const onSuccess = (position: GeolocationPosition) => {
    axios
      .post("/api/reverse-geocode", position)
      .then((res: AxiosResponse<BigdataReverseGeocode>) => {
        setBrowserLocData(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });

    setBrowserLocStatus("success");
    setBrowserLocCoords(position);
  };

  const onError = () => {
    setBrowserLocStatus("failed");
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setBrowserLocStatus("failed");
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { browserLocStatus, browserLocCoords, browserLocData };
};

export default useBrowserLocation;
