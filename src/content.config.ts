import { defineCollection, z } from "astro:content";

const cases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    service: z.string(),
    location: z.string(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { cases, blog };

