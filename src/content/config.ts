import { defineCollection, type ImageFunction } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Accetta sia un asset ottimizzato da Astro `image()` (per file relativi in src/)
 * sia un path pubblico `/uploads/...` generato dall'upload visivo del CMS in `public/uploads/`.
 */
const cmsImage = (image: ImageFunction) =>
  z.union([
    image(),
    z.string().min(1, "Il percorso dell'immagine di copertina è obbligatorio"),
  ]);

export const progetti = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/progetti' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1, 'Il titolo è obbligatorio'),
      slug: z.string().optional(),
      description: z.string().min(1).max(320, "Massimo 320 caratteri per l'estratto SEO"),
      client: z.string().min(1, 'Il nome del cliente è obbligatorio'),
      role: z.string().min(1).default('Creative & Visual Direction'),
      year: z.coerce.string().regex(/^\d{4}$/, "L'anno deve essere composto da 4 cifre (YYYY)"),
      publishDate: z.coerce.date(),
      services: z.array(z.string().min(1)).min(1, 'Inserisci almeno un servizio'),
      tags: z.array(z.string().min(1)).min(1, 'Inserisci almeno un tag'),
      category: z.enum(['photo', 'video', '3d', 'marketing']).default('photo'),
      featured: z.boolean().default(false),
      bentoSpan: z.enum(['hero', 'tall', 'wide', 'standard', 'full']).optional(),
      draft: z.boolean().default(false),
      coverImage: cmsImage(image),
      coverAlt: z
        .string()
        .min(1, "Il testo alternativo (coverAlt) è obbligatorio per l'accessibilità WCAG 2.1 AA"),
      youtubeId: z
        .string()
        .regex(/^[\w-]{11}$/, "youtubeId deve contenere esattamente gli 11 caratteri dell'ID YouTube")
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
            image: cmsImage(image),
            alt: z.string().min(1, 'Alt text obbligatorio per ogni immagine della galleria'),
            caption: z.string().optional(),
          }),
        )
        .default([]),
    }),
});

export const articoli = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articoli' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1, 'Il titolo è obbligatorio'),
      slug: z.string().optional(),
      description: z.string().min(1).max(320, "Massimo 320 caratteri per l'estratto SEO"),
      publishDate: z.coerce.date(),
      pubDate: z.coerce.date().optional(),
      updatedDate: z.coerce.date().optional(),
      category: z
        .enum(['cinema-video', 'fotografia', '3d-cgi', 'brand-direction', 'dietro-le-quinte'])
        .default('cinema-video'),
      tags: z.array(z.string().min(1)).min(1, 'Inserisci almeno un tag'),
      featured: z.boolean().default(false),
      coverImage: cmsImage(image),
      coverAlt: z
        .string()
        .min(1, "Il testo alternativo (coverAlt) è obbligatorio per l'accessibilità WCAG 2.1 AA"),
      draft: z.boolean().default(false),
    }),
});

export const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      slug: z.string().optional(),
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
      slug: z.string().optional(),
      description: z.string().min(1).max(320),
      publishDate: z.coerce.date(),
      pubDate: z.coerce.date().optional(),
      updatedDate: z.coerce.date().optional(),
      category: z
        .enum(['cinema-video', 'fotografia', '3d-cgi', 'brand-direction', 'dietro-le-quinte'])
        .default('cinema-video'),
      tags: z.array(z.string().min(1)).min(1),
      featured: z.boolean().default(false),
      coverImage: image(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { articoli, progetti, portfolio, blog };
