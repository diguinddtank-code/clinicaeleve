import React from 'react';
import { IMAGES } from '../constants';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-eleve-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
       {/* Watermark Logo */}
       <img 
         src={IMAGES.logo} 
         className="absolute -top-20 -right-20 w-96 h-auto brightness-0 invert opacity-[0.03] pointer-events-none" 
         alt="" 
       />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/10 pb-16">
          
          <div className="max-w-sm">
            <img src={IMAGES.logo} alt="Eleve Odontologia" className="h-10 w-auto mb-8 brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
              Elevando o padrão da odontologia no bairro Ouro Preto & Castelo. <br/> 
              Tecnologia, conforto e os melhores especialistas de BH ao seu alcance.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-eleve-gold hover:text-white transition-all"><Instagram size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-eleve-gold hover:text-white transition-all"><Facebook size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-eleve-gold hover:text-white transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
             <div>
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Clínica</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li><a href="#home" className="hover:text-eleve-gold transition-colors">Início</a></li>
                    <li><a href="#doctors" className="hover:text-eleve-gold transition-colors">Doutores</a></li>
                    <li><a href="#services" className="hover:text-eleve-gold transition-colors">Tratamentos</a></li>
                    <li><a href="#location" className="hover:text-eleve-gold transition-colors">Localização</a></li>
                </ul>
             </div>
             <div>
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Contato</h4>
                <div className="space-y-4 text-gray-400 text-sm font-light">
                   <p className="text-white">(31) 3234-7977</p>
                   <p>elevebh@gmail.com</p>
                   <p>Rua Sena Madureira, 491<br/>Ouro Preto, Belo Horizonte</p>
                </div>
             </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} Eleve Odontologia. Todos os direitos reservados.</p>
          <div className="flex gap-6">
             <span>Responsável Técnico: Dr. André Araújo</span>
             <span>CRO-MG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;