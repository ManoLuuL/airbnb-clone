import { IconType } from "react-icons";
import { SafeUser } from "@/globals";

export type CategoryParams = {
  icon: IconType;
  label: string;
  description: string;
};

export type ListingInfoProps = {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category?: CategoryParams;
  locationValue: string;
};
