import React from 'react';
import { IMAGES } from '../constants';
import { Coffee, Snowflake, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const ClinicFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-white text-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-eleve-gold font-bold tracking-widest uppercase text-xs mb-4 block">Experiência Eleve</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-eleve-black">
              Esqueça o "cheiro de hospital". <br/>
              <span className="text-gray-500 italic font-light">Sinta-se em casa.</span>
            </h2>
            <p className="text-slate-700 mb-10 text-lg font-medium leading-relaxed">
              Na Eleve, redefinimos o conceito de consultório. Criamos uma atmosfera clara, limpa e acolhedora. Do café premium na recepção à tecnologia de sedação para ansiosos, tudo foi pensado para você relaxar enquanto cuidamos do seu sorriso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4 group">
                <div className="bg-stone-50 p-3 h-fit rounded-lg group-hover:bg-eleve-gold transition-colors border border-gray-200 shadow-sm">
                  <Snowflake className="text-eleve-gold group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-eleve-black text-lg">Ambiente Climatizado</h4>
                  <p className="text-sm text-gray-700 font-semibold">Conforto térmico absoluto.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-stone-50 p-3 h-fit rounded-lg group-hover:bg-eleve-gold transition-colors border border-gray-200 shadow-sm">
                  <Shield className="text-eleve-gold group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-eleve-black text-lg">Biossegurança</h4>
                  <p className="text-sm text-gray-700 font-semibold">Esterilização padrão hospitalar.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-stone-50 p-3 h-fit rounded-lg group-hover:bg-eleve-gold transition-colors border border-gray-200 shadow-sm">
                  <Coffee className="text-eleve-gold group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-eleve-black text-lg">Café & Conforto</h4>
                  <p className="text-sm text-gray-700 font-semibold">Mantenha-se relaxado.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-stone-50 p-3 h-fit rounded-lg group-hover:bg-eleve-gold transition-colors border border-gray-200 shadow-sm">
                  <Clock className="text-eleve-gold group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-eleve-black text-lg">Pontualidade</h4>
                  <p className="text-sm text-gray-700 font-semibold">Respeito total ao seu tempo.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
             {/* Círculo decorativo sutil */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-eleve-gold/20 rounded-full animate-spin-slow pointer-events-none"></div>
             
             <div className="grid grid-cols-2 gap-4 relative z-10">
               <motion.img 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 src={IMAGES.clinic1} 
                 alt="Consultório" 
                 className="rounded-lg shadow-xl transform translate-y-8 object-cover h-64 w-full border-4 border-white" 
               />
               <motion.img 
                 initial={{ y: -20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 src={IMAGES.clinic2} 
                 alt="Recepção" 
                 className="rounded-lg shadow-xl transform -translate-y-8 object-cover h-64 w-full border-4 border-white" 
               />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClinicFeatures;