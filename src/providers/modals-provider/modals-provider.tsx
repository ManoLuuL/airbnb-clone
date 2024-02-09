"use client";

import {
  ModalLogin,
  ModalRegister,
  ModalRent,
  ModalSearch,
} from "@/components";

export const ModalsProvider = () => {
  return (
    <>
      <ModalLogin />
      <ModalRegister />
      <ModalSearch />
      <ModalRent />
    </>
  );
};
