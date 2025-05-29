// categories/
import Link from 'next/link';
import { getLetterCounts } from '@/lib/words';

export default function AlphabetCategories() {
  const letterCounts = getLetterCounts();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 font-urdu">
        اردو حروف تہجی کے لحاظ سے الفاظ
      </h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {letterCounts.map(({letter, count}) => (
          <div key={letter} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <Link 
              href={`/categories/${encodeURIComponent(letter)}`}
              className="block hover:bg-gray-50 transition-colors"
              aria-label={`${letter} سے شروع ہونے والے ${count} الفاظ`}
            >
              <div className="bg-blue-50 p-4 text-center border-b">
                <span className="text-3xl font-urdu">{letter}</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-sm text-gray-600 font-urdu">
                  {count} الفاظ
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}