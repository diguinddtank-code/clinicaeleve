import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES, WHATSAPP_LINK } from '../constants';
import { getPathForSubpage } from '../seo';

interface NavbarProps {
  currentPage?: 'home' | 'about' | 'contact' | 'treatments';
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'treatments', sectionId?: string) => void;
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
  }, [isOpen]);

  const handleNavClick = (page: 'home' | 'about' | 'contact' | 'treatments', sectionId?: string) => {
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
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-gray-100' 
          : 'bg-transparent py-3 md:py-4 lg:py-5 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO com Animação */}
          <div className="flex-shrink-0 z-[102] relative">
            <button 
              onClick={() => handleNavClick('home')} 
              className="block group cursor-pointer focus:outline-none text-left"
            >
              <img
                className={`w-auto object-contain transition-all duration-500 ease-in-out ${
                  isScrolled ? 'h-9 md:h-10 lg:h-11' : 'h-10 sm:h-12 md:h-12 lg:h-14 xl:h-16'
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
              className={`p-2 rounded-md transition-colors focus:outline-none cursor-pointer ${
                isOpen 
                  ? 'text-eleve-black bg-gray-100/50' 
                  : (isScrolled ? 'text-eleve-black' : 'text-white')
              }`}
              aria-label="Abrir Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[101] transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col justify-center items-center space-y-6 shadow-2xl px-6`}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-eleve-brand" />
        
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleNavClick(link.page, link.section)}
            className="text-2xl font-serif text-eleve-black hover:text-eleve-brand transition-colors cursor-pointer"
          >
            {link.name}
          </button>
        ))}
        <button
           onClick={() => handleNavClick('contact')}
           className="text-xs font-bold tracking-widest text-white bg-eleve-black px-10 py-4 mt-4 uppercase shadow-lg hover:bg-eleve-brand transition-colors text-center w-full max-w-xs cursor-pointer"
        >
          Agendar Consulta
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
