import { useCallback, useEffect, useState } from "react";

import useGeolocationPinGlobe from "~/store/geolocation-pin-globe-store";

import Button from "../button";

import { GoX } from "react-icons/go";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
};

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  const geolocationPinGlobe = useGeolocationPinGlobe();

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    onClose();

    if (!geolocationPinGlobe.isDisplayed) {
      geolocationPinGlobe.onToggle();
    }

    // setTimeout(() => {
    //   onClose();
    // }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/70 outline-none focus:outline-none">
        <div className="relative mx-auto my-6 h-full w-full md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-2/5">
          <div
            className={`translate h-full duration-300
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="translate z-53 relative flex h-full w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none md:h-auto lg:h-auto">
              <div className="relative flex items-center justify-center rounded-t border-b-[1px] p-6">
                <button
                  onClick={handleClose}
                  className="absolute left-9 border-0 p-1 transition hover:opacity-70"
                >
                  <GoX size={24} color="black" />
                </button>
                <div className="text-lg font-semibold text-gray-600">
                  {title}
                </div>
              </div>
              <div className="relative flex-auto p-6">{body}</div>
              <div className="flex flex-col gap-2 p-6">
                <div className="flex w-full flex-row items-center gap-4">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                      outline
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        onClick={handleClose}
        className="z-520 fixed left-0 top-0 h-full w-full bg-transparent"
      /> */}
    </>
  );
};

export default Modal;
