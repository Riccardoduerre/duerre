import { Navigate, Outlet, useParams } from 'react-router-dom';
import { LocaleProvider } from './i18n/LocaleContext';
import type { Locale } from './i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function LocaleLayout() {
  const params = useParams();
  const locale = params.locale as Locale | undefined;

  if (locale !== 'en' && locale !== 'it') {
    return <Navigate to="/en" replace />;
  }

  return (
    <LocaleProvider locale={locale}>
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
