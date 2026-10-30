import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      description: z.string().min(1).max(320),
      client: z.string().min(1),
      role: z.string().min(1).default('Creative & Visual Direction'),
      year: z.coerce.string().regex(/^\d{4}$/, 'year must be a 4-digit year'),
      publishDate: z.coerce.date(),
      services: z.array(z.string().min(1)).min(1),
      tags: z.array(z.string().min(1)).min(1),
      category: z.enum(['photo', 'video', '3d', 'marketing']).default('photo'),
      featured: z.boolean().default(false),
      bentoSpan: z.enum(['hero', 'tall', 'wide', 'standard', 'full']).optional(),
      draft: z.boolean().default(false),
      coverImage: image(),
      coverAlt: z.string().min(1),
      youtubeId: z
        .string()
        .regex(/^[\w-]{11}$/, 'youtubeId must be the 11-character video ID, not the full URL')
        .optional(),
      videoUrl: z.string().optional(),
      challenge: z.string().optional(),
      solution: z.string().optional(),
      results: z.string().optional(),
      deliverables: z.array(z.string()).default([]),
      aspectRatio: z.string().optional(),
      gear: z.array(z.string()).default([]),
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

export const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      description: z.string().min(1).max(320),
      publishDate: z.coerce.date(),
      pubDate: z.coerce.date().optional(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string().min(1)).min(1),
      featured: z.boolean().default(false),
      coverImage: image(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { portfolio, blog };

