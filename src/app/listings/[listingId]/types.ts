import { SafeListing, SafeReservation, SafeUser } from "@/globals";

export type ListingClientProps = {
  reservations?: SafeReservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
};

export type ListingParams = {
  listingId?: string;
};
