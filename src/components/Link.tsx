import React from 'react';
import { useLocale } from '../i18n/LocaleContext';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({ to, className, children, ...props }: LinkProps) {
  const { locale } = useLocale();
  
  // Clean up the path
  const normalizedTo = to.startsWith('/') ? to.substring(1) : to;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const href = `${base}/${locale}${normalizedTo ? `/${normalizedTo}` : ''}`;

  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
}

