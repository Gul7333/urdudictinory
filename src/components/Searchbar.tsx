"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";


export  function SearchBa() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [allWords, setAllWords] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    fetch("/words.json")
      .then((res) => res.json())
      .then((data) => setAllWords(data));
  }, []);

  useEffect(() => {
    const word = searchParams.get("word");
    if (word) setQuery(word);
  }, [searchParams]);

  useEffect(() => {
    if (!query.trim()) return setSuggestions([]);
    const filtered = allWords.filter((w) =>
      w.startsWith(query)
    ).slice(0, 15);
    setSuggestions(filtered);
  }, [query, allWords]);

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/word/${encodeURIComponent(query.trim())}`);
    setShowSuggestions(false);
  };
  const openSuggestion = (suggestion : string ) => {
    setQuery(suggestion)
    if (!suggestion.trim()) return;
    router.push(`/word/${encodeURIComponent(suggestion.trim())}`);
    setShowSuggestions(false);
  };


  return (
    <div className="mt-1 grid grid-cols-[75%_25%] items-center  relative px-2">
      <input
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowSuggestions(true);
        }}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        placeholder="یہاں سرچ کریں"
        className="px-3 py-2 border border-gray-300 rounded w-full font-bold text-right font-urdu leading-loose"
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute top-full mt-1 w-full md:w-2/3 bg-white dark:bg-gray-700 border border-gray-300 rounded shadow z-10 max-h-60 overflow-auto">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onMouseDown={ () =>  {
                openSuggestion(suggestion)
            }}
              className="p-2 hover:bg-gray-100 cursor-pointer text-right font-urdu"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-3 h-full rounded hover:bg-blue-700 transition text-center"
      >
        Search
      </button>
    </div>
  );
}





// searchh bar is client side , and uses useSearchparams
export default function SearchBar() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchBa  />
    </Suspense>
  );
}


