import { urduAlphabet } from "@/lib/words";
import { MetadataRoute } from "next";
const BASE_URL = "https://urduzaban.pk"
// Generate individual sitemap based on the chunk ID
export default function sitemap(): MetadataRoute.Sitemap {
 
  return urduAlphabet.map((item) => ({
    url: `${BASE_URL}/category/${encodeURIComponent(item)}`,
    lastModified: new Date().toISOString(), // better format for sitemaps
    priority: 0.8
  }));
}

export const revalidate = 400