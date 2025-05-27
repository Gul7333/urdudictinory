// app/components/SearchBar.tsx
// 'use client';

import { Suspense } from 'react';
// import dynamic from 'next/dynamic';
import SearchBa from './Searchba';
// const SearchBa = dynamic(() => import("./SearchBa"), { ssr: false });
export default function SearchBar() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchBa />
    </Suspense>
  );
}
