"use client";

import { Heading } from "@/components/heading";
import { HeartButton } from "@/components";
import Image from "next/image";
import { ListingHeadProps } from "./types";
import { useCountries } from "@/hooks";

export const ListingHead = (props: ListingHeadProps) => {
  const { id, imageSrc, locationValue, title, currentUser } = props;
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image
          src={imageSrc}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};
