import Breadcrumbs from "@/components/Breadcrumbs";
import FullCard from "@/components/card"; // Adjust path as needed
import ShareButton from "@/components/ShareButton";
// import { getDictionaryData } from "@/lib/dictionory";
import { dictionaryData } from "@/db";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Article, DefinedTerm, FAQPage, ProductGroup, Question, WithContext } from "schema-dts";
interface PageProps {
  params: Promise<{ slug: string }>;
}
// export const revalidate = 60
export function generateStaticParams() {
  const slugs = dictionaryData
    .filter((item) => item && item[1]) // Filter out null/undefined and missing index
    .map((item) => ({
      slug:item[1],
    }));
    return slugs
}

// ✅ Bilingual Metadata for urduzaban.pk with Social Media Optimization
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const word = decodeURIComponent(slug);
  const match = dictionaryData.find((item) => item[1] === word);

  // Base URL for all links
  const baseUrl = 'https://urduzaban.pk';
  const pageUrl = `${baseUrl}/word/${slug}`;

  // Default images (replace with your actual image paths)
  const ogImage = `${baseUrl}/og.png`;
  const twitterImage = `${baseUrl}/og.png`;

  if (!match) {
    return {
      title: `${word} - UrduZaban.pk | Urdu Dictionary`,
      description: `'${word}' کا کوئی اندراج اردو لغت میں موجود نہیں ہے۔ | No entry found for '${word}' in the Urdu Dictionary.`,
      alternates: {
        canonical: pageUrl,
      },
    }
  }

  // Bilingual titles/descriptions
  const urduTitle = `${match[1]} کے معنی، تعریف اور استعمال`;
  const englishTitle = `${match[1]} - Meaning, Definition & Usage`;
  
  const urduDescription = ` '${match[1]}' کے معنی ، مطلب ، مترادف  اور استعمال  ۔`;
  const englishDescription = `Learn the meaning, definition, synonym and usage of '${match[1]}' in Urdu. Explore details on UrduZaban.pk.`;


 


  return {
    title: `${urduTitle}`, // Dual-language title
    description: ` ${urduDescription} | ${englishDescription} - urduzaban.pk`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${englishTitle} | ${urduTitle}`,
      description: `${englishDescription} | ${urduDescription}`,
      url: pageUrl,
      siteName: 'UrduZaban.pk | اردو زبان',
      locale: 'ur_PK',
      type: 'website',
      images: [{
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `Urdu Word: ${match[1]} - UrduZaban.pk`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${englishTitle} | ${urduTitle}`,
      description: `${englishDescription} | ${urduDescription}`,
      images: [twitterImage],
    },

  };
}

// ✅ Page Component with async params
export default async function WordPage({ params }: PageProps) {
  //problem
  const { slug } = await params;
  const word = decodeURIComponent(slug);
  const match = dictionaryData.find((item) => item[1] === word);
 // Find index of the current word
const currentIndex = dictionaryData.findIndex((item) => item[1] === word);

// Get previous and next items safely
const previousWord = currentIndex > 0 ? dictionaryData[currentIndex - 1] : null;
const nextWord = currentIndex < dictionaryData.length - 1 ? dictionaryData[currentIndex + 1] : null;
const wordSchema : WithContext<Question> | undefined = match && {
  "@context": "https://schema.org",
  "@type": "Question",
  "name":  `${match[1]} کے کیا معنی ہیں`,
  "acceptedAnswer": {
    "@type": "Answer",
    "text": match[4].meaningstitles + match[4].meaningdetails
  }
};

  if (!match) return notFound();

  return (
    <>
   
   <FullCard item={match} />

<section className="text-center py-6">
  {/* Related Alphabet List */}
  <div className="flex justify-between items-start">

  <a href={`/category/${match[1][0]}`} className="inline-block">
    <button className=" px-2  rounded-2xl bg-blue-500 text-white cursor-pointer hover:scale-105 transition">
      {match[1][0]} سے شروع ہونے والے الفاظ کی فہرست
    </button>
  </a>
  <ShareButton/>

  </div>
  {/* Interlinking: Previous and Next Words */}
  <div className="flex justify-between gap-4 mt-6">
    {previousWord && (
      <a href={`/word/${encodeURIComponent(previousWord[1])}`}>
        <button className="p-2 rounded bg-gray-200 hover:bg-gray-300 text-xl">
        {previousWord[1]}
        </button>
      </a>
    )}
    {nextWord && (
      <a href={`/word/${encodeURIComponent(nextWord[1])}`}>
        <button className="p-2 rounded bg-gray-200 hover:bg-gray-300 text-xl">
          {nextWord[1]} 
        </button>
      </a>
    )}
  </div>
</section>

    </>
  );
}
