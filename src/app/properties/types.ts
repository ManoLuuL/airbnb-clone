import { SafeListing, SafeUser } from "@/globals";

export type PropertiesClientProps = {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
};
