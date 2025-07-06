import React from "react";
import { dictionaryData } from "@/db";
import MiniCard from "./MiniCard";
import Link from "next/link";

function Relatedwords({ word }: { word: JsonData }) {
  const targetWord = word[1];
  
  const relatedWords = dictionaryData
    .filter(item => {
      const dictionaryWord = item[1];
      if (dictionaryWord === targetWord) return false;
      if(dictionaryWord.includes(targetWord) || targetWord.includes(dictionaryWord)) return true;    
    })
    .slice(0, 12);

  if (relatedWords.length === 0) return null;

  return (
    <section className="mt-12">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">
        Related Words for "{targetWord}":
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedWords.map((item, index) => (
          <Link href={`/word/${encodeURIComponent(item[1])}`}>
          <MiniCard key={`${item[1]}-${index}`} item={item} />
        </Link>
        ))}
      </div>
    </section>
  );
}

export default Relatedwords;