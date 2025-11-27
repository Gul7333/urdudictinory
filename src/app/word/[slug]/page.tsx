import FullCard from "@/components/card"; // Adjust path as needed
import CommentsSection from "@/components/comments";
import ShareButton from "@/components/ShareButton";
import { urduToRoman } from "@/constants/constant";
import { dictionaryData } from "@/db";
import { Metadata } from "next";
import { notFound } from "next/navigation";
interface PageProps {
  params: Promise<{ slug: string }>;
}
// export const revalidate = 60
export function generateStaticParams() {
  const slugs = dictionaryData// Limit to first 1000 entries for performance
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
  const urduTitle = `${match[1]}  کے معنی، تعریف اور استعمال }`;
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
// const previousWord = currentIndex > 0 ? dictionaryData[currentIndex - 1] : null;
// const nextWord = currentIndex < dictionaryData.length - 1 ? dictionaryData[currentIndex + 1] : null;
const endword = currentIndex + 4;
//find next 3 words
const nextthreewords = dictionaryData.slice(currentIndex + 1, endword);
 
  if (!match) return notFound();

  return (
    <>
   
   <FullCard item={match} />

<section className="text-center py-6">
  {/* Related Alphabet List */}
  <div className="flex flex-col justify-between gap-2.5">

  <a href={`/category/${match[1][0]}`} className="py-12 text-xl  px-4  shadow-xl rounded">
      {match[1][0]} سے شروع ہونے والے الفاظ کی فہرست
  
  </a>
  <ShareButton/>

  </div>
  {/* Interlinking: Previous and Next Words */}
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {nextthreewords.map((wordItem) => (
    <a
      key={wordItem[1]}
      href={`/word/${encodeURIComponent(wordItem[1])}`}
      className="
        block p-6 rounded-2xl bg-white shadow-md 
        hover:shadow-xl hover:-translate-y-1 transition-all duration-300
        border border-gray-100
      "
    >
      <div className="text-2xl font-semibold text-gray-800">
        {wordItem[1]}
      </div>
      <div className="text-gray-500 text-lg mt-1">
        ({urduToRoman(wordItem[1])})
      </div>
    </a>
  ))}
</div>

</section>
<CommentsSection/>

    </>
  );
}
