import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { githubReleasesCollection } from "./content/githubReleases";
import { blogpostsCollection } from "./content/blogposts";
import { communityPluginsCollection } from "./content/community-plugins";
import { officialPlugins } from "./content/officialPlugins";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        description: z.string(),
        topic: z.string().optional(),
      }),
    }),
  }),
  githubReleases: githubReleasesCollection,
  blogpostsCollection: blogpostsCollection,
  communityPlugins: communityPluginsCollection,
  officialPlugins: officialPlugins,
};
