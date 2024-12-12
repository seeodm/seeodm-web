import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://seeodm.com/",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1.0,
    },
  ];
}
