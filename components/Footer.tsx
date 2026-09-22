import React from 'react';
import { IMAGES, ADDRESS, PHONE_DISPLAY, DR_ANDRE_INSTAGRAM, DR_ANA_INSTAGRAM } from '../constants';
import { Instagram, MapPin, Phone, Mail, Award, Clock } from 'lucide-react';
import { Subpage, getPathForSubpage } from '../seo';

interface FooterProps {
  onNavigate?: (page: Subpage, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: Subpage, sectionId?: string) => {
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

  return (
    <footer className="bg-eleve-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Marca d'água */}
      <img 
        src={IMAGES.logo} 
        className="absolute -top-20 -right-20 w-96 h-auto brightness-0 invert opacity-[0.03] pointer-events-none select-none" 
        alt="" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-white/10 pb-16">
          
          <div className="max-w-sm">
            <button 
              onClick={() => handleNav('home')} 
              className="block mb-8 text-left cursor-pointer focus:outline-none"
            >
              <img src={IMAGES.logo} alt="Eleve Odontologia" className="h-12 w-auto brightness-0 invert" />
            </button>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
              Elevando o padrão da odontologia cirúrgica e estética nos bairros Ouro Preto e Castelo em Belo Horizonte. Tecnologia 3D, sedação consciente e especialistas titulares dedicados a cada caso.
            </p>
            <div className="flex gap-4">
              <a 
                href={DR_ANDRE_INSTAGRAM} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-eleve-gold hover:text-white transition-all"
                title="Instagram Dr. André Araújo"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={DR_ANA_INSTAGRAM} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-eleve-gold hover:text-white transition-all"
                title="Instagram Dra. Ana Luiza"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-14 w-full lg:w-auto">
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 text-eleve-gold">
                Navegação
              </h4>
              <ul className="space-y-3.5 text-gray-400 text-sm">
                <li>
                  <button 
                    onClick={() => handleNav('home')} 
                    className="hover:text-eleve-gold transition-colors text-left cursor-pointer"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('about')} 
                    className="hover:text-eleve-gold transition-colors text-left cursor-pointer font-bold text-gray-200"
                  >
                    Sobre a Clínica
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('home', 'doctors')} 
                    className="hover:text-eleve-gold transition-colors text-left cursor-pointer"
                  >
                    Especialistas Titulares
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('treatments')} 
                    className="hover:text-eleve-gold transition-colors text-left cursor-pointer font-bold text-gray-200"
                  >
                    Tratamentos & Procedimentos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('contact')} 
                    className="hover:text-eleve-gold transition-colors text-left cursor-pointer font-bold text-eleve-gold"
                  >
                    Contato & Agendamento
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('home', 'location')} 
                    className="hover:text-eleve-gold transition-colors text-left cursor-pointer"
                  >
                    Localização & Acesso
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 text-eleve-gold">
                Especialidades
              </h4>
              <ul className="space-y-3 text-gray-400 text-xs">
                <li>
                  <button 
                    onClick={() => handleNav('treatments')} 
                    className="hover:text-eleve-gold transition-colors text-left cursor-pointer"
                  >
                    Cirurgia Ortognática 3D
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('treatments')} 
                    className="hover:text-eleve-gold transition-colors text-left cursor-pointer"
                  >
                    Implantes Guiados por Computador
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('treatments')} 
                    className="hover:text-eleve-gold transition-colors text-left cursor-pointer"
                  >
                    Invisalign & Ortodontia Digital
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('treatments')} 
                    className="hover:text-eleve-gold transition-colors text-left cursor-pointer"
                  >
                    Extração Segura de Sisos Inclusos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('treatments')} 
                    className="hover:text-eleve-gold transition-colors text-left cursor-pointer"
                  >
                    Aparelhos Autoligados & Safira
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('treatments')} 
                    className="hover:text-eleve-gold transition-colors text-left cursor-pointer"
                  >
                    Clareamento & Estética Dental
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 text-eleve-gold">
                Atendimento
              </h4>
              <div className="space-y-3 text-gray-400 text-xs font-light">
                <p className="text-white font-bold text-sm flex items-center gap-2">
                  <Phone size={14} className="text-eleve-brand" />
                  {PHONE_DISPLAY}
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={14} className="text-eleve-brand shrink-0" />
                  elevebh@gmail.com
                </p>
                <p className="flex items-start gap-2 pt-1 leading-relaxed">
                  <MapPin size={14} className="text-eleve-brand mt-0.5 shrink-0" />
                  {ADDRESS}
                </p>
                <p className="flex items-center gap-2 pt-1 text-gray-300">
                  <Clock size={14} className="text-eleve-gold shrink-0" />
                  Segunda a Sexta: 08h às 19h | Sábado: 08h às 13h
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} Eleve Odontologia. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-6 items-center">
            <span>Responsável Técnico: Dr. André Araújo</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-eleve-brand" />
            <span>CRO-MG</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-eleve-brand" />
            <span>Ouro Preto & Castelo, Belo Horizonte</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
