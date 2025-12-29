import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* Background Video Full Screen */}
      <div className="absolute inset-0 z-0">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
        >
            <source src="https://i.imgur.com/ami7JI7.mp4" type="video/mp4" />
        </video>
        {/* Gradiente Overlay Sóbrio */}
        <div className="absolute inset-0 bg-gradient-to-r from-eleve-black/90 via-eleve-black/60 to-eleve-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-eleve-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left pt-20">
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
        >
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Star size={14} className="text-eleve-gold fill-eleve-gold" />
                <p className="text-white text-xs md:text-sm tracking-[0.2em] uppercase font-bold shadow-black drop-shadow-md">
                    Ouro Preto & Castelo • Belo Horizonte
                </p>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 drop-shadow-xl">
                Especialistas em <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 font-light italic">Transformar Sorrisos.</span>
            </h1>
            
            <p className="text-gray-200 mb-10 font-light text-base md:text-xl max-w-xl leading-relaxed border-l-2 border-eleve-brand pl-6">
                Referência em Implantes, Cirurgia Ortognática e Estética Dental. 
                Tecnologia de ponta e acolhimento humano no seu bairro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-eleve-success text-white font-bold uppercase tracking-widest rounded shadow-lg hover:bg-eleve-successHover transition-all duration-300 flex items-center justify-center gap-3 border border-transparent"
              >
                Agendar Avaliação <ArrowRight size={18} />
              </a>
              
              <a 
                href="#doctors"
                className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center"
              >
                Corpo Clínico
              </a>
            </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{ delay: 2, repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-widest">Role para ver</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;