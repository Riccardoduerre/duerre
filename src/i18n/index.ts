export type Locale = 'en' | 'it';
export const LOCALES: readonly Locale[] = ['en', 'it'];
export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(value: unknown): value is Locale {
  return value === 'en' || value === 'it';
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    nav_projects: 'Projects',
    nav_about: 'About',
    nav_blog: 'Journal',
    nav_contact: 'Contact',
    nav_cta: 'Start a project',
    switch_lang_label: 'Leggi in italiano',
    switch_lang_short: 'IT',
    theme_toggle: 'Toggle colour theme',
    hero_eyebrow: 'Commercial Photography · Film · 3D CGI',
    hero_headline: 'Crafting Visual Stories & 3D Content for Premium Brands',
    hero_subheadline: 'Commercial Photography, Videography, and 3D Content Creation by Riccardo Riva.',
    hero_cta_primary: 'View Selected Work',
    hero_cta_secondary: 'Get in Touch',
    service_1_title: 'Commercial Photography',
    service_2_title: 'Cinema & Motion',
    service_3_title: '3D CGI & VFX',
    service_4_title: 'Digital Strategy',
    view_project: 'View Project',
    selected_works: 'Selected work',
    all_projects_link: 'All projects',
    studio_eyebrow: 'The studio',
    studio_blurb: 'Duerre Media is the visual practice of Riccardo Riva — photography, film, and 3D content for brands that care about how they are seen. Small by design, hands-on from concept to final grade.',
    latest_articles: 'From the journal',
    all_articles: 'All articles',
    projects_title: 'Projects',
    projects_intro: 'Commercial photography, film, and 3D work for premium brands — selected case studies with the thinking behind each frame.',
    filter_label: 'Filter by discipline',
    category_photo: 'Photography',
    category_video: 'Film',
    category_3d: '3D / CGI',
    project_cta_title: 'Have a project like this in mind?',
    project_cta_desc: 'Tell me about the brief — I usually reply within 48 hours.',
    post_cta_title: 'Need visuals that work this hard?',
    contact_title: 'Let’s make something worth looking at.',
    contact_form_subject: 'New inquiry from duerremedia.com',
    contact_form_budget: 'Budget (optional)',
    contact_form_budget_placeholder: 'e.g. €5–10k',
    contact_form_fallback_note: 'This form opens your email app. You can also write directly to',
    thanks_title: 'Message received.',
    thanks_desc: 'Thank you — I’ll read your brief and get back to you within 24–48 hours.',
    thanks_back: 'Back to the homepage',
    not_found_title: 'This frame is missing.',
    social_label: 'Elsewhere',
    footer_stack: 'Built with Astro. Hosted on GitHub Pages.',
    prev_project: 'Previous project',
    next_project: 'Next project',
    prev_post: 'Previous article',
    next_post: 'Next article',
    label_name: 'Name',
    label_email: 'Email',
    label_message: 'Message & Brief',
    label_send: 'Send Message',
    open_email_app: 'Open Email App',
    label_client: 'Client',
    label_role: 'Role',
    label_year: 'Year',
    label_category: 'Category',
    challenge_title: 'The Challenge',
    solution_title: 'The Solution',
    blog_meta_desc: 'Thoughts on photography, filmmaking, and visual arts.',
    blog_intro: 'Process, behind the scenes, and thoughts on visual arts.',
    about_workflow_title: 'Workflow & Services',
    about_workflow_p: 'From the first spark of an idea to the final delivery, I handle all aspects of production. Whether it’s a still life product shoot, an editorial fashion film, or a fully CGI rendered commercial, the goal is always the same: visual excellence that speaks for itself.',
    about_clients_title: 'Selected Clients',
    about_clients_p: 'Working with forward-thinking brands, design agencies, and commercial clients across Europe who value precision, narrative depth, and visual polish.',
    about_gear_title: 'Gear & Production Stack',
  },
  it: {
    nav_projects: 'Progetti',
    nav_about: 'Chi sono',
    nav_blog: 'Journal',
    nav_contact: 'Contatti',
    nav_cta: 'Inizia un progetto',
    switch_lang_label: 'Read in English',
    switch_lang_short: 'EN',
    theme_toggle: 'Cambia tema colore',
    hero_eyebrow: 'Fotografia commerciale · Film · 3D CGI',
    hero_headline: 'Racconti visivi e contenuti 3D per brand premium',
    hero_subheadline: 'Fotografia commerciale, videografia e creazione di contenuti 3D di Riccardo Riva.',
    hero_cta_primary: 'Guarda i Lavori',
    hero_cta_secondary: 'Contattami',
    service_1_title: 'Fotografia Commerciale',
    service_2_title: 'Produzione Video',
    service_3_title: 'Creazione 3D / CGI',
    service_4_title: 'Strategia Digitale',
    view_project: 'Vedi Progetto',
    selected_works: 'Lavori selezionati',
    all_projects_link: 'Tutti i progetti',
    studio_eyebrow: 'Lo studio',
    studio_blurb: 'Duerre Media è la pratica visiva di Riccardo Riva — fotografia, film e contenuti 3D per brand che tengono a come vengono percepiti.',
    latest_articles: 'Dal journal',
    all_articles: 'Tutti gli articoli',
    projects_title: 'Progetti',
    projects_intro: 'Fotografia commerciale, film e lavori 3D per brand premium.',
    filter_label: 'Filtra per disciplina',
    category_photo: 'Fotografia',
    category_video: 'Film',
    category_3d: '3D / CGI',
    project_cta_title: 'Hai in mente un progetto simile?',
    project_cta_desc: 'Raccontami il brief — di solito rispondo entro 48 ore.',
    post_cta_title: 'Ti servono immagini che lavorino così?',
    contact_title: 'Creiamo qualcosa che valga la pena guardare.',
    contact_form_subject: 'Nuova richiesta da duerremedia.com',
    contact_form_budget: 'Budget (facoltativo)',
    contact_form_budget_placeholder: 'es. €5–10k',
    contact_form_fallback_note: 'Questo modulo apre la tua app email. Puoi anche scrivere direttamente a',
    thanks_title: 'Messaggio ricevuto.',
    thanks_desc: 'Grazie — leggerò il tuo brief e ti risponderò entro 24–48 ore.',
    thanks_back: 'Torna alla home',
    not_found_title: 'Questo fotogramma manca.',
    social_label: 'Altrove',
    footer_stack: 'Realizzato con Astro. Ospitato su GitHub Pages.',
    prev_project: 'Progetto precedente',
    next_project: 'Progetto successivo',
    prev_post: 'Articolo precedente',
    next_post: 'Articolo successivo',
    label_name: 'Nome',
    label_email: 'Email',
    label_message: 'Messaggio & Brief',
    label_send: 'Invia Messaggio',
    open_email_app: 'Apri Client Email',
    label_client: 'Cliente',
    label_role: 'Ruolo',
    label_year: 'Anno',
    label_category: 'Categoria',
    challenge_title: 'La Sfida',
    solution_title: 'La Soluzione',
    blog_meta_desc: 'Riflessioni su fotografia, cinema e arti visive.',
    blog_intro: 'Dietro le quinte, processo creativo e riflessioni sulle arti visive.',
    about_workflow_title: 'Metodo & Servizi',
    about_workflow_p: 'Dalla prima scintilla creativa alla consegna finale, curo ogni aspetto della produzione: still life di prodotto, filmati moda ed editoriali, rendering 3D fotorealistici, sempre con l’obiettivo di un’eccellenza visiva senza compromessi.',
    about_clients_title: 'Clienti Selezionati',
    about_clients_p: 'Collaborazioni con brand innovativi, agenzie di design e clienti commerciali in tutta Europa che cercano precisione, profondità narrativa e qualità visiva impeccabile.',
    about_gear_title: 'Attrezzatura & Setup di Produzione',
  }
};

export function useTranslations(lang: Locale) {
  return (key: string, vars: Record<string, string | number> = {}) => {
    let str = translations[lang][key] ?? translations.en[key] ?? key;
    for (const [k, v] of Object.entries(vars)) str = str.replaceAll(`{{${k}}}`, String(v));
    return str;
  };
}

export function localePath(lang: Locale, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') {
    return clean;
  }
  return `/it${clean === '/' ? '/' : clean}`;
}

export function switchLocalePath(pathname: string, target: Locale) {
  const stripped = pathname.replace(/^\/(en|it)(?=\/|$)/, '') || '/';
  if (target === 'en') {
    return stripped;
  }
  return `/it${stripped === '/' ? '/' : stripped}`;
}
