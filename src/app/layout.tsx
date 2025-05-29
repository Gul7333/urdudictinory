import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import SearchBar from "../components/Searchbar";
import AlphabetNav from "@/components/AlphabetNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  variable: "--font-nastaleeq",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "اردو لغت - Urdu Dictionary for Word Meanings & Definitions",
  description:
    "Explore thousands of Urdu words with English meanings, definitions, and detailed explanations. Best online Urdu dictionary for students & researchers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ur" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoNastaliqUrdu.variable} antialiased font-urdu`}
      >
        <AlphabetNav />
        <header className="px-6 mt-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Very Large and Concise Dictionary of Urdu
          </h2>
          <SearchBar /> {/* ⬅️ Appears on all pages */}
        </header>

        <main className="px-2 max-w-4xl mx-auto mt-6">{children}</main>
      </body>
    </html>
  );
}
