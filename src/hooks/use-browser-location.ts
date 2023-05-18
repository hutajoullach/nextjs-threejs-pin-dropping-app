import { useState, useEffect } from "react";

import { BigdataReverseGeocode } from "../types/bigdata-reverse-geocode";

import axios, { AxiosResponse } from "axios";

const useBrowserLocation = () => {
  const [browserLocStatus, setBrowserLocStatus] = useState("");
  const [browserLocCoords, setBrowserLocCoords] =
    useState<GeolocationPosition>();
  const [browserLocData, setBrowserLocData] = useState<BigdataReverseGeocode>();

  const onSuccess = (position: GeolocationPosition) => {
    const geoAPIUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;

    axios.get(geoAPIUrl).then((res: AxiosResponse<BigdataReverseGeocode>) => {
      setBrowserLocData(res.data);
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
