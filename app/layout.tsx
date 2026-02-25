import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://optykgruszkaczdz.pl'), // placeholder to replace
  title: "Zakład Optyczny Gruszka | Optyk Czechowice-Dziedzice",
  description: "Zakład Optyczny Gruszka to nowoczesny optyk w Czechowicach-Dziedzicach. Oferujemy profesjonalne badanie ostrości wzroku oraz dobór okularów i soczewek.",
  keywords: ["optyk czechowice", "optyk czechowice dziedzice", "badanie wzroku czechowice", "okulary czechowice", "zakład optyczny gruszka"],
  openGraph: {
    title: "Zakład Optyczny Gruszka - Optyk w Czechowicach-Dziedzicach",
    description: "Profesjonalne badanie ostrości wzroku i dobór okularów w nowoczesnym gabinecie.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
