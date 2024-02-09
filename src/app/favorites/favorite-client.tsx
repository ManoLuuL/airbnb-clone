"use client";

import { Container, ListingCard } from "@/components";

import { FavoriteClientProps } from "./types";
import { Heading } from "@/components/heading";

export const FavoriteClient = (props: FavoriteClientProps) => {
  const { listings, currentUser } = props;

  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you favorited!" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};
