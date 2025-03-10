import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TheIndianRoamer - Sacred Journeys Across India",
  description: "Experience spiritual adventures to India's most sacred destinations with expert guidance and comfortable travel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
