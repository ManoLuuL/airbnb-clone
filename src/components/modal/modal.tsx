"use client";

import { Footer, Header } from "./componets";
import { useCallback, useEffect, useState } from "react";

import { ModalProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Modal = (props: ModalProps) => {
  const {
    actionLabel,
    onClose,
    onSubmit,
    body,
    disabled,
    footer,
    isOpen,
    secondaryAction,
    secondaryActionLabel,
    title,
  } = props;
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  return (
    isOpen && (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 focus:outline-none bg-neutral-800/70">
          <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
            <div
              className={twMerge(
                "translate duration-300 h-full",
                showModal
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              )}
            >
              <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg realtive flex flex-col w-full bg-white outline-none focus:outline-none">
                <Header handleClose={handleClose} title={title} />

                <div className="relative p-6 flex-auto">{body}</div>

                <Footer
                  actionLabel={actionLabel}
                  disabled={disabled}
                  handleAction={handleSubmit}
                  handleSecondaryAction={handleSecondaryAction}
                  secondaryActionLabel={secondaryActionLabel}
                  footer={footer}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};
