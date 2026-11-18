import { defineConfig, type Template } from 'tinacms';

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

const articleFields: Template['fields'] = [
  {
    type: 'string',
    name: 'title',
    label: 'Titolo Articolo',
    isTitle: true,
    required: true,
    ui: {
      validate: (value) => {
        if (!value || value.trim().length < 5) {
          return 'Il titolo è obbligatorio e deve contenere almeno 5 caratteri.';
        }
      },
    },
  },
  {
    type: 'string',
    name: 'slug',
    label: 'Slug URL personalizzato (opzionale, es. color-grading-aces)',
    description: 'Se lasciato vuoto viene usato il nome del file.',
  },
  {
    type: 'string',
    name: 'description',
    label: 'Estratto SEO (Meta Description)',
    required: true,
    ui: {
      component: 'textarea',
      validate: (value) => {
        if (!value || value.trim().length < 20) {
          return 'Inserisci una descrizione SEO di almeno 20 caratteri.';
        }
        if (value.length > 320) {
          return 'La descrizione SEO non può superare i 320 caratteri.';
        }
      },
    },
  },
  {
    type: 'datetime',
    name: 'publishDate',
    label: 'Data di Pubblicazione',
    required: true,
    ui: {
      dateFormat: 'YYYY-MM-DD',
    },
  },
  {
    type: 'datetime',
    name: 'updatedDate',
    label: 'Data Ultimo Aggiornamento',
    ui: {
      dateFormat: 'YYYY-MM-DD',
    },
  },
  {
    type: 'string',
    name: 'category',
    label: 'Categoria Editoriale',
    required: true,
    options: [
      { value: 'cinema-video', label: 'Cinema & Video Production' },
      { value: 'fotografia', label: 'Fotografia Commerciale' },
      { value: '3d-cgi', label: '3D & CGI Rendering' },
      { value: 'brand-direction', label: 'Digital Brand Direction' },
      { value: 'dietro-le-quinte', label: 'Behind the Scenes & Gear' },
    ],
  },
  {
    type: 'string',
    name: 'tags',
    label: 'Tag Articolo',
    required: true,
    list: true,
    ui: {
      itemProps: (item) => ({ label: item?.toString() || 'Nuovo Tag' }),
      validate: (value) => {
        if (!value || value.length === 0) {
          return 'Inserisci almeno un tag per la classificazione.';
        }
      },
    },
  },
  {
    type: 'image',
    name: 'coverImage',
    label: 'Immagine di Copertina (16:9 / 21:9 WebP consigliato)',
    required: true,
  },
  {
    type: 'string',
    name: 'coverAlt',
    label: 'Testo Alternativo Immagine (Alt Text - Obbligatorio WCAG 2.1 AA)',
    required: true,
    description: 'Descrivi il contenuto visivo della foto per screen reader e indicizzazione SEO.',
    ui: {
      validate: (value) => {
        if (!value || value.trim().length < 5) {
          return "Il testo alternativo (Alt Text) è obbligatorio per l'accessibilità WCAG 2.1 AA.";
        }
      },
    },
  },
  {
    type: 'boolean',
    name: 'featured',
    label: 'In Evidenza (Mostra in cima al Journal / Home)',
  },
  {
    type: 'boolean',
    name: 'draft',
    label: 'Salva come Bozza (Non visibile sul sito pubblico)',
  },
  {
    type: 'rich-text',
    name: 'body',
    label: "Corpo dell'Articolo (MDX / Rich-Text)",
    isBody: true,
    templates: [
      {
        name: 'YouTubeEmbed',
        label: 'Video YouTube',
        fields: [
          {
            name: 'id',
            label: 'ID Video YouTube (11 caratteri, es. dQw4w9WgXcQ)',
            type: 'string',
            required: true,
          },
          {
            name: 'title',
            label: 'Titolo accessibile del video',
            type: 'string',
            required: true,
          },
        ],
      },
      {
        name: 'Callout',
        label: 'Box Nota / Citazione Tecnica',
        fields: [
          {
            name: 'title',
            label: 'Titolo Box',
            type: 'string',
          },
          {
            name: 'text',
            label: 'Contenuto',
            type: 'string',
            ui: { component: 'textarea' },
            required: true,
          },
        ],
      },
    ],
  },
];

