export type ReservationsParams = {
  listingId?: string;
  userId?: string;
  authorId?: string;
};

export type ListingsParams = {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
};

export type ListingByIdParams = {
  listingId?: string;
};
