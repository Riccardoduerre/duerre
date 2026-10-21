export const SITE = {
  name: 'Duerre',
  author: 'Riccardo Riva',
  url: 'https://duerremedia.com',
  email: 'riccardo@duerremedia.com',
  location: 'Italy / Worldwide',
  defaultOgImage: '/og-image.webp',
  social: [
    { name: 'Instagram', url: 'https://instagram.com/duerremedia' },
  ],
  clients: [
    'Lumen Atelier',
    'Alps Alpine',
    'Vanguard Audio',
    'Aether Studio',
    'Monolith Lab',
    'Kinetix Milano',
  ],
} as const;

export const CONTACT_FORM = {
  action: `https://formsubmit.co/${SITE.email}`,
  ajaxAction: `https://formsubmit.co/ajax/${SITE.email}`,
  accessKey: '',
};

export function contactFormMode(): 'formsubmit' | 'web3forms' | 'formspree' | 'mailto' {
  if (CONTACT_FORM.action.includes('formsubmit.co')) return 'formsubmit';
  if (CONTACT_FORM.action.includes('web3forms.com')) return CONTACT_FORM.accessKey ? 'web3forms' : 'mailto';
  if (CONTACT_FORM.action.includes('formspree.io/f/')) return 'formspree';
  return 'mailto';
}
