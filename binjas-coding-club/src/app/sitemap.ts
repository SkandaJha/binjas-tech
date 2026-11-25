import type { MetadataRoute } from "next";
import { club } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: club.url, lastModified: new Date() }];
}
