import { useCallback, useState } from "react";

import useGeolocationPinModal from "~/store/geolocationPinModalStore";

import Modal from "./modal";
import Button from "../button";

import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const GeolocationPinModal = () => {
  const geolocationPinModal = useGeolocationPinModal();
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      {/* <Heading title="GeolocationPin" subtitle="drop your pin on a map!" />
      <Input
        id="address"
        label="Address"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      /> */}
    </div>
  );

  const footerContent = (
    <div className="mt-3 flex flex-col gap-4">
      <div></div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={geolocationPinModal.isOpen}
      title="GeolocationPin"
      actionLabel="Drop Pin"
      onClose={geolocationPinModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default GeolocationPinModal;
