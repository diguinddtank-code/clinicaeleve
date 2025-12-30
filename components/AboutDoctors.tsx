import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES, DR_ANDRE_INSTAGRAM, DR_ANA_INSTAGRAM } from '../constants';
import { Instagram, CheckCircle2, ArrowRight, ShieldCheck, Award } from 'lucide-react';

const AboutDoctors: React.FC = () => {
  return (
    <section id="doctors" className="py-20 lg:py-32 bg-white text-eleve-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-eleve-brand font-bold tracking-[0.2em] uppercase text-xs lg:text-sm mb-3 block">Corpo Clínico</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-eleve-black mb-4 font-bold">Nossos Especialistas</h2>
          <div className="w-16 lg:w-24 h-1 bg-eleve-gold mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-20 lg:gap-32">
            
            {/* Dr. André */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 rounded-3xl p-6 md:p-12 lg:p-16 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-500"
            >
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                    {/* Imagem Desktop Maior com Overlay de Autoridade */}
                    <div className="w-full lg:w-2/5 flex justify-center">
                        <div className="relative w-full max-w-sm lg:max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer">
                             <img 
                                src={IMAGES.drAndre} 
                                alt="Dr. André Araújo" 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                            />
                            
                            {/* Overlay Dark Gradient para Legibilidade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-eleve-black/95 via-eleve-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    {/* Badge de Autoridade */}
                                    <div className="inline-flex items-center gap-2 bg-eleve-gold text-white px-3 py-1.5 rounded-sm mb-3 shadow-lg border-l-2 border-white/30 backdrop-blur-md">
                                        <Award size={14} className="text-white fill-white/20" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Referência em Implantes</span>
                                    </div>
                                    
                                    <h3 className="text-white font-serif text-2xl lg:text-3xl font-bold leading-none mb-1 drop-shadow-md">
                                        Dr. André Araújo
                                    </h3>
                                    <div className="h-0.5 w-12 bg-eleve-brand my-2"></div>
                                    <p className="text-gray-200 text-xs lg:text-sm font-medium uppercase tracking-wider drop-shadow-sm">
                                        Cirurgião Buco-Maxilo-Facial
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/5 space-y-6 lg:space-y-8">
                        <div>
                            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-eleve-black font-bold">Dr. André Araújo</h3>
                                <div className="bg-eleve-brand text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide w-fit">Diretor Clínico</div>
                            </div>
                            <p className="text-eleve-brand font-bold tracking-wider text-sm lg:text-base uppercase">Cirurgião Buco-Maxilo-Facial</p>
                        </div>
                        
                        {/* Texto escurecido para melhor leitura */}
                        <p className="text-slate-700 text-base md:text-lg lg:text-xl leading-relaxed font-medium text-justify">
                            O Dr. André é a referência técnica da clínica. Com vasta experiência hospitalar e acadêmica, ele é o responsável pelos casos de maior complexidade. Sua abordagem combina precisão cirúrgica com planejamento estético para resultados naturais.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm lg:text-base text-gray-900 font-semibold">
                             <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                <CheckCircle2 size={20} className="text-eleve-brand mt-0.5 shrink-0" />
                                <span>Residência Hospitalar Dr. Mário Gatti</span>
                             </div>
                             <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                <CheckCircle2 size={20} className="text-eleve-brand mt-0.5 shrink-0" />
                                <span>Especialista em Implantodontia</span>
                             </div>
                             <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                <CheckCircle2 size={20} className="text-eleve-brand mt-0.5 shrink-0" />
                                <span>Cirurgia Ortognática & Sisos</span>
                             </div>
                             <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                <CheckCircle2 size={20} className="text-eleve-brand mt-0.5 shrink-0" />
                                <span>Staff dos principais hospitais de BH</span>
                             </div>
                        </div>

                        <div className="pt-6">
                            <a 
                                href={DR_ANDRE_INSTAGRAM}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-lg hover:border-eleve-brand transition-all duration-300 overflow-hidden"
                            >
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Instagram size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-pink-600 transition-colors">Instagram Profissional</span>
                                    <span className="font-bold text-base text-eleve-black flex items-center gap-2">
                                        Ver Casos Reais 
                                        <ArrowRight size={16} className="text-gray-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
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
                className="bg-gray-50 rounded-3xl p-6 md:p-12 lg:p-16 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-500"
            >
                <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20">
                    {/* Imagem Desktop Maior */}
                    <div className="w-full lg:w-2/5 flex justify-center">
                        <div className="relative w-full max-w-sm lg:max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                             <img 
                                src={IMAGES.draAna} 
                                alt="Dra. Ana Luiza" 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-3/5 space-y-6 lg:space-y-8 text-left lg:text-right">
                        <div>
                            <div className="flex flex-col md:flex-row-reverse md:items-center gap-3 mb-2 lg:justify-start">
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-eleve-black font-bold">Dra. Ana Luiza</h3>
                            </div>
                            <p className="text-eleve-gold font-bold tracking-wider text-sm lg:text-base uppercase">Ortodontista & Endodontista</p>
                        </div>
                        
                        <p className="text-slate-700 text-base md:text-lg lg:text-xl leading-relaxed font-medium text-justify lg:text-right">
                            Delicadeza e perfeccionismo definem o trabalho da Dra. Ana. Especialista em harmonizar sorrisos através da ortodontia digital e salvar dentes com endodontia (canal) microscópica e indolor.
                        </p>

                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm lg:text-base text-gray-900 font-semibold lg:justify-items-end">
                             <div className="flex items-start gap-3 lg:flex-row-reverse text-left lg:text-right p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                <CheckCircle2 size={20} className="text-eleve-gold mt-0.5 shrink-0" />
                                <span>Invisalign Doctor (Ortodontia Digital)</span>
                             </div>
                             <div className="flex items-start gap-3 lg:flex-row-reverse text-left lg:text-right p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                <CheckCircle2 size={20} className="text-eleve-gold mt-0.5 shrink-0" />
                                <span>Especialista em Endodontia</span>
                             </div>
                             <div className="flex items-start gap-3 lg:flex-row-reverse text-left lg:text-right p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                <CheckCircle2 size={20} className="text-eleve-gold mt-0.5 shrink-0" />
                                <span>Mestre e Pós-Graduada na UFMG</span>
                             </div>
                             <div className="flex items-start gap-3 lg:flex-row-reverse text-left lg:text-right p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                <CheckCircle2 size={20} className="text-eleve-gold mt-0.5 shrink-0" />
                                <span>Ortodontia Preventiva</span>
                             </div>
                        </div>

                        <div className="pt-6 flex justify-start lg:justify-end">
                             <a 
                                href={DR_ANA_INSTAGRAM}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-lg hover:border-eleve-brand transition-all duration-300 overflow-hidden"
                            >
                                <div className="flex flex-col text-right">
                                    <span className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-pink-600 transition-colors">Instagram Profissional</span>
                                    <span className="font-bold text-base text-eleve-black flex items-center gap-2">
                                        <ArrowRight size={16} className="text-gray-400 group-hover:text-pink-500 group-hover:-translate-x-1 transition-all rotate-180" />
                                        Ver Casos Reais 
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Instagram size={20} />
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