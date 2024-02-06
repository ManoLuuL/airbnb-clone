import { ReservationsParams } from "./types";
import prisma from "@/libs/prismabd";

export default async function getReservations(params: ReservationsParams) {
  const { listingId, userId, authorId } = params;

  try {
    const query: any = {};

    if (listingId) {
      query.listingId = listingId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeReservations = reservations.map((reservation) => {
      const { createdAt, endDate, listing, startDate } = reservation;

      return {
        ...reservation,
        createdAt: createdAt.toISOString(),
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        listing: {
          ...listing,
          createdAt: listing.createdAt.toISOString(),
        },
      };
    });

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
