export const SITE = {
  name: 'Duerre Media',
  author: 'Riccardo Riva',
  url: 'https://duerremedia.com',
  email: 'riccardo@duerremedia.com',
  location: 'Italy / Remote',
  defaultOgImage: '/og-image.webp',
  social: [
    { name: 'Instagram', url: 'https://instagram.com/duerremedia' },
  ]
} as const;

export const CONTACT_FORM = {
  action: 'https://api.web3forms.com/submit',
  accessKey: '',
};

export function contactFormMode(): 'web3forms' | 'formspree' | 'mailto' {
  if (CONTACT_FORM.action.includes('web3forms.com')) return CONTACT_FORM.accessKey ? 'web3forms' : 'mailto';
  if (CONTACT_FORM.action.includes('formspree.io/f/')) return 'formspree';
  return 'mailto';
}
