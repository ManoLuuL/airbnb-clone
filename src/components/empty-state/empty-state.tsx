"use client";

import { Button } from "../button";
import { EmptyStateProps } from "./types";
import { Heading } from "../heading";
import { useRouter } from "next/navigation";

export const EmptyState = (props: EmptyStateProps) => {
  const {
    showReset,
    title = "No exact matches",
    subtitle = "Try changing or removing some of your filters.",
  } = props;

  const router = useRouter();

  return (
    <div className="h-[60vh]flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};
