// components/Breadcrumbs.tsx
'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useMemo } from 'react';

type BreadcrumbItem = {
  label: string;
  href: string;
  isCurrent?: boolean;
};

type BreadcrumbsProps = {
  className?: string;
  customItems?: BreadcrumbItem[]; // Allow custom breadcrumb items
  homeLabel?: string; // Customizable home label
  separator?: React.ReactNode; // Custom separator
};

export default function Breadcrumbs({
  className = '',
  customItems,
  homeLabel = 'Home',
  separator = <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />,
}: BreadcrumbsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Generate breadcrumbs based on pathname
  const generatedBreadcrumbs = useMemo(() => {
    if (customItems) return customItems;
    
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    let accumulatedPath = '';
    for (let i = 0; i < pathSegments.length; i++) {
      const segment = decodeURIComponent(pathSegments[i]);
      accumulatedPath += `/${segment}`;
      
      // Handle dynamic routes
      const isDynamic = segment.startsWith('[') && segment.endsWith(']');
      const paramName = isDynamic ? segment.slice(1, -1) : null;
      const paramValue = paramName ? searchParams?.get(paramName) : null;

      breadcrumbs.push({
        label: isDynamic 
          ? paramValue || segment 
          : formatLabel(segment),
        href: isDynamic && paramValue 
          ? accumulatedPath.replace(segment, paramValue) 
          : accumulatedPath,
        isCurrent: i === pathSegments.length - 1
      });
    }

    return breadcrumbs;
  }, [pathname, searchParams, customItems]);

  // Combine with home breadcrumb
  const breadcrumbs = useMemo(() => [
    { 
      label: homeLabel, 
      href: '/', 
      isCurrent: false 
    },
    ...generatedBreadcrumbs
  ], [generatedBreadcrumbs, homeLabel]);

  return (
    <nav 
      className={`flex ${className}`} 
      aria-label="Breadcrumb"
      dir="ltr"
    >
      <ol className="flex items-center gap-2 md:gap-4 flex-wrap">
        {breadcrumbs.map((item, index) => (
          <li key={`${item.href}-${index}`} className="flex items-center">
            {index > 0 && (
              <span className="mx-1 md:mx-2" aria-hidden="true">
                {separator}
              </span>
            )}
            <Link
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                item.isCurrent
                  ? 'text-indigo-600 hover:text-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              aria-current={item.isCurrent ? 'page' : undefined}
            >
              {index === 0 ? (
                <span className="flex items-center">
                  <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <span className="sr-only">{homeLabel}</span>
                </span>
              ) : (
                item.label
              )}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Helper function to format breadcrumb labels
function formatLabel(segment: string): string {
  // Custom mappings for specific path segments
  const labelMap: Record<string, string> = {
    'word': 'Word',
    'category': 'Category',
    'about': 'About Us',
    'contact': 'Contact',
    'privacy': 'Privacy Policy'
  };

  return labelMap[segment] || 
    segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
}