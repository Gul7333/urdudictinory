import Link from "next/link";
import { dictionaryData } from "@/db";
import MiniCard from "@/components/MiniCard";



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

      <div className="flex justify-between mt-10">
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
