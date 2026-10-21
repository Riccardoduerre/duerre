export type Locale = 'en' | 'it';
export const LOCALES: readonly Locale[] = ['it', 'en'];
export const DEFAULT_LOCALE: Locale = 'it';

export function isLocale(value: unknown): value is Locale {
  return value === 'en' || value === 'it';
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    nav_home: 'Home',
    nav_about: 'Studio',
    nav_services: 'Services',
    nav_projects: 'Portfolio',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    nav_cta: 'Request a Quote',
    switch_lang_label: 'Leggi in italiano',
    switch_lang_short: 'IT',
    theme_toggle: 'Toggle colour theme',

    // Hero & Vision (communicationitalia.com style)
    hero_eyebrow: 'Commercial Photography · Cinema · 3D CGI · Digital Marketing',
    hero_headline_prefix: 'Creative solutions for your',
    hero_headline_highlight: 'Business',
    hero_subheadline: 'Visual direction, commercial photography, cinema production, 3D CGI, and digital marketing by Riccardo Riva.',
    hero_cta_primary: 'Explore Portfolio',
    hero_cta_secondary: 'Get in Touch',
    vision_title_line1: 'Creativity',
    vision_title_line2: 'is intuition',
    vision_subtitle: 'The ability to see connections and light where others see complexity.',
    marquee_1: 'Creative visual solutions for your business',

    // 4 Core Disciplines
    service_1_title: 'Commercial Photography',
    service_1_desc: 'High-impact product, architectural, and editorial photography engineered with studio lighting precision and calibrated color science.',
    service_2_title: 'Cinema & Video Production',
    service_2_desc: 'Corporate films, commercial spots, reportage, and motion direction crafted to tell your brand story across every screen.',
    service_3_title: '3D CGI & Product Rendering',
    service_3_desc: 'Photorealistic 3D product visualizations, physically based shading, and virtual studio environments for pre-launch and campaigns.',
    service_4_title: 'Digital Marketing',
    service_4_desc: 'Integrated digital strategy, social media content direction, SEO, and performance-driven visual campaigns that convert.',

    // Strategy & Skill bars
    strategy_title: 'Communication & Visual Strategies for Your Business',
    strategy_body: 'Duerre is a multidisciplinary creative studio led by Riccardo Riva. We deliver tailored solutions across commercial photography, cinema production, 3D CGI, and digital marketing — supporting forward-thinking brands with a collaborative, results-oriented approach.',
    discover_more: 'Discover More',
    skill_1_label: 'COMMERCIAL PHOTOGRAPHY',
    skill_2_label: 'CINEMA & VIDEO PRODUCTION',
    skill_3_label: '3D CGI & PRODUCT RENDERING',
    skill_4_label: 'DIGITAL MARKETING & STRATEGY',

    // Approach (01 / 02 / 03)
    approach_eyebrow: 'Our Approach',
    approach_title: 'Experts in Strategy, Creativity & Visual Production',
    approach_desc: 'Our workflow is built on a collaborative, flexible, and results-driven process. We analyze your brand deeply to build a tailored visual and digital strategy that supports every stage of growth.',
    step_1_title: 'Analysis & Listening',
    step_1_desc: 'We study your market context, analyze the target audience, and gather the essential insights to define a tailored creative direction.',
    step_2_title: 'Tailored Strategy',
    step_2_desc: 'We develop an integrated visual and communication plan aligned with your goals, combining photography, motion, 3D, and digital strategy.',
    step_3_title: 'Production & Delivery',
    step_3_desc: 'We execute every visual asset — from studio photography and cinema production to 3D CGI renders and digital campaigns — with uncompromising detail.',

    // Services 360
    services_eyebrow: 'Our Services',
    services_title: '360° Visual & Digital Communication',
    services_desc: 'We combine vertical expertise in commercial photography, cinema & video production, 3D CGI rendering, and digital marketing. Complete execution from initial concept to final delivery.',
    services_page_subtitle: 'Integrated visual and digital solutions for your brand',

    // Portfolio & Clients
    marquee_portfolio: 'selected portfolio works',
    view_project: 'View Project',
    selected_works: 'Selected work',
    all_projects_link: 'All Projects',
    clients_eyebrow: 'Brands & Partners Who Chose Us',
    competence_statement_1: 'OUR VISUAL & DIGITAL EXPERTISE,',
    competence_statement_2: 'AT THE SERVICE OF YOUR BUSINESS.',

    // Dual Heading CTA
    cta_dual_1_bold: 'LET’S BUILD',
    cta_dual_1_italic: 'TOGETHER',
    cta_dual_2_italic: 'YOUR',
    cta_dual_2_bold: 'SUCCESS',
    cta_dual_desc: 'We stand alongside brands and businesses to help them grow, communicate, and stand out through tailored visual and digital solutions.',

    // Studio / About
    studio_eyebrow: 'About Duerre',
    studio_blurb: 'Duerre is the creative and visual studio of Riccardo Riva — commercial photography, cinema & video production, 3D CGI rendering, and digital marketing for brands that care about how they are perceived.',
    mission_title: 'Our Mission',
    mission_body: 'Our goal is simple: help your brand communicate better. Every company has a unique story, and our role is to give it a clear, memorable visual voice with passion, technical rigor, and strategic listening.',

    // Blog
    latest_articles: 'News from the Blog',
    blog_section_desc: 'Stay updated on the latest insights in photography, cinema, 3D CGI, and digital marketing.',
    go_to_blog: 'Go to Blog',
    read_more: 'Read',
    all_articles: 'All Articles',
    blog_breadcrumb_sub: 'Articles & Insights',
    blog_page_heading: 'Insights, trends, and technical strategies to communicate effectively.',
    blog_meta_desc: 'Articles and technical essays on photography, filmmaking, 3D CGI, and digital marketing.',
    blog_intro: 'Process, behind the scenes, and technical essays on cinema, lighting, 3D CGI, and digital strategy.',

    // Projects page
    projects_breadcrumb_sub: 'Selected case studies',
    projects_title: 'Portfolio',
    projects_intro: 'Commercial photography, cinema production, 3D CGI, and digital campaigns — selected works and case studies.',
    filter_label: 'Filter by discipline',
    category_photo: 'Photography',
    category_video: 'Video Production',
    category_3d: '3D / CGI',

    // FAQ
    faq_eyebrow: 'FAQ',
    faq_title: 'Frequently Asked Questions',

    // Contact & Misc
    project_cta_title: 'Have a project like this in mind?',
    project_cta_desc: 'Tell me about the brief — I usually reply within 24–48 hours.',
    post_cta_title: 'Need visuals that work this hard?',
    contact_breadcrumb_sub: 'Get in touch',
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
    footer_tagline: 'Creative & Visual Solutions for your Business.',
    newsletter_title: 'Subscribe to the Newsletter',
    newsletter_desc: 'Stay updated on new case studies, articles, and creative insights.',
    newsletter_placeholder: 'Enter your email...',
    newsletter_btn: 'Subscribe',
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
    results_title: 'Impact & Results',
    deliverables_title: 'Key Deliverables',
    gear_title: 'Production Setup',
    label_aspect_ratio: 'Aspect Ratio',
    toc_title: 'On this page',
    copy_link: 'Copy link',
    link_copied: 'Copied to clipboard!',
    related_posts: 'Related Reading',
    about_workflow_title: 'Workflow & Services',
    about_workflow_p: 'From the first spark of an idea to the final delivery, we handle all aspects of visual and digital production: commercial photography, video production, 3D product rendering, and digital marketing.',
    about_clients_title: 'Selected Clients',
    about_clients_p: 'Working with forward-thinking brands, businesses, and commercial clients who value precision, narrative depth, and visual polish.',
    about_gear_title: 'Gear & Production Stack',
  },
  it: {
    nav_home: 'Home',
    nav_about: 'Agenzia',
    nav_services: 'Servizi',
    nav_projects: 'Portfolio',
    nav_blog: 'Blog',
    nav_contact: 'Contatti',
    nav_cta: 'Richiedi Preventivo',
    switch_lang_label: 'Read in English',
    switch_lang_short: 'EN',
    theme_toggle: 'Cambia tema colore',

    // Hero & Vision (communicationitalia.com style)
    hero_eyebrow: 'Fotografia Commerciale · Cinema · 3D CGI · Digital Marketing',
    hero_headline_prefix: 'Soluzioni creative per il tuo',
    hero_headline_highlight: 'Business',
    hero_subheadline: 'Direzione visiva, fotografia commerciale, produzione video, rendering 3D CGI e digital marketing di Riccardo Riva.',
    hero_cta_primary: 'Guarda il Portfolio',
    hero_cta_secondary: 'Contattaci',
    vision_title_line1: 'Creatività',
    vision_title_line2: 'è intuizione',
    vision_subtitle: 'È la capacità di vedere connessioni dove gli altri vedono confusione.',
    marquee_1: 'Soluzioni creative per il tuo business',

    // 4 Core Disciplines
    service_1_title: 'Commercial Photography',
    service_1_desc: 'Fotografia commerciale, still life di prodotto ed editoriale realizzata con gestione avanzata della luce e pipeline colore calibrata.',
    service_2_title: 'Cinema & Video Production',
    service_2_desc: 'Realizziamo contenuti visivi professionali per raccontare la tua azienda: video corporate, spot, reportage e motion direction.',
    service_3_title: '3D CGI & Product Rendering',
    service_3_desc: 'Visualizzazioni 3D fotorealistiche di prodotto, materiali PBR e ambienti virtuali per campagne pubblicitarie e lanci di prodotto.',
    service_4_title: 'Digital Marketing',
    service_4_desc: 'Potenziamo la tua presenza online con strategie personalizzate: dalla gestione dei contenuti social alla SEO e campagne ADV orientate ai risultati.',

    // Strategy & Skill bars
    strategy_title: 'Strategie di Comunicazione per il Tuo Business',
    strategy_body: 'Duerre è il punto di riferimento nella produzione visiva e comunicazione integrata. Offriamo soluzioni personalizzate in ambito fotografia commerciale, produzione video, 3D CGI e digital marketing, supportando aziende di ogni settore con strategie su misura e un approccio orientato all’ascolto e all’innovazione.',
    discover_more: 'Scopri di più',
    skill_1_label: 'COMMERCIAL PHOTOGRAPHY',
    skill_2_label: 'CINEMA & VIDEO PRODUCTION',
    skill_3_label: '3D CGI & PRODUCT RENDERING',
    skill_4_label: 'DIGITAL MARKETING',

    // Approach (01 / 02 / 03)
    approach_eyebrow: 'Il Nostro Approccio',
    approach_title: 'Esperti in Strategia, Creatività e Produzione Visiva',
    approach_desc: 'Il nostro approccio si fonda su un processo collaborativo, flessibile e orientato ai risultati. Analizziamo a fondo il tuo progetto per costruire una strategia personalizzata, creativa ed efficace, che accompagni il tuo brand in ogni fase della crescita.',
    step_1_title: 'Analisi e ascolto',
    step_1_desc: 'Studiamo il contesto, analizziamo il target e raccogliamo le informazioni fondamentali per delineare una strategia personalizzata.',
    step_2_title: 'Strategia su misura',
    step_2_desc: 'Sviluppiamo un piano di comunicazione e direzione visiva integrato e coerente con i tuoi obiettivi, sfruttando le migliori tecniche.',
    step_3_title: 'Sviluppo e produzione',
    step_3_desc: 'Realizziamo concretamente tutti gli strumenti di comunicazione: fotografici, video, 3D CGI e digitali, con qualità e attenzione al dettaglio.',

    // Services 360
    services_eyebrow: 'I nostri servizi',
    services_title: 'Comunicazione a 360 Gradi',
    services_desc: 'Competenze verticali in fotografia commerciale, cinema & video production, rendering 3D CGI e digital marketing. Offriamo un servizio completo, dal concept alla consegna, garantendo qualità, puntualità e massima personalizzazione.',
    services_page_subtitle: 'Soluzioni integrate per la tua comunicazione visiva e digitale',

    // Portfolio & Clients
    marquee_portfolio: 'alcuni dei nostri lavori',
    view_project: 'Vedi Progetto',
    selected_works: 'Alcuni lavori selezionati',
    all_projects_link: 'Tutti i Progetti',
    clients_eyebrow: 'Le aziende che ci hanno scelto',
    competence_statement_1: 'LA NOSTRA COMPETENZA VISIVA E DIGITALE,',
    competence_statement_2: 'AL SERVIZIO DEL TUO BUSINESS.',

    // Dual Heading CTA
    cta_dual_1_bold: 'COSTRUIAMO',
    cta_dual_1_italic: 'INSIEME',
    cta_dual_2_italic: 'IL TUO',
    cta_dual_2_bold: 'SUCCESSO',
    cta_dual_desc: 'Siamo al fianco delle imprese per aiutarle a crescere, comunicare e distinguersi attraverso soluzioni creative, visive e digitali su misura.',

    // Studio / About
    studio_eyebrow: 'Chi siamo',
    studio_blurb: 'Duerre è lo studio creativo e visivo di Riccardo Riva — fotografia commerciale, produzione cinema e video, rendering 3D CGI e digital marketing per brand che puntano all’eccellenza.',
    mission_title: 'La nostra mission',
    mission_body: 'Il nostro obiettivo è semplice: aiutarti a comunicare meglio. Crediamo che dietro ogni brand ci sia una storia unica, e il nostro compito è darle voce nel modo più efficace con passione, competenza tecnica e ascolto.',

    // Blog
    latest_articles: 'NEWS DAL BLOG',
    blog_section_desc: 'Per rimanere aggiornati sulle ultime novità, tecniche visive e tendenze di mercato.',
    go_to_blog: 'VAI AL BLOG',
    read_more: 'Leggi',
    all_articles: 'Tutti gli articoli',
    blog_breadcrumb_sub: 'Articoli & News',
    blog_page_heading: 'Approfondimenti, trend e strategie per comunicare in modo efficace.',
    blog_meta_desc: 'Articoli e approfondimenti su fotografia, cinema, 3D CGI e digital marketing.',
    blog_intro: 'Dietro le quinte, processo creativo e approfondimenti tecnici su cinema, luce, 3D CGI e digital marketing.',

    // Projects page
    projects_breadcrumb_sub: 'Alcuni lavori selezionati',
    projects_title: 'Portfolio',
    projects_intro: 'Fotografia commerciale, produzioni video, 3D CGI e strategie digitali per brand premium.',
    filter_label: 'Filtra per disciplina',
    category_photo: 'Fotografia',
    category_video: 'Video Production',
    category_3d: '3D / CGI',

    // FAQ
    faq_eyebrow: 'Domande frequenti',
    faq_title: 'Domande frequenti',

    // Contact & Misc
    project_cta_title: 'Hai in mente un progetto simile?',
    project_cta_desc: 'Raccontami il brief — di solito rispondo entro 24–48 ore.',
    post_cta_title: 'Ti servono immagini che lavorino così?',
    contact_breadcrumb_sub: 'Parliamo del tuo progetto',
    contact_title: 'Creiamo qualcosa che valga la pena guardare.',
    contact_form_subject: 'Nuova richiesta da duerremedia.com',
    contact_form_budget: 'Budget (facoltativo)',
    contact_form_budget_placeholder: 'es. €5–10k',
    contact_form_fallback_note: 'Questo modulo apre la tua app email. Puoi anche scrivere direttamente a',
    thanks_title: 'Messaggio ricevuto.',
    thanks_desc: 'Grazie — leggerò il tuo brief e ti risponderò entro 24–48 ore.',
    thanks_back: 'Torna alla home',
    not_found_title: 'Questo fotogramma manca.',
    social_label: 'Social',
    footer_tagline: 'Soluzioni Creative per il tuo Business.',
    newsletter_title: 'Iscriviti alla Newsletter',
    newsletter_desc: 'Resta aggiornato su novità, progetti e idee creative.',
    newsletter_placeholder: 'Inserisci la tua email...',
    newsletter_btn: 'Iscriviti',
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
    results_title: 'Impatto & Risultati',
    deliverables_title: 'Output & Consegne',
    gear_title: 'Setup di Produzione',
    label_aspect_ratio: 'Formato / Ratio',
    toc_title: 'In questo articolo',
    copy_link: 'Copia link',
    link_copied: 'Copiato negli appunti!',
    related_posts: 'Letture Correlate',
    about_workflow_title: 'Metodo & Servizi',
    about_workflow_p: 'Dalla prima scintilla creativa alla consegna finale, curiamo ogni aspetto della produzione: fotografia commerciale, produzioni video, rendering 3D fotorealistici e digital marketing.',
    about_clients_title: 'Clienti Selezionati',
    about_clients_p: 'Collaborazioni con brand innovativi, imprese e clienti commerciali che cercano precisione, profondità narrativa e qualità visiva impeccabile.',
    about_gear_title: 'Attrezzatura & Setup di Produzione',
  }
};

export function useTranslations(lang: Locale) {
  return (key: string, vars: Record<string, string | number> = {}) => {
    let str = translations[lang][key] ?? translations.it[key] ?? key;
    for (const [k, v] of Object.entries(vars)) str = str.replaceAll(`{{${k}}}`, String(v));
    return str;
  };
}

export function localePath(lang: Locale, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'it') {
    return clean;
  }
  return `/en${clean === '/' ? '/' : clean}`;
}

export function switchLocalePath(pathname: string, target: Locale) {
  const stripped = pathname.replace(/^\/(en|it)(?=\/|$)/, '') || '/';
  if (target === 'it') {
    return stripped;
  }
  return `/en${stripped === '/' ? '/' : stripped}`;
}
