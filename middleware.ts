export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "src/app/trips",
    "src/app/reservations",
    "src/app/properties",
    "src/app/favorites",
  ],
};
