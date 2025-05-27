import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../components/Searchbar";

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
        <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
          <Link href="/">
            <h1 className="text-blue-600 text-xl font-bold">اردو لغت</h1>
          </Link>
          <Image
            src="/menu-alt-04-svgrepo-com.svg"
            alt="Menu icon"
            width={30}
            height={30}
          />
        </nav>
        <header className="px-6 mt-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Very Large and Concise Dictionary of Urdu
          </h2>
        <SearchBar /> {/* ⬅️ Appears on all pages */}
        </header>
           

        
        <main className="px-6 max-w-4xl mx-auto mt-6">{children}</main>
      </body>
    </html>
  );
}
