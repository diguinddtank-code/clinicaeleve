import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Segmentation from './components/Segmentation';
import AboutDoctors from './components/AboutDoctors';
import Services from './components/Services';
import TreatmentEducation from './components/TreatmentEducation';
import ClinicFeatures from './components/ClinicFeatures';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Footer from './components/Footer';
import TimeDelayedPopup from './components/TimeDelayedPopup';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import TreatmentsPage from './components/TreatmentsPage';
import DrAndrePage from './components/DrAndrePage';
import { Subpage, getSubpageFromPath, getPathForSubpage, updatePageSeo } from './seo';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Subpage>('home');

  // Sincronização inicial de rota e SEO no carregamento
  useEffect(() => {
    const syncRouteFromUrl = () => {
      const { page, sectionId } = getSubpageFromPath(window.location.pathname, window.location.hash);
      setCurrentPage(page);
      updatePageSeo(page);

      // Limpeza de hashes legados no navegador (#sobre -> /sobre, #tratamentos -> /tratamentos, etc.)
      const expectedPath = getPathForSubpage(page);
      if (window.location.hash && (page === 'about' || page === 'treatments' || page === 'contact' || page === 'drandre')) {
        window.history.replaceState({ page }, '', expectedPath);
      }

      // Rola para a seção caso seja uma âncora na home
      if (page === 'home' && sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    syncRouteFromUrl();

    // Ouvinte para os botões de voltar/avançar do navegador (HTML5 History API)
    const handlePopState = () => {
      syncRouteFromUrl();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Atualiza metatags e Schema.org sempre que a subpágina mudar
  useEffect(() => {
    updatePageSeo(currentPage);
  }, [currentPage]);

  // Navegação direta com subpáginas limpas (sem '#' no URL)
  const handleNavigate = useCallback((page: Subpage, sectionId?: string) => {
    const targetPath = getPathForSubpage(page);

    if (page === 'home' && sectionId && sectionId !== 'home') {
      const targetUrl = `/#${sectionId}`;
      if (window.location.pathname !== '/' || window.location.hash !== `#${sectionId}`) {
        window.history.pushState({ page: 'home', sectionId }, '', targetUrl);
      }
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    // Para as subpáginas (/sobre, /tratamentos, /contato, /drandrearaujo) ou topo da home (/)
    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState({ page }, '', targetPath);
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {currentPage === 'drandre' ? (
          <DrAndrePage
            onNavigateHome={(secId) => handleNavigate('home', secId)}
            onNavigateContact={() => handleNavigate('contact')}
            onNavigateTreatments={() => handleNavigate('treatments')}
          />
        ) : currentPage === 'about' ? (
          <AboutPage 
            onNavigateHome={(secId) => handleNavigate('home', secId)} 
            onNavigateContact={() => handleNavigate('contact')}
          />
        ) : currentPage === 'contact' ? (
          <ContactPage 
            onNavigateHome={(secId) => handleNavigate('home', secId)} 
            onNavigateAbout={() => handleNavigate('about')} 
          />
        ) : currentPage === 'treatments' ? (
          <TreatmentsPage 
            onNavigateHome={(secId) => handleNavigate('home', secId)} 
            onNavigateContact={() => handleNavigate('contact')} 
            onNavigateAbout={() => handleNavigate('about')} 
          />
        ) : (
          <>
            <Hero />
            <Segmentation />
            <ClinicFeatures />
            <WhyChooseUs />
            <AboutDoctors 
              onViewFullAbout={() => handleNavigate('about')} 
            />
            <Services onViewAllTreatments={() => handleNavigate('treatments')} />
            <TreatmentEducation />
            <Testimonials />
            <Location />
            <FAQ />
          </>
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
      <TimeDelayedPopup />
    </div>
  );
};

export default App;
