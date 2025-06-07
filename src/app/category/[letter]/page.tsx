// categories/[letter]/page.tsx

import { getWordsBySpecificLetter, urduAlphabet } from "@/lib/words";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ letter: string }>;
}

export async function generateStaticParams() {
  return urduAlphabet.map((letter) => ({
    letter: letter,
  }));
}


export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const letter = decodeURIComponent((await params).letter);
  const words = getWordsBySpecificLetter(letter);

  return {
    title: `${letter} سے شروع ہونے والے اردو الفاظ | اردو زبان لغت`,
    description: `${letter} حرف سے شروع ہونے والے الفاظ کی مکل فہرست - urduzaban.pk`,
    openGraph: {
      title: `${letter} سے اردو الفاظ`,
      description: `${letter} حرف سے شروع ہونے والے ${words.length} اردو الفاظ`,
    },
  };
}

export default async function LetterCategoryPage({ params }: PageProps) {
  const letter = decodeURIComponent((await params).letter);
  const words = getWordsBySpecificLetter(letter);

  if (words.length === 0) {
    <section className="grid place-items-center">
      <p>
        No word found
      </p>
    </section>
  }

  return (
    <article className="container mx-auto py-8 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-urdu">
          {letter} سے شروع ہونے والے الفاظ
        </h1>
        <p className="text-gray-600 mt-2 font-urdu">کل {words.length} الفاظ</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {words.map((wordData) => (
          <div
            key={wordData[0]} // Assuming wordData[0] is the ID
            className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <a
              href={`/word/${encodeURIComponent(wordData[1])}`} // Assuming wordData[1] is the Urdu word
              className="block"
            >
              <h3 className="text-xl font-urdu text-right mb-2">
                {wordData[1]}
              </h3>
              {wordData[2] && ( // Assuming wordData[2] contains English translation
                <p className="text-gray-600 text-sm">{wordData[2]}</p>
              )}
            </a>
          </div>
        ))}
      </div>
    </article>
  );
}
