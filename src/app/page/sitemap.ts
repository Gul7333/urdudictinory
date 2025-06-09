import { dictionaryData } from "@/db";
import { urduAlphabet } from "@/lib/words";
import { MetadataRoute } from "next";
const BASE_URL = "https://urduzaban.pk"
// Generate individual sitemap based on the chunk ID
export default function sitemap(): MetadataRoute.Sitemap {
 const id = dictionaryData.length / 40
 const pages = Math.ceil(id)
 const paged = Array.from({ length: pages }, (_, idx) => ({
    id: idx,
  }));

  return paged.map((item) => ({
    url: `${BASE_URL}/page/${item.id}`,
    lastModified: new Date().toISOString(), // better format for sitemaps
    priority: 0.8
  }));
}
