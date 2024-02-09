import { SafeUser } from "@/globals";

export type FavoriteParams = {
  listingId: string;
  currentUser?: SafeUser | null;
};
