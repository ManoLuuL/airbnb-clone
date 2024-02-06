"use client";

import { CategoryInputProps } from "./types";
import { twMerge } from "tailwind-merge";

export const CategoryInput = (props: CategoryInputProps) => {
  const { icon: Icon, label, onClick, selected } = props;

  const handleClick = () => {
    onClick(label);
  };

  return (
    <div
      onClick={handleClick}
      className={twMerge(
        "rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer",
        selected ? "border-black" : "border-neutral-200"
      )}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};
