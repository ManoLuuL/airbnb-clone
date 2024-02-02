"use client";

import { MenuItemProps } from "./types";

export const MenuItem = (props: MenuItemProps) => {
  const { label, onClick } = props;

  return (
    <div
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      onClick={onClick}
    >
      {label}
    </div>
  );
};
