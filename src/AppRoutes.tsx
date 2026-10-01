import { Route, Routes, Navigate } from 'react-router-dom';
import LocaleLayout from './LocaleLayout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';
import DigitalMarketing from './pages/DigitalMarketing';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
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
  );
}
