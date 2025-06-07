// utils/breadcrumbs.ts
interface BreadcrumbItem {
    label: string;
    href: string;
  }
  
  export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
    // Remove query parameters and hash
    const cleanPath = pathname.split('?')[0].split('#')[0];
    
    // Split path into parts
    const pathParts = cleanPath.split('/').filter(Boolean);
  
    // Custom label mappings
    const labelMap: Record<string, string> = {
      'word': 'Dictionary',
      'category': 'Categories',
      'about': 'About Us',
      'contact': 'Contact',
      'privacy': 'Privacy Policy'
    };
  
    // Build breadcrumbs
    const breadcrumbs = pathParts.map((part, index) => {
      const href = `/${pathParts.slice(0, index + 1).join('/')}`;
      return {
        label: formatLabel(part, labelMap),
        href: href
      };
    });
  
    // Always start with home
    return [{ label: 'Home', href: '/' }, ...breadcrumbs];
  }
  
  function formatLabel(part: string, labelMap: Record<string, string>): string {
    // Handle dynamic routes
    if (part.startsWith('[') && part.endsWith(']')) {
      return part.slice(1, -1); // Remove brackets
    }
    
    // Return custom label if exists
    if (labelMap[part]) {
      return labelMap[part];
    }
    
    // Default formatting
    return part
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }