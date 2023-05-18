import { useState, useEffect } from "react";

import axios, { AxiosResponse } from "axios";

const useIPLocation = () => {
  const [ipLocCoords, setIpLocCoords] = useState();

  const ipAPIUrl = "http://ip-api.com/json/?fields=61439";

  axios.get(ipAPIUrl).then((res: AxiosResponse) => {
    console.log(res);
    setIpLocCoords(res.data);
  });

  return { ipLocCoords };
};

export default useIPLocation;
