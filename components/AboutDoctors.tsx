import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES, DR_ANDRE_INSTAGRAM, DR_ANA_INSTAGRAM } from '../constants';
import { Instagram, CheckCircle2, ArrowRight } from 'lucide-react';

const AboutDoctors: React.FC = () => {
  return (
    <section id="doctors" className="py-20 bg-white text-eleve-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-eleve-brand font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Corpo Clínico</span>
          <h2 className="text-3xl md:text-5xl font-serif text-eleve-black mb-4 font-bold">Nossos Especialistas</h2>
          <div className="w-16 h-1 bg-eleve-gold mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-20">
            
            {/* Dr. André */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-200 shadow-sm"
            >
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Imagem Contida e Menor */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-4 border-white">
                             <img 
                                src={IMAGES.drAndre} 
                                alt="Dr. André Araújo" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 space-y-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl md:text-4xl font-serif text-eleve-black font-bold">Dr. André Araújo</h3>
                                <div className="bg-eleve-brand text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Diretor Clínico</div>
                            </div>
                            <p className="text-eleve-brand font-bold tracking-wider text-sm uppercase">Cirurgião Buco-Maxilo-Facial</p>
                        </div>
                        
                        <p className="text-gray-800 text-base md:text-lg leading-relaxed font-normal">
                            O Dr. André é a referência técnica da clínica. Com vasta experiência hospitalar e acadêmica, ele é o responsável pelos casos de maior complexidade. Sua abordagem combina precisão cirúrgica com planejamento estético.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 font-medium">
                             <div className="flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-eleve-brand mt-0.5 shrink-0" />
                                <span>Residência Hospitalar Dr. Mário Gatti</span>
                             </div>
                             <div className="flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-eleve-brand mt-0.5 shrink-0" />
                                <span>Especialista em Implantodontia</span>
                             </div>
                             <div className="flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-eleve-brand mt-0.5 shrink-0" />
                                <span>Cirurgia Ortognática & Sisos</span>
                             </div>
                             <div className="flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-eleve-brand mt-0.5 shrink-0" />
                                <span>Corpo clínico dos principais hospitais de BH</span>
                             </div>
                        </div>

                        <div className="pt-6">
                            <a 
                                href={DR_ANDRE_INSTAGRAM}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-lg hover:border-eleve-brand transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Instagram size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-pink-600 transition-colors">Portfólio</span>
                                    <span className="font-bold text-sm text-eleve-black flex items-center gap-2">
                                        Ver Casos Reais 
                                        <ArrowRight size={14} className="text-gray-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Dra. Ana */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-200 shadow-sm"
            >
                <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                    {/* Imagem Contida e Menor */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-4 border-white">
                             <img 
                                src={IMAGES.draAna} 
                                alt="Dra. Ana Luiza" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 space-y-6 text-left md:text-right">
                        <div>
                            <div className="flex items-center gap-3 mb-2 md:justify-end">
                                <h3 className="text-2xl md:text-4xl font-serif text-eleve-black font-bold">Dra. Ana Luiza</h3>
                            </div>
                            <p className="text-eleve-gold font-bold tracking-wider text-sm uppercase">Ortodontista & Endodontista</p>
                        </div>
                        
                        <p className="text-gray-800 text-base md:text-lg leading-relaxed font-normal">
                            Delicadeza e perfeccionismo definem o trabalho da Dra. Ana. Especialista em harmonizar sorrisos através da ortodontia digital e salvar dentes com endodontia (canal) microscópica e indolor.
                        </p>

                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 font-medium md:justify-items-end">
                             <div className="flex items-start gap-3 md:flex-row-reverse text-left md:text-right">
                                <CheckCircle2 size={18} className="text-eleve-gold mt-0.5 shrink-0" />
                                <span>Invisalign Doctor (Ortodontia Digital)</span>
                             </div>
                             <div className="flex items-start gap-3 md:flex-row-reverse text-left md:text-right">
                                <CheckCircle2 size={18} className="text-eleve-gold mt-0.5 shrink-0" />
                                <span>Especialista em Endodontia</span>
                             </div>
                             <div className="flex items-start gap-3 md:flex-row-reverse text-left md:text-right">
                                <CheckCircle2 size={18} className="text-eleve-gold mt-0.5 shrink-0" />
                                <span>Pós-Graduação na UFMG</span>
                             </div>
                             <div className="flex items-start gap-3 md:flex-row-reverse text-left md:text-right">
                                <CheckCircle2 size={18} className="text-eleve-gold mt-0.5 shrink-0" />
                                <span>Ortodontia Preventiva</span>
                             </div>
                        </div>

                        <div className="pt-6 flex justify-start md:justify-end">
                             <a 
                                href={DR_ANA_INSTAGRAM}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-lg hover:border-eleve-brand transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                                <div className="flex flex-col text-right">
                                    <span className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-pink-600 transition-colors">Portfólio</span>
                                    <span className="font-bold text-sm text-eleve-black flex items-center gap-2">
                                        <ArrowRight size={14} className="text-gray-400 group-hover:text-pink-500 group-hover:-translate-x-1 transition-all rotate-180" />
                                        Ver Casos Reais 
                                    </span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Instagram size={16} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutDoctors;