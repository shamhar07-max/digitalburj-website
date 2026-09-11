import type { MetadataRoute } from "next";
import { BLOG } from "@/content/compose";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://digitalburj.com";
  const staticPages = ["/", "/academy", "/studio", "/business-ai", "/talent", "/global-careers", "/projects", "/jobs", "/skills", "/community", "/about", "/contact", "/services", "/journal"];
  const dyn = BLOG.map((p) => `/journal/${p.slug}`);
  return [...staticPages, ...dyn].map((p) => ({
    url: base + p,
    lastModified: new Date("2026-09-11"),
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : p.split("/").length === 2 ? 0.7 : 0.5,
  }));
}
