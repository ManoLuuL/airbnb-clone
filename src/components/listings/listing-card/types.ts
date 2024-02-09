import { SafeListing, SafeReservation, SafeUser } from "@/globals";

export type ListingCardProps = {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
};
