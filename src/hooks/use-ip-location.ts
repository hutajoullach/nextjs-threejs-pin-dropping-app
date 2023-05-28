import { useState, useEffect } from "react";

import { IPApiGeocode } from "../types/ip-api-geocode";

import axios, { AxiosResponse } from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const useIPLocation = () => {
  return useQuery({
    // enabled: data !== undefined,
    queryKey: ["ipcoords"],
    queryFn: () =>
      axios.get("/api/ip-data").then((res: AxiosResponse<IPApiGeocode>) => {
        return res.data;
      }),
    // onSuccess(data) {
    //   toast.success("Found coords successfully!");
    //   console.log(data);
    // },
    // onError(err) {
    //   toast.error("Failed to get coords! Please try again later.");
    //   console.log(err);
    // },
    refetchOnWindowFocus: false,
  });
};

export default useIPLocation;
