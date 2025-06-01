import FullCard from "@/components/card"; 
import { dictionaryData } from "@/db";
import { Metadata } from "next";
import { notFound } from "next/navigation";
interface PageProps {
  params: Promise<{ slug: string }>;
}
// export const revalidate = 60
export function generateStaticParams() {
  return dictionaryData
    .filter((item) => item && item[1]) // Filter out null/undefined and missing index
    .map((item) => ({
      slug: item[1],
    }));  
}
// ✅ Detailed Bilingual Metadata for Urdu Dictionary
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const word = decodeURIComponent(slug);
  const match = dictionaryData.find((item) => item[1] === word);

  if (!match) {
    return {
      title: `Word Not Found – Urdu Dictionary | لفظ نہیں ملا`,
      description: `The word "${word}" could not be found in our Urdu Dictionary. Try searching a different word. 
      ہماری اردو لغت میں "${word}" دستیاب نہیں ہے۔ براہ کرم کوئی اور لفظ تلاش کریں۔`,
    };
  }

  return {
    title: `${match[1]} – Meaning, Definition, Synonyms & Usage | ${match[1]} کا مطلب، تعریف اور مترادفات`,
    description: `Discover the complete meaning of "${match[1]}" in Urdu. Explore definitions, synonyms, word usage in sentences, and more. 
    اردو لغت میں "${match[1]}" کا مکمل مطلب، مترادفات، جملوں میں استعمال، اور مزید تفصیلات حاصل کریں۔`,
    keywords: [
      match[1],
      `${match[1]} meaning`,
      `${match[1]} in Urdu`,
      `${match[1]} ka matlab`,
      `Urdu dictionary`,
      `اردو لغت`,
      `Urdu words`,
      `${match[1]} definition`,
      `${match[1]} usage in Urdu`,
      `${match[1]} مترادفات`,
    ],
    openGraph: {
      title: `${match[1]} – Urdu Meaning | ${match[1]} کا مطلب`,
      description: `Explore detailed information about "${match[1]}" including definition, synonyms, and usage. 
      اردو میں "${match[1]}" کی مکمل تفصیل جانیں۔`,
      type: 'website',
      locale: 'en_PK',
    },
    twitter: {
      title: `${match[1]} – Urdu Meaning | ${match[1]} کا مطلب`,
      description: `Learn the Urdu meaning, definition, synonyms, and usage of the word "${match[1]}". اردو میں مکمل تفصیل پڑھیں۔`,
      card: 'summary_large_image',
    },
  };
}

// ✅ Page Component with async params
export default async function WordPage({ params }: PageProps) {
  //problem
  const { slug } = await params;
  const word = decodeURIComponent(slug);
  const match = dictionaryData.find((item) => item[1] === word);

  if (!match) return notFound();

  return (
  
      <FullCard item={match} />
    
  );
}
