import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES, WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Especialistas', href: '#doctors' },
    { name: 'Tratamentos', href: '#services' },
    { name: 'Localização', href: '#location' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-gray-100' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO com Animação */}
          <div className="flex-shrink-0 z-50 relative">
            <a href="#home" className="block group">
              <img
                className={`w-auto object-contain transition-all duration-500 ease-in-out ${
                  // Controle de Altura: Maior no topo, menor ao rolar
                  isScrolled ? 'h-12' : 'h-16 md:h-20'
                } ${
                  // Controle de Cor: Branco no topo (fundo escuro), Original ao rolar (fundo branco)
                  !isScrolled && !isOpen ? 'brightness-0 invert drop-shadow-md' : ''
                }`}
                src={IMAGES.logo}
                alt="Eleve Odontologia"
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-eleve-brand relative group ${
                  isScrolled ? 'text-eleve-dark' : 'text-white drop-shadow-md'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-eleve-brand transition-all duration-300 group-hover:w-full`}></span>
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 transition-all duration-300 font-bold uppercase text-xs tracking-widest border rounded-sm flex items-center justify-center ${
                isScrolled 
                  ? 'py-2 border-eleve-brand text-eleve-brand hover:bg-eleve-brand hover:text-white' 
                  : 'py-3 border-white text-white hover:bg-white hover:text-eleve-black'
              }`}
            >
              Agendar
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center z-50 relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${
                isOpen 
                  ? 'text-eleve-black' 
                  : (isScrolled ? 'text-eleve-black' : 'text-white')
              }`}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col justify-center items-center space-y-8 shadow-2xl`}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-eleve-brand"></div>
        
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-serif text-eleve-black hover:text-eleve-brand transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
           href={WHATSAPP_LINK}
           className="text-sm font-bold tracking-widest text-white bg-eleve-black px-12 py-5 mt-8 uppercase shadow-lg hover:bg-eleve-brand transition-colors"
        >
          Agendar Agora
        </a>
      </div>
    </nav>
  );
};

export default Navbar;