import FullCard from "@/components/card"; // Adjust path as needed
// import { getDictionaryData } from "@/lib/dictionory";
import { dictionaryData } from "@/db";
import { Metadata } from "next";
import { notFound } from "next/navigation";
interface PageProps {
  params: Promise<{ slug: string }>;
}
// export const revalidate = 60
export function generateStaticParams() {
  const slugs = dictionaryData
    .slice(0, 5000)
    .filter((item) => item && item[1]) // Filter out null/undefined and missing index
    .map((item) => ({
      slug: item[1],
    }));

  return slugs;
}

// ✅ Metadata generation (async + promise-based params)
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const word = decodeURIComponent(slug);
  const match = dictionaryData.find((item) => item[1] === word);

  if (!match) {
    return {
      title: `Word Not Found - Urdu Dictionary`,
      description: `No entry found for '${word}' in the Urdu Dictionary.`,
    };
  }

  return {
    title: `${match[1]} - Meaning, Definition & Usage | Urdu Dictionary`,
    description: `Explore the meaning, definition, and usage of the Urdu word '${match[1]}'. Learn detailed information in our online Urdu Dictionary.`,
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
    <main>
      <FullCard item={match} />
    </main>
  );
}
