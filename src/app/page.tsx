import Link from "next/link";
import FullCard from "@/components/card";
import { dictionaryData } from "@/db";

export  default async function Home()  {
  // const dictionaryData = await getDictionaryData();
  const top100 = dictionaryData.slice(0, 100);

  return (
    <main className="rtl font-urdu flex flex-col gap-4 px-6 max-w-4xl mx-auto mt-10">
      {top100.map((item, index) => (
        <Link href={`/word/${encodeURIComponent(item[1])}`} key={index}>
          <FullCard item={item} />
        </Link>
      ))}
    </main>
  );
}
