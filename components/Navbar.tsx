import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES, WHATSAPP_LINK } from '../constants';
import { Subpage, getPathForSubpage } from '../seo';

interface NavbarProps {
  currentPage?: Subpage;
  onNavigate?: (page: Subpage, sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Travar o scroll quando o menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (page: Subpage, sectionId?: string) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else {
      const path = getPathForSubpage(page);
      if (page === 'home' && sectionId && sectionId !== 'home') {
        window.history.pushState({ page, sectionId }, '', `/#${sectionId}`);
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.history.pushState({ page }, '', path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Início', page: 'home' as const, section: 'home' },
    { name: 'Sobre Nós', page: 'about' as const, section: undefined },
    { name: 'Especialistas', page: 'home' as const, section: 'doctors' },
    { name: 'Tratamentos', page: 'treatments' as const, section: undefined },
    { name: 'Contato', page: 'contact' as const, section: undefined },
    { name: 'Localização', page: 'home' as const, section: 'location' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b ${
          isOpen
            ? 'bg-white shadow-md border-gray-100 py-3 md:py-4'
            : isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-gray-100'
            : 'bg-transparent py-3 md:py-4 lg:py-5 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <div className="flex-shrink-0 z-[102] relative">
              <button 
                onClick={() => handleNavClick('home')} 
                className="block group cursor-pointer focus:outline-none text-left"
                aria-label="Ir para página inicial"
              >
                <img
                  className={`w-auto object-contain transition-all duration-300 ease-in-out ${
                    isScrolled || isOpen ? 'h-9 md:h-10 lg:h-11' : 'h-10 sm:h-12 md:h-12 lg:h-14 xl:h-16'
                  } ${
                    !isScrolled && !isOpen ? 'brightness-0 invert drop-shadow-md' : ''
                  }`}
                  src={IMAGES.logo}
                  alt="Eleve Odontologia"
                />
              </button>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-7">
              {navLinks.map((link) => {
                const isCurrent = 
                  (link.page === 'about' && currentPage === 'about') || 
                  (link.page === 'contact' && currentPage === 'contact') || 
                  (link.page === 'treatments' && currentPage === 'treatments') || 
                  (link.page === 'home' && currentPage === 'home' && link.section === 'home');

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.page, link.section)}
                    className={`text-[10px] xl:text-xs font-bold tracking-[0.15em] xl:tracking-[0.2em] uppercase transition-all duration-300 relative group cursor-pointer whitespace-nowrap ${
                      isCurrent
                        ? (isScrolled ? 'text-eleve-brand' : 'text-eleve-gold font-black')
                        : (isScrolled ? 'text-eleve-dark hover:text-eleve-brand' : 'text-white hover:text-eleve-gold drop-shadow-md')
                    }`}
                  >
                    {link.name}
                    <span 
                      className={`absolute -bottom-1 left-0 h-0.5 bg-eleve-brand transition-all duration-300 ${
                        isCurrent ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-5 xl:px-7 transition-all duration-300 font-bold uppercase text-[10px] xl:text-xs tracking-widest border rounded-sm flex items-center justify-center cursor-pointer whitespace-nowrap ${
                  isScrolled 
                    ? 'py-2 border-eleve-brand text-eleve-brand hover:bg-eleve-brand hover:text-white' 
                    : 'py-2 lg:py-2.5 border-white text-white hover:bg-white hover:text-eleve-black'
                }`}
              >
                Agendar
              </button>
            </div>

            {/* Mobile / Tablet Button */}
            <div className="lg:hidden flex items-center z-[102] relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors focus:outline-none cursor-pointer ${
                  isOpen 
                    ? 'text-eleve-black bg-gray-100' 
                    : (isScrolled ? 'text-eleve-black' : 'text-white')
                }`}
                aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile / Tablet Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 w-full h-full min-h-[100dvh] bg-white z-[99] lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
            style={{ backgroundColor: '#ffffff' }}
          >
            {/* Linha de Destaque da Marca */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-eleve-brand via-eleve-gold to-eleve-brand" />

            {/* Links de Navegação Mobile */}
            <div className="flex flex-col space-y-4 my-auto py-4">
              {navLinks.map((link, idx) => {
                const isCurrent = 
                  (link.page === 'about' && currentPage === 'about') || 
                  (link.page === 'contact' && currentPage === 'contact') || 
                  (link.page === 'treatments' && currentPage === 'treatments') || 
                  (link.page === 'home' && currentPage === 'home' && link.section === 'home');

                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.2 }}
                    onClick={() => handleNavClick(link.page, link.section)}
                    className={`text-left text-2xl sm:text-3xl font-serif py-2 flex items-center justify-between border-b border-gray-100 transition-colors cursor-pointer ${
                      isCurrent ? 'text-eleve-brand font-semibold pl-2' : 'text-eleve-black hover:text-eleve-brand'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isCurrent && (
                      <span className="text-[10px] uppercase font-sans tracking-widest bg-eleve-brand/10 text-eleve-brand px-2.5 py-1 rounded-full font-bold">
                        Atual
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Ações e Informações de Contato no Rodapé do Menu */}
            <div className="pt-6 border-t border-gray-100 flex flex-col gap-4 mt-auto">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-gradient-to-r from-eleve-success to-teal-600 text-white font-bold uppercase tracking-widest text-xs rounded-lg shadow-lg flex items-center justify-center gap-2 text-center"
              >
                <Calendar size={16} />
                Agendar Avaliação WhatsApp
              </a>

              <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium px-1">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-eleve-brand" /> Ouro Preto, BH
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone size={13} className="text-eleve-brand" /> (31) 3234-7977
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
