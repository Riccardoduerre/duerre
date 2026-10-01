import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

const legacyRoute = window.location.hash.slice(1);
if (legacyRoute.startsWith('/')) {
  const url = new URL(window.location.href);
  url.pathname = legacyRoute.split('?')[0];
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
