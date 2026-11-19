import { defineCollection, type ImageFunction } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const emptyToUndefined = (val: unknown) =>
  val === null || (typeof val === 'string' && val.trim() === '') ? undefined : val;

const optionalString = () => z.preprocess(emptyToUndefined, z.string().optional());
const optionalDate = () => z.preprocess(emptyToUndefined, z.coerce.date().optional());
const optionalBentoSpan = () =>
  z.preprocess(emptyToUndefined, z.enum(['hero', 'tall', 'wide', 'standard', 'full']).optional());
const optionalYoutubeId = (message: string) =>
  z.preprocess(emptyToUndefined, z.string().regex(/^[\w-]{11}$/, message).optional());

/**
 * Accetta sia un path pubblico `/uploads/...` o URL assoluto (generati dal CMS in `public/uploads/`)
 * sia un asset locale ottimizzato da Astro `image()` (percorsi relativi in `src/`).
 * L'ordine nella union è intenzionale: le stringhe che iniziano con `/` o `http(s)://` vengono
 * intercettate prima che `image()` tenti di risolverle nel grafo Vite (evitando `ImageNotFound`).
 */
const cmsImage = (image: ImageFunction) =>
  z.union([
    z.string().regex(/^(?:\/|https?:\/\/)/, "Usa un percorso pubblico (/uploads/...) o un URL assoluto"),
    image(),
  ]);

export const progetti = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/progetti' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1, 'Il titolo è obbligatorio'),
      slug: optionalString(),
      description: z.string().min(1).max(320, "Massimo 320 caratteri per l'estratto SEO"),
      client: z.string().min(1, 'Il nome del cliente è obbligatorio'),
      role: z.string().min(1).default('Creative & Visual Direction'),
      year: z.coerce.string().regex(/^\d{4}$/, "L'anno deve essere composto da 4 cifre (YYYY)"),
      publishDate: z.coerce.date(),
      services: z.array(z.string().min(1)).min(1, 'Inserisci almeno un servizio'),
      tags: z.array(z.string().min(1)).min(1, 'Inserisci almeno un tag'),
      category: z.enum(['photo', 'video', '3d', 'marketing']).default('photo'),
      featured: z.boolean().default(false),
      bentoSpan: optionalBentoSpan(),
      draft: z.boolean().default(false),
      coverImage: cmsImage(image),
      coverAlt: z
        .string()
        .min(1, "Il testo alternativo (coverAlt) è obbligatorio per l'accessibilità WCAG 2.1 AA"),
      youtubeId: optionalYoutubeId(
        "youtubeId deve contenere esattamente gli 11 caratteri dell'ID YouTube",
      ),
      videoUrl: optionalString(),
      challenge: optionalString(),
      solution: optionalString(),
      results: optionalString(),
      deliverables: z.array(z.string()).default([]),
      aspectRatio: optionalString(),
      gear: z.array(z.string()).default([]),
      gallery: z
        .array(
          z.object({
            image: cmsImage(image),
            alt: z.string().min(1, 'Alt text obbligatorio per ogni immagine della galleria'),
            caption: optionalString(),
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
      slug: optionalString(),
      description: z.string().min(1).max(320, "Massimo 320 caratteri per l'estratto SEO"),
      publishDate: z.coerce.date(),
      pubDate: optionalDate(),
      updatedDate: optionalDate(),
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
      slug: optionalString(),
      description: z.string().min(1).max(320),
      client: z.string().min(1),
      role: z.string().min(1).default('Creative & Visual Direction'),
      year: z.coerce.string().regex(/^\d{4}$/, 'year must be a 4-digit year'),
      publishDate: z.coerce.date(),
      services: z.array(z.string().min(1)).min(1),
      tags: z.array(z.string().min(1)).min(1),
      category: z.enum(['photo', 'video', '3d', 'marketing']).default('photo'),
      featured: z.boolean().default(false),
      bentoSpan: optionalBentoSpan(),
      draft: z.boolean().default(false),
      coverImage: cmsImage(image),
      coverAlt: z.string().min(1),
      youtubeId: optionalYoutubeId(
        'youtubeId must be the 11-character video ID, not the full URL',
      ),
      videoUrl: optionalString(),
      challenge: optionalString(),
      solution: optionalString(),
      results: optionalString(),
      deliverables: z.array(z.string()).default([]),
      aspectRatio: optionalString(),
      gear: z.array(z.string()).default([]),
      gallery: z
        .array(
          z.object({
            image: cmsImage(image),
            alt: z.string().min(1),
            caption: optionalString(),
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
      slug: optionalString(),
      description: z.string().min(1).max(320),
      publishDate: z.coerce.date(),
      pubDate: optionalDate(),
      updatedDate: optionalDate(),
      category: z
        .enum(['cinema-video', 'fotografia', '3d-cgi', 'brand-direction', 'dietro-le-quinte'])
        .default('cinema-video'),
      tags: z.array(z.string().min(1)).min(1),
      featured: z.boolean().default(false),
      coverImage: cmsImage(image),
      coverAlt: optionalString(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { articoli, progetti, portfolio, blog };
