"use client";

import { AvatarPlaceholder } from "@/assets";
import Image from "next/image";

export const Avatar = () => {
  return (
    <Image
      alt="Avatar"
      src={AvatarPlaceholder}
      height={30}
      width={30}
      className="rounded-full"
    />
  );
};
