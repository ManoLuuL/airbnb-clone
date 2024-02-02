"use client";

import { HeadingProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Heading = (props: HeadingProps) => {
  const { title, center, subtitle } = props;

  return (
    <div className={twMerge(center ? "text-center" : "text-start")}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};