const projectFields: Template['fields'] = [
  {
    type: 'string',
    name: 'title',
    label: 'Titolo Progetto',
    isTitle: true,
    required: true,
  },
  {
    type: 'string',
    name: 'slug',
    label: 'Slug URL personalizzato (opzionale, es. alps-brand-campaign)',
  },
  {
    type: 'string',
    name: 'description',
    label: 'Estratto SEO & Sintesi Case Study',
    required: true,
    ui: {
      component: 'textarea',
      validate: (value) => {
        if (!value || value.trim().length < 20) {
          return 'Inserisci una descrizione di almeno 20 caratteri.';
        }
        if (value.length > 320) {
          return 'La descrizione non può superare i 320 caratteri.';
        }
      },
    },
  },
  {
    type: 'string',
    name: 'client',
    label: 'Cliente / Brand',
    required: true,
  },
  {
    type: 'string',
    name: 'role',
    label: 'Ruolo Duerre',
    required: true,
  },
  {
    type: 'string',
    name: 'year',
    label: 'Anno di Produzione (YYYY)',
    required: true,
    ui: {
      validate: (value) => {
        if (!value || !/^\d{4}$/.test(value)) {
          return 'Inserisci un anno valido a 4 cifre (es. 2026).';
        }
      },
    },
  },
  {
    type: 'datetime',
    name: 'publishDate',
    label: 'Data di Pubblicazione',
    required: true,
    ui: {
      dateFormat: 'YYYY-MM-DD',
    },
  },
  {
    type: 'string',
    name: 'category',
    label: 'Categoria Principale',
    required: true,
    options: [
      { value: 'photo', label: 'Fotografia Commerciale (photo)' },
      { value: 'video', label: 'Cinema & Video Production (video)' },
      { value: '3d', label: '3D & CGI Rendering (3d)' },
      { value: 'marketing', label: 'Digital Brand Direction (marketing)' },
    ],
  },
  {
    type: 'string',
    name: 'services',
    label: 'Servizi Erogati',
    required: true,
    list: true,
  },
  {
    type: 'string',
    name: 'tags',
    label: 'Tag Progetto',
    required: true,
    list: true,
  },
  {
    type: 'string',
    name: 'bentoSpan',
    label: 'Layout Griglia Portfolio (Bento Span)',
    options: [
      { value: 'standard', label: 'Standard (1x1)' },
      { value: 'wide', label: 'Orizzontale Ampio (Wide 2x1)' },
      { value: 'tall', label: 'Verticale (Tall 1x2)' },
      { value: 'hero', label: 'Hero Principale (2x2)' },
      { value: 'full', label: 'Larghezza Piena (Full Width)' },
    ],
  },
  {
    type: 'boolean',
    name: 'featured',
    label: 'Progetto in Evidenza (Mostra in Home Page)',
  },
  {
    type: 'boolean',
    name: 'draft',
    label: 'Salva come Bozza (Non visibile sul sito pubblico)',
  },
  {
    type: 'image',
    name: 'coverImage',
    label: 'Immagine di Copertina Principale',
    required: true,
  },
  {
    type: 'string',
    name: 'coverAlt',
    label: 'Testo Alternativo Immagine Copertina (Obbligatorio WCAG 2.1 AA)',
    required: true,
    ui: {
      validate: (value) => {
        if (!value || value.trim().length < 5) {
          return "Il testo alternativo (Alt Text) è obbligatorio per l'accessibilità.";
        }
      },
    },
  },
  {
    type: 'string',
    name: 'youtubeId',
    label: 'ID Video YouTube Showreel/Case Study (11 caratteri, opzionale)',
  },
  {
    type: 'string',
    name: 'videoUrl',
    label: 'URL Video MP4/WebM diretto per anteprima loop (opzionale)',
  },
  {
    type: 'string',
    name: 'aspectRatio',
    label: 'Aspect Ratio Video/Media (es. 16/9, 2.39/1, 4/5)',
  },
  {
    type: 'string',
    name: 'challenge',
    label: 'La Sfida (Challenge)',
    ui: { component: 'textarea' },
  },
  {
    type: 'string',
    name: 'solution',
    label: 'La Soluzione Creativa & Tecnica (Solution)',
    ui: { component: 'textarea' },
  },
  {
    type: 'string',
    name: 'results',
    label: 'I Risultati Ottenuti (Results)',
    ui: { component: 'textarea' },
  },
  {
    type: 'string',
    name: 'deliverables',
    label: 'Deliverables Consegnati',
    list: true,
  },
  {
    type: 'string',
    name: 'gear',
    label: 'Attrezzatura & Pipeline Tecnica (Gear)',
    list: true,
  },
  {
    type: 'object',
    name: 'gallery',
    label: 'Galleria Fotografica del Progetto',
    list: true,
    ui: {
      itemProps: (item) => ({ label: item?.alt || 'Immagine Galleria' }),
    },
    fields: [
      {
        type: 'image',
        name: 'image',
        label: 'File Immagine',
        required: true,
      },
      {
        type: 'string',
        name: 'alt',
        label: 'Alt Text Accessibile (Obbligatorio WCAG 2.1 AA)',
        required: true,
      },
      {
        type: 'string',
        name: 'caption',
        label: 'Didascalia Tecnica / Editoriale (opzionale)',
      },
    ],
  },
  {
    type: 'rich-text',
    name: 'body',
    label: 'Approfondimento Case Study (MDX / Rich-Text)',
    isBody: true,
  },
];

export default defineConfig({
  branch,
  clientId: process.env.TINACMS_CLIENT_ID || '',
  token: process.env.TINACMS_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'articoli',
        label: 'Articoli (Editorial Journal)',
        path: 'src/content/articoli',
        format: 'mdx',
        ui: {
          filename: {
            readonly: false,
            slugify: (values: Record<string, any>) =>
              (values?.slug || values?.title || 'nuovo-articolo')
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, ''),
          },
        },
        defaultItem: () => ({
          publishDate: new Date().toISOString(),
          category: 'cinema-video',
          featured: false,
          draft: false,
          tags: ['Cinema'],
        }),
        fields: articleFields,
      },
      {
        name: 'progetti',
        label: 'Progetti (Case Studies)',
        path: 'src/content/progetti',
        format: 'mdx',
        ui: {
          filename: {
            readonly: false,
            slugify: (values: Record<string, any>) =>
              (values?.slug || values?.title || 'nuovo-progetto')
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, ''),
          },
        },
        defaultItem: () => ({
          role: 'Creative & Visual Direction',
          year: new Date().getFullYear().toString(),
          publishDate: new Date().toISOString(),
          category: 'photo',
          bentoSpan: 'standard',
          featured: false,
          draft: false,
          services: ['Fotografia Commerciale'],
          tags: ['Commercial'],
        }),
        fields: projectFields,
      },
      {
        name: 'blog',
        label: 'Blog (Archivio IT/EN)',
        path: 'src/content/blog',
        format: 'md',
        fields: articleFields,
      },
      {
        name: 'portfolio',
        label: 'Portfolio (Archivio IT/EN)',
        path: 'src/content/portfolio',
        format: 'md',
        fields: projectFields,
      },
    ],
  },
});
