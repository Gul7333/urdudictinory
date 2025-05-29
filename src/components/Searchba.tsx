"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchBa() {
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
      w.toLowerCase().startsWith(query.toLowerCase())
    ).slice(0, 10);
    setSuggestions(filtered);
  }, [query, allWords]);

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/word/${encodeURIComponent(query.trim())}`);
    setShowSuggestions(false);
  };

  return (
    <div className="mt-5 flex flex-col items-center gap-2 px-6 relative">
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
        className="p-3 py-4 border border-gray-300 rounded w-full md:w-2/3 text-right font-urdu"
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute top-full mt-1 w-full md:w-2/3 bg-white border border-gray-300 rounded shadow z-10 max-h-60 overflow-auto">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onMouseDown={() => {
                setQuery(suggestion);
                handleSearch();
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
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
}




