// app/components/SuggestionEnhancer.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SuggestionEnhancer() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [allWords, setAllWords] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/words.json").then(res => res.json()).then(setAllWords);
  }, []);

  useEffect(() => {
    const filtered = allWords
      .filter((w) => w.toLowerCase().startsWith(query.toLowerCase()))
      .slice(0, 10);
    setSuggestions(filtered);
  }, [query, allWords]);

  return (
    <>
      <input
        type="search"
        className="p-3 py-4 border border-gray-300 rounded w-full md:w-2/3 text-right font-urdu absolute opacity-0 pointer-events-none"
        aria-hidden
      />
      <input
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShow(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push(`/word/${encodeURIComponent(query)}`);
          }
        }}
        onBlur={() => setTimeout(() => setShow(false), 100)}
        className="p-3 py-4 border border-blue-400 absolute top-0 w-full md:w-2/3 bg-transparent text-right font-urdu z-10"
        placeholder=""
      />
      {show && suggestions.length > 0 && (
        <ul className="absolute top-full mt-1 w-full md:w-2/3 bg-white border border-gray-300 rounded shadow z-10 max-h-60 overflow-auto">
          {suggestions.map((s) => (
            <li
              key={s}
              onMouseDown={() => router.push(`/word/${encodeURIComponent(s)}`)}
              className="p-2 hover:bg-gray-100 cursor-pointer text-right font-urdu"
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
