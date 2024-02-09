import { SafeListing, SafeUser } from "@/globals";

export type FavoriteClientProps = {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
};
