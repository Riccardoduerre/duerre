export type Locale = 'en' | 'it';
export const LOCALES: readonly Locale[] = ['it', 'en'];
export const DEFAULT_LOCALE: Locale = 'it';

export function isLocale(value: unknown): value is Locale {
  return value === 'en' || value === 'it';
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    nav_home: 'Index',
    nav_about: 'Studio',
    nav_services: 'Capabilities',
    nav_projects: 'Portfolio',
    nav_blog: 'Journal',
    nav_contact: 'Contact',
    nav_cta: 'Commission a Project',
    switch_lang_label: 'Leggi in italiano',
    switch_lang_short: 'IT',
    theme_toggle: 'Toggle colour theme',

    // Hero & Editorial Manifesto
    hero_eyebrow: 'Commercial Photography · Cinema · 3D CGI · Digital Direction',
    hero_headline_prefix: 'Visual architecture for',
    hero_headline_highlight: 'Iconic Brands',
    hero_subheadline:
      'Bespoke commercial photography, anamorphic cinema production, photorealistic 3D CGI rendering, and digital brand direction by Riccardo Riva.',
    hero_cta_primary: 'Explore Selected Works',
    hero_cta_secondary: 'Initiate a Brief',
    vision_title_line1: 'Light is',
    vision_title_line2: 'architecture',
    vision_subtitle:
      'Every frame is engineered at the intersection of optical physics, calibrated ACES color science, and narrative restraint.',
    marquee_1: 'Commercial Photography · Anamorphic Cinema · 3D CGI · Digital Direction',

    // 4 Core Disciplines
    service_1_title: 'Commercial Photography',
    service_1_desc:
      'High-resolution product still life, architectural monographs, and campaign imagery sculpted with precision studio lighting and calibrated color pipelines.',
    service_2_title: 'Cinema & Video Production',
    service_2_desc:
      'Anamorphic brand films, commercial spots, and directorial motion studies crafted with motivated camera movement, 5.1 sound design, and ACEScc finishing.',
    service_3_title: '3D CGI & Product Rendering',
    service_3_desc:
      'Photorealistic 3D product visualizations, physically based micro-surface shaders, spectral dispersion, and virtual studio environments for pre-launch campaigns.',
    service_4_title: 'Digital Marketing & Direction',
    service_4_desc:
      'Cohesive visual ecosystems, editorial social architecture, search positioning, and high-converting campaign assets engineered for measurable brand authority.',

    // Capabilities Matrix (replaces legacy skill bars)
    strategy_title: 'Multidisciplinary Precision Across Four Visual Pillars',
    strategy_body:
      'Duerre operates as an independent visual atelier led by Riccardo Riva. Rather than fragmenting production across disconnected vendors, we unify optical capture, cinema direction, physically based CGI, and digital distribution under one uncompromising creative vision.',
    discover_more: 'Explore the Studio',
    capabilities_eyebrow: 'Capabilities Matrix · 01 — 04',
    capabilities_subtitle: 'Technical Architecture & Deliverables',

    // Approach (01 / 02 / 03)
    approach_eyebrow: 'Methodology',
    approach_title: 'From Concept & Optical Study to Final Master',
    approach_desc:
      'Our production process is deliberate, research-driven, and tailored to the material truth of your product. We partner closely with founders, creative directors, and architectural studios.',
    step_1_title: 'Curatorial & Strategic Audit',
    step_1_desc:
      'We dissect your brand positioning, material language, and commercial objectives to author a rigorous visual treatment and lighting blueprint.',
    step_2_title: 'Optical & Virtual Production',
    step_2_desc:
      'Whether on-location in extreme alpine environments, inside a controlled studio set, or within a GPU path-traced 3D scene, we execute with surgical discipline.',
    step_3_title: 'ACES Mastering & Deployment',
    step_3_desc:
      'Every asset is finished in a 32-bit ACES color pipeline and delivered in bespoke aspect ratios optimized for print, cinema exhibition, and digital conversion.',

    // Services 360
    services_eyebrow: 'Capabilities & Disciplines',
    services_title: 'Integrated Visual Direction',
    services_desc:
      'Vertical mastery across commercial photography, cinema & motion production, 3D CGI product rendering, and digital marketing strategy — from initial treatment to final master.',
    services_page_subtitle: 'Four interconnected disciplines, one cohesive visual signature.',

    // Portfolio & Clients
    marquee_portfolio: 'alcuni dei nostri lavori',
    view_project: 'Read Case Study',
    selected_works: 'Selected Works',
    all_projects_link: 'View Full Archive',
    clients_eyebrow: 'Selected Commissions & Collaborations',
    competence_statement_1: 'OPTICAL PRECISION & DIGITAL CRAFT,',
    competence_statement_2: 'ENGINEERED FOR DISCERNING BRANDS.',

    // Dual Heading CTA
    cta_dual_1_bold: 'COMMISSION',
    cta_dual_1_italic: 'YOUR NEXT',
    cta_dual_2_italic: 'VISUAL',
    cta_dual_2_bold: 'LANDMARK',
    cta_dual_desc:
      'Available for commercial campaigns, brand films, 3D product launches, and ongoing creative direction across Italy and worldwide.',

    // Studio / About
    studio_eyebrow: 'The Studio',
    studio_blurb:
      'Duerre is the visual production studio and creative direction practice of Riccardo Riva — uniting commercial photography, cinema production, 3D CGI rendering, and digital brand strategy.',
    mission_title: 'Editorial Manifesto',
    mission_body:
      'We reject disposable content and sterile corporate templates. Every commission is treated as a permanent visual artifact — built on light quality, tactile materiality, and narrative clarity.',

    // Blog / Journal
    latest_articles: 'Editorial Journal',
    blog_section_desc: 'Technical monographs on cinematography, lighting physics, ACES color science, and 3D CGI workflows.',
    go_to_blog: 'Enter Journal',
    read_more: 'Read Essay',
    all_articles: 'All Essays',
    blog_breadcrumb_sub: 'Technical Essays & Monographs',
    blog_page_heading: 'Notes on light physics, anamorphic optics, PBR rendering, and visual strategy.',
    blog_meta_desc: 'Technical essays and monographs on commercial photography, filmmaking, 3D CGI, and digital direction.',
    blog_intro: 'Deep technical notes on cinema optics, studio lighting, 3D CGI pipelines, and visual direction.',

    // Portfolio page
    projects_breadcrumb_sub: 'Archive & Case Studies',
    projects_title: 'Selected Works',
    projects_intro:
      'Curated commercial campaigns, anamorphic films, 3D CGI studies, and editorial monographs produced for forward-thinking brands.',
    filter_label: 'Filter by discipline',
    category_photo: 'Photography',
    category_video: 'Cinema & Motion',
    category_3d: '3D / CGI',
    category_marketing: 'Digital Strategy',

    // FAQ
    faq_eyebrow: 'Inquiries & Process',
    faq_title: 'Frequently Asked Questions',

    // Contact & Misc
    project_cta_title: 'Have a commission or campaign in mind?',
    project_cta_desc: 'Share your brief, timeline, and objectives — direct response within 24–48 hours.',
    post_cta_title: 'Looking for visual direction with this level of technical depth?',
    contact_breadcrumb_sub: 'Direct Inquiry',
    contact_title: 'Let’s craft something enduring.',
    contact_form_subject: 'New commission inquiry from duerremedia.com',
    contact_form_budget: 'Estimated Scope / Budget (optional)',
    contact_form_budget_placeholder: 'e.g. €5k – €15k',
    contact_form_fallback_note: 'This form opens your email app. You can also write directly to',
    thanks_title: 'Inquiry Received.',
    thanks_desc: 'Thank you — Riccardo will review your brief and respond personally within 24–48 hours.',
    thanks_back: 'Return to Index',
    not_found_title: 'This frame lies outside the edit.',
    social_label: 'Index',
    footer_tagline: 'Visual Architecture & Commercial Production.',
    newsletter_title: 'Studio Dispatches',
    newsletter_desc: 'Occasional monographs on lighting, ACES color workflows, and new case studies.',
    newsletter_placeholder: 'Email address...',
    newsletter_btn: 'Subscribe',
    footer_stack: 'Engineered with Astro · Hosted on GitHub Pages.',
    prev_project: 'Previous Case Study',
    next_project: 'Next Case Study',
    prev_post: 'Previous Essay',
    next_post: 'Next Essay',
    label_name: 'Name',
    label_email: 'Email',
    label_message: 'Project Brief & Timeline',
    label_send: 'Transmit Brief',
    open_email_app: 'Open Email App',
    label_client: 'Client',
    label_role: 'Direction & Role',
    label_year: 'Year',
    label_category: 'Discipline',
    label_services: 'Services',
    challenge_title: '01 / The Brief & Challenge',
    solution_title: '02 / Optical & Technical Execution',
    results_title: '03 / Commercial Impact',
    deliverables_title: 'Delivered Masters',
    gear_title: 'Optical & Production Pipeline',
    label_aspect_ratio: 'Format / Aspect',
    toc_title: 'Index',
    copy_link: 'Copy Permalink',
    link_copied: 'Permalink Copied',
    related_posts: 'Further Reading',
    about_workflow_title: 'Technical Pipeline & Hardware',
    about_workflow_p:
      'From initial lighting diagrams to 32-bit ACES color mastering, every stage of production is executed in-house with cinema-grade optics and calibrated color management.',
    about_clients_title: 'Selected Partners',
    about_clients_p:
      'Collaborating with design houses, architectural firms, and ambitious commercial brands that demand visual distinction.',
    about_gear_title: 'Production Architecture',
  },
  it: {
    nav_home: 'Index',
    nav_about: 'Studio',
    nav_services: 'Competenze',
    nav_projects: 'Portfolio',
    nav_blog: 'Journal',
    nav_contact: 'Contatti',
    nav_cta: 'Inizia un Progetto',
    switch_lang_label: 'Read in English',
    switch_lang_short: 'EN',
    theme_toggle: 'Cambia tema colore',

    // Hero & Editorial Manifesto
    hero_eyebrow: 'Fotografia Commerciale · Cinema · 3D CGI · Direzione Digitale',
    hero_headline_prefix: 'Architettura visiva per',
    hero_headline_highlight: 'Brand Iconici',
    hero_subheadline:
      'Fotografia commerciale d’autore, produzioni cinema anamorfiche, rendering 3D CGI fotorealistico e direzione digitale di Riccardo Riva.',
    hero_cta_primary: 'Esplora le Opere',
    hero_cta_secondary: 'Invia un Brief',
    vision_title_line1: 'La luce è',
    vision_title_line2: 'architettura',
    vision_subtitle:
      'Ogni fotogramma nasce dall’incontro tra fisica ottica, scienza del colore calibrata in ACES e rigore compositivo.',
    marquee_1: 'Fotografia Commerciale · Cinema Anamorfico · 3D CGI · Direzione Digitale',

    // 4 Core Disciplines
    service_1_title: 'Commercial Photography',
    service_1_desc:
      'Still life di prodotto ad altissima risoluzione, fotografia d’architettura e campagne editoriali scolpite con gestione millimetrica della luce e pipeline colore calibrata.',
    service_2_title: 'Cinema & Video Production',
    service_2_desc:
      'Brand film anamorfici, spot commerciali e regia visiva costruiti su movimenti macchina motivati, sound design 5.1 e color grading in spazio ACEScc.',
    service_3_title: '3D CGI & Product Rendering',
    service_3_desc:
      'Visualizzazioni 3D fotorealistiche di prodotto, materiali fisici PBR con micro-imperfezioni, dispersione spettrale e set virtuali per lanci e pre-produzioni.',
    service_4_title: 'Digital Marketing & Direction',
    service_4_desc:
      'Ecosistemi visivi integrati, direzione editoriale social, posizionamento SEO e campagne ad alta conversione progettate per consolidare l’autorevolezza del brand.',

    // Capabilities Matrix (replaces legacy skill bars)
    strategy_title: 'Precisione Multidisciplinare su Quattro Pilastri Visivi',
    strategy_body:
      'Duerre opera come atelier visivo indipendente guidato da Riccardo Riva. Anziché frammentare la produzione tra fornitori scollegati, unifichiamo scatto ottico, regia cinematografica, CGI fisicamente accurata e strategia digitale sotto un’unica direzione artistica.',
    discover_more: 'Scopri lo Studio',
    capabilities_eyebrow: 'Matrice delle Competenze · 01 — 04',
    capabilities_subtitle: 'Architettura Tecnica & Deliverables',

    // Approach (01 / 02 / 03)
    approach_eyebrow: 'Metodo Operativo',
    approach_title: 'Dallo Studio Ottico al Master Finale',
    approach_desc:
      'Il nostro processo produttivo è rigoroso, sartoriale e fondato sulla verità materica del prodotto. Affianchiamo imprenditori, direttori creativi e studi di architettura in ogni fase.',
    step_1_title: 'Analisi Curatoria & Direzione',
    step_1_desc:
      'Studiamo il posizionamento del brand, le texture materiche e gli obiettivi commerciali per redigere un trattamento visivo e illuminotecnico su misura.',
    step_2_title: 'Produzione Ottica & Virtuale',
    step_2_desc:
      'Che si tratti di spedizioni in alta quota, set da studio controllati al millimetro o scene 3D path-traced, eseguiamo ogni ripresa con disciplina assoluta.',
    step_3_title: 'Mastering ACES & Distribuzione',
    step_3_desc:
      'Ogni asset viene finalizzato in pipeline colore ACES a 32-bit e declinato nei formati nativi per stampa fine-art, cinema e campagne digitali.',

    // Services 360
    services_eyebrow: 'Competenze & Discipline',
    services_title: 'Direzione Visiva Integrata',
    services_desc:
      'Padronanza verticale in fotografia commerciale, cinema & video production, rendering 3D CGI e digital marketing strategico — dal concept al master finale.',
    services_page_subtitle: 'Quattro discipline interconnesse, un’unica firma estetica.',

    // Portfolio & Clients
    marquee_portfolio: 'alcuni dei nostri lavori',
    view_project: 'Esplora Caso Studio',
    selected_works: 'Alcuni dei nostri lavori',
    all_projects_link: 'Archivio Completo',
    clients_eyebrow: 'Commissioni & Collaborazioni Selezionate',
    competence_statement_1: 'PRECISIONE OTTICA E CULTURA DEL PROGETTO,',
    competence_statement_2: 'AL SERVIZIO DI BRAND D’ECCELLENZA.',

    // Dual Heading CTA
    cta_dual_1_bold: 'PROGETTIAMO',
    cta_dual_1_italic: 'INSIEME',
    cta_dual_2_italic: 'LA TUA',
    cta_dual_2_bold: 'IDENTITÀ VISIVA',
    cta_dual_desc:
      'Disponibili per campagne fotografiche, film commerciali, lanci di prodotto in 3D CGI e direzione creativa continuativa in Italia e all’estero.',

    // Studio / About
    studio_eyebrow: 'Lo Studio',
    studio_blurb:
      'Duerre è lo studio di produzione visiva e direzione creativa di Riccardo Riva — fotografia commerciale, cinema anamorfico, rendering 3D CGI e strategia digitale per brand che puntano all’eccellenza.',
    mission_title: 'Manifesto Editoriale',
    mission_body:
      'Rifiutiamo i contenuti effimeri e i cliché aziendali standardizzati. Ogni commissione è concepita come un’opera visiva destinata a durare — fondata sulla qualità della luce, sulla resa tattile dei materiali e sulla chiarezza narrativa.',

    // Blog / Journal
    latest_articles: 'Journal Editoriale',
    blog_section_desc: 'Monografie tecniche su cinematografia, fisica della luce, color science ACES e pipeline 3D CGI.',
    go_to_blog: 'Esplora il Journal',
    read_more: 'Leggi Saggio',
    all_articles: 'Tutti i Saggi',
    blog_breadcrumb_sub: 'Saggi Tecnici & Monografie',
    blog_page_heading: 'Appunti su fisica della luce, ottiche anamorfiche, rendering PBR e strategia visiva.',
    blog_meta_desc: 'Saggi tecnici e approfondimenti su fotografia commerciale, cinema, 3D CGI e digital marketing.',
    blog_intro: 'Analisi tecniche su ottiche cinema, illuminazione da studio, pipeline 3D CGI e direzione visiva.',

    // Portfolio page
    projects_breadcrumb_sub: 'Archivio & Casi Studio',
    projects_title: 'Opere Selezionate',
    projects_intro:
      'Campagne commerciali, produzioni cinematografiche, studi 3D CGI e monografie editoriali realizzate per brand e istituzioni.',
    filter_label: 'Filtra per disciplina',
    category_photo: 'Fotografia',
    category_video: 'Cinema & Video',
    category_3d: '3D / CGI',
    category_marketing: 'Strategia Digitale',

    // FAQ
    faq_eyebrow: 'Domande Frequenti',
    faq_title: 'Chiarezza su Metodo e Produzione',

    // Contact & Misc
    project_cta_title: 'Hai in mente una campagna o una produzione?',
    project_cta_desc: 'Condividi il tuo brief, gli obiettivi e le tempistiche — risposta diretta entro 24–48 ore.',
    post_cta_title: 'Cerchi una direzione visiva con questo livello di rigore tecnico?',
    contact_breadcrumb_sub: 'Contatto Diretto',
    contact_title: 'Diamo forma a qualcosa che resti.',
    contact_form_subject: 'Nuova richiesta di commissione da duerremedia.com',
    contact_form_budget: 'Budget indicativo (facoltativo)',
    contact_form_budget_placeholder: 'es. €5k – €15k',
    contact_form_fallback_note: 'Questo modulo apre la tua app email. Puoi anche scrivere direttamente a',
    thanks_title: 'Brief Ricevuto.',
    thanks_desc: 'Grazie — Riccardo esaminerà personalmente il tuo brief e ti risponderà entro 24–48 ore.',
    thanks_back: 'Torna all’Index',
    not_found_title: 'Questo fotogramma è fuori dal montaggio.',
    social_label: 'Canali',
    footer_tagline: 'Architettura Visiva & Produzione Commerciale.',
    newsletter_title: 'Dispacci dallo Studio',
    newsletter_desc: 'Saggi occasionali su illuminotecnica, pipeline colore ACES e nuovi casi studio.',
    newsletter_placeholder: 'Il tuo indirizzo email...',
    newsletter_btn: 'Iscriviti',
    footer_stack: 'Sviluppato con Astro · Ospitato su GitHub Pages.',
    prev_project: 'Caso Studio Precedente',
    next_project: 'Caso Studio Successivo',
    prev_post: 'Saggio Precedente',
    next_post: 'Saggio Successivo',
    label_name: 'Nome e Cognome',
    label_email: 'Indirizzo Email',
    label_message: 'Brief di Progetto & Tempistiche',
    label_send: 'Invia Brief',
    open_email_app: 'Apri Client Email',
    label_client: 'Committente',
    label_role: 'Direzione & Ruolo',
    label_year: 'Anno',
    label_category: 'Disciplina',
    label_services: 'Servizi',
    challenge_title: '01 / Il Brief & La Sfida',
    solution_title: '02 / Esecuzione Ottica & Tecnica',
    results_title: '03 / Impatto & Risultati',
    deliverables_title: 'Master Consegnati',
    gear_title: 'Pipeline Ottica & Hardware',
    label_aspect_ratio: 'Formato / Ratio',
    toc_title: 'Indice',
    copy_link: 'Copia Permalink',
    link_copied: 'Permalink Copiato',
    related_posts: 'Letture Correlate',
    about_workflow_title: 'Pipeline Tecnica & Strumentazione',
    about_workflow_p:
      'Dagli schemi luce preliminari al mastering colore ACES a 32-bit, ogni fase produttiva è gestita internamente con ottiche cinema e controllo colore calibrato.',
    about_clients_title: 'Partner & Committenti',
    about_clients_p:
      'Collaborazioni con maison di design, studi di architettura e imprese che ricercano distinzione visiva e rigore esecutivo.',
    about_gear_title: 'Architettura di Produzione',
  },
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
