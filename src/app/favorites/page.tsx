import { ClientOnly, EmptyState } from "@/components";

import { FavoriteClient } from "./favorite-client";
import getCurrentUser from "@/actions/get-current-user";
import getFavoriteListings from "@/actions/get-favorite-listings";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoriteClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};
export default ListingPage;
