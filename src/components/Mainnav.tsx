// src/components/Mainnav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./Searchbar";
const urduAlphabet = [
  "ا",
  "آ",
  "ب",
  "پ",
  "ت",
  "ٹ",
  "ث",
  "ج",
  "چ",
  "ح",
  "خ",
  "د",
  "ڈ",
  "ذ",
  "ر",
  "ڑ",
  "ز",
  "ژ",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ک",
  "گ",
  "ل",
  "م",
  "ن",
  "و",
  "ہ",
  "ھ",
  "ء",
  "ی",
  "ے",
];

export default function MainNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentLetter = pathname.split("/").pop() || "";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-3">
      <div className="container mx-auto  py-3">
        {/* Mobile Header with Hamburger */}
        <div className="flex items-center justify-between">
          
          <Link href="/" className="text-2xl font-bold font-urdu text-blue-800">
            اردو زبان لغت
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-amber-900 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className=" mt-4 pb-4">
            <div className="grid grid-cols-5 gap-2">
              {urduAlphabet.map((letter) => (
                <Link
                  key={letter}
                  href={`/categories/${encodeURIComponent(letter)}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl p-2 text-center rounded transition-colors ${
                    decodeURIComponent(currentLetter) === letter
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {letter}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    
        <SearchBar />
      
    </nav>
  );
}
