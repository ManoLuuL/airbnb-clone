"use client";

import { ButtonProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Button = (props: ButtonProps) => {
  const { label, onClick, disabled, icon: Icon, outline, small } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 trnasition w-full",
        outline
          ? "bg-white border-black text-black"
          : "bg-rose-500 border-rose-500 text-white",
        small
          ? "py-1 text-sm font-light border-[1px]"
          : "py-3 text-md font-semibold border-2"
      )}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};
