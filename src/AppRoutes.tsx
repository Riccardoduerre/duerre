import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LocaleLayout from './LocaleLayout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const PortfolioDetail = lazy(() => import('./pages/PortfolioDetail'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-theme-bg">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-theme-border border-t-theme-mad" />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<LocaleLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/archive" element={<Navigate to="/portfolio" replace />} />
          <Route path="photo" element={<CategoryPage category="photo" />} />
          <Route path="video" element={<CategoryPage category="video" />} />
          <Route path="3d" element={<CategoryPage category="3d" />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="portfolio/:id" element={<PortfolioDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
