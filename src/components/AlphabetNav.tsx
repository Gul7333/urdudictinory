// components/MainNav.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { urduAlphabet } from '@/lib/words';

export default function MainNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentLetter = pathname.split('/').pop() || '';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Mobile Header with Hamburger */}
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-urdu text-blue-800">
            اردو لغت
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
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

        {/* Alphabet Navigation - Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-2 mt-4">
          {urduAlphabet.map(letter => (
            <Link
              key={letter}
              href={`/categories/${encodeURIComponent(letter)}`}
              className={`text-xl p-2 min-w-9 text-center rounded transition-colors ${
                decodeURIComponent(currentLetter) === letter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-current={decodeURIComponent(currentLetter) === letter ? 'page' : undefined}
            >
              {letter}
            </Link>
          ))}
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="grid grid-cols-5 gap-2">
              {urduAlphabet.map(letter => (
                <Link
                  key={letter}
                  href={`/categories/${encodeURIComponent(letter)}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl p-2 text-center rounded transition-colors ${
                    decodeURIComponent(currentLetter) === letter
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {letter}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}