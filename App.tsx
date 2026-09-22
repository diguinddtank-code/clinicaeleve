import React, { useState, useEffect } from 'react';
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
import WhatsAppFloat from './components/WhatsAppFloat';
import TimeDelayedPopup from './components/TimeDelayedPopup';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import TreatmentsPage from './components/TreatmentsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'treatments'>('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#sobre' || hash === '#about' || hash === '#sobrenos') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contato' || hash === '#contact' || hash === '#agendar') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#tratamentos' || hash === '#treatments' || hash === '#procedimentos' || hash === '#servicos') {
        setCurrentPage('treatments');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: 'home' | 'about' | 'contact' | 'treatments', sectionId?: string) => {
    if (page === 'about') {
      setCurrentPage('about');
      window.location.hash = '#sobre';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'contact') {
      setCurrentPage('contact');
      window.location.hash = '#contato';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'treatments') {
      setCurrentPage('treatments');
      window.location.hash = '#tratamentos';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      if (sectionId) {
        window.location.hash = `#${sectionId}`;
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.location.hash = '#home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {currentPage === 'about' ? (
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
            <AboutDoctors onViewFullAbout={() => handleNavigate('about')} />
            <Services onViewAllTreatments={() => handleNavigate('treatments')} />
            <TreatmentEducation />
            <Testimonials />
            <Location />
            <FAQ />
          </>
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppFloat />
      <TimeDelayedPopup />
    </div>
  );
};

export default App;
