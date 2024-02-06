"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { CategoryBoxProps } from "./types";
import qs from "query-string";
import { twMerge } from "tailwind-merge";
import { useCallback } from "react";

export const CategoryBox = (props: CategoryBoxProps) => {
  const { icon: Icon, label, selected } = props;

  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updateQuery.category;
    }
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updateQuery,
      },
      { skipNull: true }
    );
    router.push(url);
  }, [label, params, router]);

  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center gap-2 p-3 border-b-2 transition cursor-pointer hover:text-neutral-800",
        selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-500"
      )}
      onClick={handleClick}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};
