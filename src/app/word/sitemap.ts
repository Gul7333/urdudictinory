import type { MetadataRoute } from 'next';
import { dictionaryData } from '@/db';
const BASE_URL = "https://urduzaban.pk"

// Generate sitemap IDs based on total items divided into 30,000 chunks
export async function generateSitemaps() {
  const totalItems = dictionaryData.length;
  const totalSitemaps = Math.ceil(totalItems / 30000);

  return Array.from({ length: totalSitemaps }, (_, idx) => ({
    id: idx.toString(),
  }));
}

// Generate individual sitemap based on the chunk ID
export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const numericId = parseInt(id, 10);
  const start = numericId * 30000;
  const end = start + 30000;

  const items = dictionaryData.slice(start, end);

  return items.map((item) => ({
    url: `${BASE_URL}/word/${encodeURIComponent(item[1])}`,
    lastModified: new Date().toISOString(), // better format for sitemaps
  }));
}
