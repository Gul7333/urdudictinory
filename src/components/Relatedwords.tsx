import React from "react";
import { dictionaryData } from "@/db";
import MiniCard from "./MiniCard";

function Relatedwords({ word }: { word: JsonData }) {
  const fiverelatedwords = dictionaryData
    .filter((item) => item[1].includes(word[1]))
    .slice(0, 7);

  return (
    <section>
      {fiverelatedwords.map((item) => (
        <MiniCard item={item} />
      ))}
    </section>
  );
}

export default Relatedwords;
