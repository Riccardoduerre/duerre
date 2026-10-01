import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

const legacyRoute = window.location.hash.slice(1);
if (legacyRoute.startsWith('/')) {
  const url = new URL(window.location.href);
  const [legacyPath, legacySearch = ''] = legacyRoute.split('?');
  const legacyLocale = legacyPath.match(/^\/(en|it)(?=\/|$)/)?.[1];
  const routePath = legacyLocale ? legacyPath.slice(3) || '/' : legacyPath;
  const routeLocale = new URLSearchParams(legacySearch).get('lang') ?? legacyLocale;
  url.pathname = routePath;
  if (routeLocale === 'en' || routeLocale === 'it') {
    url.searchParams.set('lang', routeLocale);
  }
  url.hash = '';
  window.history.replaceState(window.history.state, '', url);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
