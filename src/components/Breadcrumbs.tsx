// components/Breadcrumbs.tsx
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb" dir='ltr'>
      <ol className="flex items-center space-x-2 md:space-x-4">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        
        {items.map((item, index) => (
          <li key={item.href}>
            <div className="flex items-center">
              <ChevronRightIcon 
                className="h-4 w-4 flex-shrink-0 text-gray-400" 
                aria-hidden="true" 
              />
              <Link
                href={item.href}
                className={`ml-2 md:ml-4 text-sm font-medium ${
                  index === items.length - 1
                    ? 'text-indigo-600 hover:text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}