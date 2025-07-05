import React from "react";
import { dictionaryData } from "@/db";
import MiniCard from "./MiniCard";

function Relatedwords({ word }: { word: JsonData }) {
  const targetWord = word[1];
  
  const relatedWords = dictionaryData
    .filter(item => {
      const dictionaryWord = item[1];
      if (dictionaryWord === targetWord) return false;
      
      // Check if the dictionary word is a substring of target word
      // OR if target word is a substring of dictionary word
      if (targetWord.includes(dictionaryWord) || dictionaryWord.includes(targetWord)) return true;
 
      
      // Find common substrings of at least 3 characters
      for (let len = Math.min(targetWord.length, dictionaryWord.length); len >= 3; len--) {
        for (let i = 0; i <= dictionaryWord.length - len; i++) {
          const substring = dictionaryWord.substring(i, i + len);
          if (targetWord.includes(substring)) {
            return true;
          }
        }
      }
      return false;
    })
    .slice(0, 12);

  if (relatedWords.length === 0) return null;

  return (
    <section className="mt-8">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">
        Related Words for "{targetWord}":
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedWords.map((item, index) => (
          <MiniCard key={`${item[1]}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Relatedwords;