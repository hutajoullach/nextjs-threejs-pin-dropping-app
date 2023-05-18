import { useState, useEffect } from "react";

const useBrowserLocation = () => {
  const [browserLocStatus, setBrowserLocStatus] = useState("");
  const [browserLocData, setBrowserLocData] = useState<GeolocationPosition>();

  const onSuccess = (position: GeolocationPosition) => {
    setBrowserLocStatus("success");
    setBrowserLocData(position);
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

  return { browserLocStatus, browserLocData };
};

export default useBrowserLocation;
