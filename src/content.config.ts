import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { z } from "astro:schema";

const heroCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    cta: z.object({
      title: z.string(),
      url: z.string(),
    }),
    block: z.object({
      title: z.string(),
      text: z.string(),
    }),
  }),
});

const whyHardhatCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    footer: z.object({
      title: z.string(),
      text: z.string(),
    }),
    featureCards: z.array(
      z.object({
        imagePaths: z.object({
          lg: z.string(),
          m: z.string().optional(),
          md: z.string(),
          sm: z.string(),
        }),
        imageDarkPaths: z.object({
          lg: z.string(),
          m: z.string().optional(),
          md: z.string(),
          sm: z.string(),
        }),
        articleOne: z.object({
          title: z.string(),
          text: z.string(),
          icon: z.string(),
          cta: z.object({
            url: z.string(),
            title: z.string(),
          }),
        }),
        articleTwo: z.object({
          title: z.string(),
          text: z.string(),
          icon: z.string(),
          cta: z.object({
            url: z.string(),
            title: z.string(),
          }),
        }),
      }),
    ),
  }),
});

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  "landing/hero": heroCollection,
  "landing/why-hardhat": whyHardhatCollection,
};
