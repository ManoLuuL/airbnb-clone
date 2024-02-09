import { SafeReservation, SafeUser } from "@/globals";

export type ReservationClientProps = {
    reservations: SafeReservation[],
    currentUser?: SafeUser | null,
}