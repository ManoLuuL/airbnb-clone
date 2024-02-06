"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { CATEGORIES } from "./consts";
import { CategoryBox } from "./components";
import { Container } from "@/components";

export const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  return (
    isMainPage && (
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
          {CATEGORIES.map((itens) => {
            return (
              <CategoryBox
                key={itens.label}
                label={itens.label}
                icon={itens.icon}
                selected={category === itens.label}
              />
            );
          })}
        </div>
      </Container>
    )
  );
};
