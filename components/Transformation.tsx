import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES, WHATSAPP_LINK } from '../constants';
import { ArrowRight } from 'lucide-react';

const Transformation: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="md:w-1/2">
                <span className="text-eleve-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Visualização de Resultados</span>
                <h2 className="text-4xl md:text-5xl font-serif text-eleve-black mb-6">
                    A arte de transformar sorrisos.
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    Cada sorriso conta uma história. Na Eleve, utilizamos planejamento digital (DSD) e scanners intraorais para que você veja o resultado final antes mesmo de começar.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Seja em casos complexos de <b>Cirurgia Ortognática</b>, reabilitação com <b>Implantes</b> ou alinhamento com <b>Invisalign</b>, a previsibilidade é nossa prioridade.
                </p>
                
                <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    className="inline-flex items-center px-8 py-3 bg-eleve-black text-white font-bold uppercase tracking-widest rounded-sm hover:bg-eleve-gold transition-colors"
                >
                    Avaliar meu caso <ArrowRight size={18} className="ml-2"/>
                </a>
            </div>

            <div className="md:w-1/2 relative">
                <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 mt-8"
                    >
                        <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
                            <img src={IMAGES.transformation1} alt="Sorriso Antes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded">Planejamento</div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                         <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
                            <img src={IMAGES.transformation2} alt="Sorriso Depois" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            <div className="absolute bottom-4 left-4 bg-eleve-gold text-white text-xs px-3 py-1 rounded font-bold">Resultado</div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Transformation;