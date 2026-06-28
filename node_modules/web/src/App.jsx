import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          {/* Fallback route */}
          <Route path="*" element={
            <div className="flex-grow flex flex-col items-center justify-center pt-32 pb-20">
              <h1 className="text-4xl font-serif font-bold mb-4">Página Não Encontrada</h1>
              <p className="text-muted-foreground mb-8">O que você procura não está aqui.</p>
              <a href="/" className="text-primary hover:underline font-medium">Voltar para o início</a>
            </div>
          } />
        </Routes>
      </div>
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;