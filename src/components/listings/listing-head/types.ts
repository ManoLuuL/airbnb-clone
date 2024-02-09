import { SafeUser } from "@/globals";

export type ListingHeadProps = {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
};
