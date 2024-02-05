"use client";

import { Logo, Search, UserMenu } from "./components";

import { Container } from "../container";
import { NavBarProps } from "./types";

export const NavBar = (props: NavBarProps) => {
  const { currentUser } = props;

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};
