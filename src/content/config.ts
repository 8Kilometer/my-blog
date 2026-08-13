import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('随笔'),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
  }),
});

export const collections = { blog };