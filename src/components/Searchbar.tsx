// app/components/SearchBar.tsx
// 'use client';

import { Suspense } from 'react';
// searchh bar is client side , and uses useSearchparams
import SearchBa from './Searchba';
export default function SearchBar() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchBa />
    </Suspense>
  );
}
