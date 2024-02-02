"use client";

import Image from "next/image";
import { LogoCompany } from "@/assets";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="Logo"
      src={LogoCompany}
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
    />
  );
};
