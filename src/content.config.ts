import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*/{index,en,it}.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      description: z.string().min(1).max(320),
      client: z.string().min(1),
      role: z.string().min(1),
      year: z.coerce.string().regex(/^\d{4}$/, 'year must be a 4-digit year'),
      date: z.coerce.date(),
      category: z.enum(['photo', 'video', '3d']),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      cover: image(),
      coverAlt: z.string().min(1),
      youtubeId: z
        .string()
        .regex(/^[\w-]{11}$/, 'youtubeId must be the 11-character video ID, not the full URL')
        .optional(),
      challenge: z.string().optional(),
      solution: z.string().optional(),
      results: z.string().optional(),
      gallery: z
        .array(
          z.object({
            image: image(),
            alt: z.string().min(1),
            caption: z.string().optional(),
          }),
        )
        .default([]),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '*/{index,en,it}.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      description: z.string().min(1).max(320),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      coverImage: image(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, blog };

