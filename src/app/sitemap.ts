import { dictionaryData } from "@/db";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return dictionaryData
    .filter((item) => item && item[1])
    .map((item) => ({
      url: `https:urduzaban.pk/${encodeURIComponent(item[1])}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    }));

}

export const revalidate = 300