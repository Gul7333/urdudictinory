import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/Mainnav";
import SearchBar from "@/components/Searchbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
//   variable: "--font-nastaleeq",
//   subsets: ["arabic"],
// });
const notoNastaliqUrdu = localFont({
  src: '../../public/alvi-lahori.ttf',
    variable: "--font-nastaleeq",

})


  // Base URL for all links
  const baseUrl = 'https://urduzaban.pk';
  

  // Default images (replace with your actual image paths)
  const ogImage = `${baseUrl}/og.png`;
  const twitterImage = `${baseUrl}/og.png`;
export const metadata: Metadata = {
  title:
    "اردو زبان لغت – Urdu Zaban Lughat | Urdu Dictionary with Meanings & Definitions",
  description:
    "ہزاروں اردو الفاظ کے انگریزی معانی، تعریفات، مترادفات اور مثالوں کے ساتھ تلاش کریں ایک جامع آن لائن اردو لغت طلبا، محققین، اور ادیبوں کے لیے۔ || Discover thousands of Urdu words with English meanings, definitions, synonyms, and examples.",
    alternates: {
      canonical: baseUrl,
    },
    keywords: ["اردو لغت","اردو لغت","اردو لغت پاکستان", "Urdu Dictionary","Urdu Zaban Dictionary","Collection of Urdu Words", "Urdu Lughat Pakistan", "Modern Urdu Dictionary"],
    openGraph: {
      title: `Urduzaban.pk - Best Urdu Dictionary`,
      description: `Urduzaban.pk - Pakistan Best Urdu Dictionary containing thousands of words`,
      url: baseUrl,
      siteName: 'UrduZaban.pk | اردو زبان',
      locale: 'ur_PK',
      type: 'website',
      images: [{
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `UrduZaban.pk`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      description: `Urduzaban.pk - Pakistan Best Urdu Dictionary containing thousands of words`,
      images: [twitterImage],
    },
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
      

        <main className="px-2 max-w-4xl mx-auto mt-6">{children}</main>
        <GoogleAnalytics gaId="G-7M3CHK3VFJ" />
        

      </body>
    </html>
  );
}


// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-7M3CHK3VFJ"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-7M3CHK3VFJ');
// </script>