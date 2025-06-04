import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/Mainnav";
import SearchBar from "@/components/Searchbar";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  title:
    "اردو زبان لغت – Urdu Zaban Lughat | Urdu Dictionary with Meanings & Definitions",
  description:
    "ہزاروں اردو الفاظ کے انگریزی معانی، تعریفات، مترادفات اور مثالوں کے ساتھ تلاش کریں ایک جامع آن لائن اردو لغت طلبا، محققین، اور ادیبوں کے لیے۔ || Discover thousands of Urdu words with English meanings, definitions, synonyms, and examples.",
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
        <MainNav />
        <header className="px-6 mt-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 font-urdu mb-1.5 leading-loose">
            اردو زبان لغت – اردو کے الفاظ، معانی اور تعریفات کی آن لائن ڈکشنری
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-2 " >
            Best Urdu Language Dictionary – A free online reference for Urdu words,
            meanings, and definitions
          </p>
          <SearchBar />
        </header>

        <main className="px-2 max-w-4xl mx-auto mt-6">{children}</main>
        <GoogleAnalytics gaId="G-7M3CHK3VFJ" />
        

      </body>
    </html>
  );
}
