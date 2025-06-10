import { MetadataRoute } from "next";
const BASE_URL = "https://urduzaban.pk"
// Generate individual sitemap based on the chunk ID
const urduAlphabet = [
    "ا", "آ", "ب", "پ", "ت", "ٹ", "ث", "ج", "چ", "ح",
    "خ", "د", "ڈ", "ذ", "ر", "ڑ", "ز", "ژ", "س", "ش",
    "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ک", "گ",
    "ل", "م", "ن", "و", "ہ", "ھ", "ء", "ی", "ے"
  ];
export default function sitemap(): MetadataRoute.Sitemap {
 
  return urduAlphabet.map((item) => ({
    url: `${BASE_URL}/category/${encodeURIComponent(item)}`,
    lastModified: new Date().toISOString(), // better format for sitemaps
    priority: 0.8
  }));
}

export const revalidate = 400