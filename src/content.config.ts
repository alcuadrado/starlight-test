import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { githubReleasesCollection } from "./content/githubReleases";
import { blogpostsCollection } from "./content/blogposts";

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  githubReleases: githubReleasesCollection,
  blogpostsCollection: blogpostsCollection,
};
