"use client";

import { useEffect, useState } from "react";

import { ClientOnlyProps } from "./types";

export const ClientOnly = (props: ClientOnlyProps) => {
  const { children } = props;

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};
