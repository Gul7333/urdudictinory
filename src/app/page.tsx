// app/page.tsx
import Link from "next/link";
import FullCard from "@/components/card";
import { dictionaryData } from "@/db";
import MiniCard from "@/components/MiniCard";
import HomeHeader from "@/components/HomeHeader";

export default function Home() {
  const perPage = 40;
  const start = 0;
  const end = perPage;
  const page = 1;

  const items = dictionaryData.slice(start, end);
  const hasNext = end < dictionaryData.length;

  return (
    <>
      <HomeHeader/>
    <section className="rtl font-urdu flex flex-col gap-4 px-2 max-w-4xl mx-auto mt-10">
      {items.map((item, index) => (
        <Link href={`/word/${encodeURIComponent(item[1])}`} key={index}>
          <MiniCard item={item} />
        </Link>
      ))}

      <div className="flex justify-between mt-10">
        <div /> {/* No previous on first page */}
        {hasNext && (
          <Link
            href={`/page/${page + 1}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl text-lg shadow hover:bg-blue-700 transition"
          >
            Next →
          </Link>
        )}
      </div>
    </section>
    </>
  );
}
