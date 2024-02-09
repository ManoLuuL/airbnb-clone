import { ClientOnly, EmptyState } from "@/components";

import { ListingClient } from "./listing-client";
import { ListingParams } from "./types";
import getCurrentUser from "@/actions/get-current-user";
import getListingById from "@/actions/get-listing-by-id";
import getReservations from "@/actions/get-reservations";

const ListingPage = async (params: ListingParams) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ListingPage;
