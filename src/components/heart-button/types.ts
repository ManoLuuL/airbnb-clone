import { SafeUser } from "@/globals";

export type HeartButtonProps = {
  listingId: string;
  currentUser?: SafeUser | null;
};
