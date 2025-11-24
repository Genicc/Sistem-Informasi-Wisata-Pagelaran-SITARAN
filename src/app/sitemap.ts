// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = "https://sitaran.co.id";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
        },
    ];
}
