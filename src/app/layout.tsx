import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { navList } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Paschal Okafor",
  description: "This is the portfolio site of Paschal Okafor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-poppins"}>
        <Navbar navList={navList} />
        <main>{children}</main>
      </body>
    </html>
  );
}
