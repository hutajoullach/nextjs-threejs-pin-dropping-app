import { useCallback, useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { useUser } from "@clerk/nextjs";

import useGeolocationPinModal from "~/store/geolocationPinModalStore";
import useBrowserLocation from "../../hooks/use-browser-location";
import useIPLocation from "../../hooks/use-ip-location";

import Modal from "./modal";
import Button from "../button";
import Heading from "../heading";
import Input from "../inputs/input";

import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
const BasicMap = dynamic(() => import("../leaflet/basic-map"), { ssr: false });

const GeolocationPinModal = () => {
  const { user } = useUser();
  const geolocationPinModal = useGeolocationPinModal();
  const [isLoading, setIsLoading] = useState(false);

  const [userLocCoords, setUserLocCoords] = useState({
    lat: -77.508333,
    lng: 164.754167,
  });

  const { ipLocStatus, ipLocCoords } = useIPLocation();
  // console.log(ipLocStatus);
  // console.log(ipLocCoords);

  useEffect(() => {
    if (
      ipLocStatus === "success" &&
      ipLocCoords?.lat !== undefined &&
      ipLocCoords?.lon !== undefined &&
      geolocationPinModal.isOpen
    ) {
      setTimeout(() => {
        setUserLocCoords({
          lat: ipLocCoords?.lat,
          lng: ipLocCoords?.lon,
        });
      }, 500);
    }
  }, [ipLocStatus, ipLocCoords, geolocationPinModal.isOpen]);

  useEffect(() => {
    if (!geolocationPinModal.isOpen) {
      setUserLocCoords({
        lat: -77.508333,
        lng: 164.754167,
      });
    }
  }, [geolocationPinModal.isOpen]);

  const { browserLocStatus, browserLocCoords, browserLocData } =
    useBrowserLocation();
  // console.log(browserLocStatus);
  // console.log(browserLocCoords);
  // console.log(browserLocData);

  const getBrowserLocation = () => {
    if (
      browserLocStatus === "success" &&
      browserLocCoords?.coords.latitude !== undefined &&
      browserLocCoords?.coords.longitude !== undefined
    ) {
      setUserLocCoords({
        lat: browserLocCoords?.coords.latitude,
        lng: browserLocCoords?.coords.longitude,
      });
    }
  };

  // console.log(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      lat: "",
      lon: "",
      address: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (!user) return null;

    setIsLoading(true);
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Add Your GeolocationPin"
        subtitle="drop your pin on a map!"
      />
      <BasicMap userLocCoords={userLocCoords} />

      {/* <Input
        id="address"
        label="Address"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      /> */}

      <Button
        onClick={getBrowserLocation}
        label="Use Browser Location"
        small
        outline
      />

      {browserLocStatus === "failed" && (
        <span className="-mb-5 -mt-3 flex text-red-400">
          <svg
            className="h-6 w-6 fill-current text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
          <span>failed to get browser geolocation</span>
        </span>
      )}
    </div>
  );

  const footerContent = (
    <>
      {/* <div className="mt-3 flex flex-col gap-4">
        <div></div>
      </div> */}
    </>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={geolocationPinModal.isOpen}
      title="GeolocationPin"
      actionLabel="Drop Pin"
      onClose={geolocationPinModal.onClose}
      // onSubmit={handleSubmit(onSubmit)}
      onSubmit={() => {
        console.log("hey");
      }}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default GeolocationPinModal;
