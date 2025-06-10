// src/app/page/[page]/page.tsx
import Link from "next/link";
import { dictionaryData } from "@/db";
import MiniCard from "@/components/MiniCard";
import { Metadata } from "next";



// props 
interface PageProps {
    params: Promise<{ page: string }>;
  }


export async function generateStaticParams() {
  const perPage = 40;
  const totalPages = Math.ceil(dictionaryData.length / perPage);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: String(i + 1),
  }));
}

export default  async function Page({ params }:  PageProps) {
  const page = parseInt( (await params).page, 10);
  const perPage = 40;
  const start = (page - 1) * perPage;
  const end = page * perPage;
  const pageItems = dictionaryData.slice(start, end);

  const hasNext = end < dictionaryData.length;
  const hasPrev = page > 1;

  return (
    <section className="rtl font-urdu flex flex-col gap-4 px-2 max-w-4xl mx-auto mt-10">
      {pageItems.map((item, index) => (
        <Link href={`/word/${encodeURIComponent(item[1])}`} key={index}>
          <MiniCard item={item} />
        </Link>
      ))}

      <div className="flex justify-between mt-10 mb-10">
        {hasPrev ? (
          <Link
            href={`/page/${page - 1}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl text-lg shadow hover:bg-blue-700 transition"
          >
             Previous
          </Link>
        ) : (
          <div /> // Keeps layout balanced
        )}

        {hasNext && (
          <Link
            href={`/page/${page + 1}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl text-lg shadow hover:bg-blue-700 transition"
          >
            Next 
          </Link>
        )}
      </div>
    </section>
  );
}


// ✅ Bilingual Metadata for urduzaban.pk with Social Media Optimization
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { page } = await params;

  // Base URL for all links
  const baseUrl = 'https://urduzaban.pk';
  const pageUrl = `${baseUrl}/page/${page}`;

  // Default images (replace with your actual image paths)
  const ogImage = `${baseUrl}/og.png`;
  const twitterImage = `${baseUrl}/og.png`;

  

  // Bilingual titles/descriptions
  const urduTitle = `صفحہ نمبر ${page} - اردو کے تمام الفاظ کے معنی، تعریف اور استعمال`;
const englishTitle = `Page ${page} - Meaning, Definition & Usage of All Urdu Words`;

const urduDescription = `تمام اردو الفاظ کے معنی، تشریح، مترادف اور استعمال کی تفصیل۔`;
  const englishDescription = `Explore meanings, definitions, synonyms, and usage of all Urdu words on UrduZaban.pk.`;

  return {
    title: `${urduTitle} | ${englishTitle} | urduzaban.pk`, // Dual-language title
    description: ` ${urduDescription} | ${englishDescription}`,
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
        alt: `Urdu Words - UrduZaban.pk`,
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