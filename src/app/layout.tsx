import "./globals.css";

import { ModalLogin, ModalRegister, NavBar } from "@/components";

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ToasterProvider } from "@/providers";
import getCurrentUser from "@/actions/get-current-user";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clon",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <ModalRegister />
        <ModalLogin />
        <NavBar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
