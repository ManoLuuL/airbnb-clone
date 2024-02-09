import { SafeReservation, SafeUser } from "@/globals";

export type TripsClientProps = {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
};
