import type { MetadataRoute } from 'next'
 const BASE_URL = "https://urduzaban.pk"
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
        url: `${BASE_URL}/privacy`,
        lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
        url: `${BASE_URL}/contact`,
        lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}