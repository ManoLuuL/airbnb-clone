import { User } from "@prisma/client";

export type NavBarProps = {
  currentUser?: User | null;
};
