import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar/Navbar";

import localFont from "next/font/local";

const linkSans = localFont({
  src: "../fonts/LinikSans[wght].ttf",
  variable: "--font-link-sans",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clone Tree",
  description: "Create your own Clone Tree",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={linkSans.variable}>
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
      </body>
    </html>
  );
}