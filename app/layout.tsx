import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import "react-multi-carousel/lib/styles.css";
import Vertification from "./Vertification";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "United Beverage",
  description:
    "Established in 2018 to target the alcohol market, We help source new and better products for its customers. As a new player in the market, United Beverage derives its expertise from the founder and team, who have over 30 years of experience in sales and marketing consulting. It is a master distributor and importer of alcoholic beverages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Vertification />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
