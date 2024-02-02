import "./globals.css";

import { ModalRegister, NavBar } from "@/components";

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ToasterProvider } from "@/providers";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <ModalRegister />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
