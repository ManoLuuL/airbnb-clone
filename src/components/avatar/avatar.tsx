"use client";

import { AvatarPlaceholder } from "@/assets";
import { AvatarProps } from "./types";
import Image from "next/image";

export const Avatar = (props: AvatarProps) => {
  const { src } = props;
  return (
    <Image
      alt="Avatar"
      src={src || AvatarPlaceholder}
      height={30}
      width={30}
      className="rounded-full"
    />
  );
};
