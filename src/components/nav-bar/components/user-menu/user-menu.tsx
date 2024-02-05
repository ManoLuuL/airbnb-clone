"use client";

import { useCallback, useState } from "react";
import { useModalLogin, useModalRegister } from "@/hooks";

import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "@/components";
import { MenuItem } from "../menu-item";
import { UserMenuProps } from "./types";
import { signOut } from "next-auth/react";

export const UserMenu = (props: UserMenuProps) => {
  const { currentUser } = props;

  const registerModal = useModalRegister();
  const loginModal = useModalLogin();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => undefined}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb in home
        </div>
        <div
          onClick={handleToggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem label="My trips" onClick={() => undefined} />
                <MenuItem label="My favorites" onClick={() => undefined} />
                <MenuItem label="My reservations" onClick={() => undefined} />
                <MenuItem label="My properties" onClick={() => undefined} />
                <MenuItem label="Airbnb my home" onClick={() => undefined} />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="Sing Up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
