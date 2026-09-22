import React from 'react';
import { ArrowRight, Star, PlayCircle, ShieldCheck, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[640px] md:min-h-screen md:h-auto lg:min-h-[680px] xl:h-screen xl:min-h-[740px] flex flex-col md:flex-row overflow-hidden bg-eleve-black">
      
      {/* =========================================
          VERSÃO MOBILE (Renovada) 
         ========================================= */}
      <div className="md:hidden absolute inset-0 z-0">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
        >
            <source src="https://i.imgur.com/ami7JI7.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-eleve-black/90 via-eleve-black/60 to-eleve-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-eleve-black/90 via-transparent to-transparent"></div>
      </div>

      {/* Conteúdo Mobile Overlay */}
      <div className="md:hidden relative z-20 w-full px-5 text-center flex flex-col justify-center h-full pt-20 pb-16">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
        >
            <div className="inline-flex items-center border border-white/20 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 rounded-full mb-5 mx-auto shadow-lg">
                <p className="text-white text-[10px] tracking-wider uppercase font-semibold whitespace-nowrap">
                    Ouro Preto & Castelo • BH
                </p>
            </div>
            
            <h1 className="text-[2.2rem] sm:text-[2.5rem] font-serif text-white leading-[1.1] mb-4 drop-shadow-xl">
                Especialistas em <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 font-light italic">Transformar Sorrisos.</span>
            </h1>
            
            {/* Texto clareado para contraste máximo no mobile */}
            <p className="text-gray-100 mb-7 font-normal text-xs sm:text-sm leading-relaxed max-w-xs mx-auto opacity-95 drop-shadow-md">
                Referência em Implantes, Ortognática e Estética. Tecnologia de ponta no seu bairro.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-gradient-to-r from-eleve-success to-teal-600 text-white font-bold uppercase tracking-widest rounded-lg shadow-[0_0_25px_rgba(5,150,105,0.4)] flex items-center justify-center gap-2 text-xs sm:text-sm relative overflow-hidden group border border-white/10"
              >
                {/* Mobile Button Shine Effect */}
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                Agendar Avaliação <ArrowRight size={16} />
              </a>

              <a 
                href="#doctors"
                className="w-full py-3 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 text-xs hover:bg-white/10 transition-all"
              >
                Conhecer Clínica
              </a>
            </div>

            {/* Badges Mobile */}
            <div className="mt-8 flex items-center justify-center gap-6 opacity-90">
                <div className="flex flex-col items-center gap-1">
                    <ShieldCheck className="text-eleve-brand" size={18} />
                    <span className="text-[10px] text-gray-200 font-bold uppercase tracking-wider shadow-sm">Biossegurança</span>
                </div>
                <div className="w-[1px] h-7 bg-white/30"></div>
                <div className="flex flex-col items-center gap-1">
                    <PlayCircle className="text-eleve-brand" size={18} />
                    <span className="text-[10px] text-gray-200 font-bold uppercase tracking-wider shadow-sm">Tecnologia 3D</span>
                </div>
            </div>
        </motion.div>
      </div>


      {/* =========================================
          VERSÃO DESKTOP (Split Screen Luxo) 
         ========================================= */}
      
      {/* Lado Esquerdo: Conteúdo e Tipografia */}
      <div className="hidden md:flex w-full md:w-1/2 min-h-[640px] md:min-h-screen lg:h-full bg-eleve-black relative z-20 flex-col justify-center px-6 sm:px-8 md:px-8 lg:px-12 xl:px-20 2xl:px-28 pt-24 sm:pt-28 md:pt-28 lg:pt-32 xl:pt-36 pb-16 md:pb-20 lg:pb-16">
        {/* Elemento Decorativo de Fundo (Glow) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-eleve-brand/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-eleve-black via-eleve-black to-transparent z-10"></div>
        </div>

        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-20"
        >
            <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 lg:mb-6">
                <div className="h-[1px] w-8 lg:w-12 bg-eleve-gold"></div>
                <span className="text-eleve-gold font-bold tracking-[0.25em] lg:tracking-[0.3em] uppercase text-[10px] sm:text-[11px] lg:text-xs xl:text-sm">
                    Odontologia de Alta Performance
                </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-serif text-white leading-[1.12] mb-4 sm:mb-5 lg:mb-6">
                Sorrisos que <br/>
                <span className="italic text-gray-300 font-light relative inline-block">
                    definem você.
                    {/* Sublinhado Artístico */}
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-eleve-brand opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 123.5 0.500002 198.5 2.50002" stroke="currentColor" strokeWidth="3"/></svg>
                </span>
            </h1>

            {/* Texto de apoio com cor mais clara para leitura fácil */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base font-normal leading-relaxed max-w-xl mb-6 sm:mb-7 lg:mb-9 border-l-2 border-eleve-brand/50 pl-4 lg:pl-6">
                A união perfeita entre a precisão da cirurgia e a arte da estética. 
                Sua referência em <b>Implantes</b> e <b>Ortognática</b> no Ouro Preto.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-4">
                
                {/* BOTÃO PRINCIPAL */}
                <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-5 lg:px-7 py-3.5 lg:py-4 bg-gradient-to-r from-eleve-success to-teal-600 text-white font-bold uppercase tracking-widest text-[11px] lg:text-xs xl:text-sm rounded-sm hover:translate-y-[-2px] transition-all duration-300 shadow-[0_0_25px_rgba(5,150,105,0.3)] hover:shadow-[0_0_35px_rgba(5,150,105,0.6)] flex items-center justify-center gap-3 overflow-hidden"
                >
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                    
                    <span className="relative z-10 flex items-center gap-2.5">
                        Agendar Avaliação
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </a>
                
                {/* BOTÃO SECUNDÁRIO */}
                <a 
                    href="#doctors"
                    className="group px-5 lg:px-7 py-3.5 lg:py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold uppercase tracking-widest text-[11px] lg:text-xs xl:text-sm rounded-sm hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2.5"
                >
                    Conhecer Clínica
                </a>
            </div>

            {/* Badges de Autoridade */}
            <div className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-gray-400 text-[10px] lg:text-xs font-bold uppercase tracking-wider opacity-100">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="text-eleve-brand" size={16} />
                    <span>Biossegurança Hospitalar</span>
                </div>
                <div className="w-1 h-1 bg-gray-500 rounded-full hidden sm:block"></div>
                <div className="flex items-center gap-2">
                    <PlayCircle className="text-eleve-brand" size={16} />
                    <span>Tecnologia Digital 3D</span>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Lado Direito: Vídeo Imersivo */}
      <div className="hidden md:block w-1/2 h-full min-h-[640px] md:min-h-screen relative">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
        >
            <source src="https://i.imgur.com/ami7JI7.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-r from-eleve-black via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-eleve-brand/10 mix-blend-overlay z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none"></div>

        {/* Floating Card Desktop */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 lg:p-6 rounded-xl max-w-[220px] sm:max-w-[250px] lg:max-w-[290px] xl:max-w-xs shadow-2xl
                       bottom-10 right-4 
                       sm:bottom-12 sm:right-6 
                       lg:bottom-16 lg:right-10
                       xl:bottom-24 xl:right-16"
        >
            <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                    <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                    <p className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Atendimento hoje</p>
                </div>
                <CalendarCheck size={14} className="text-white/60" />
            </div>
            
            <p className="text-white font-serif text-sm sm:text-base lg:text-lg xl:text-xl italic leading-snug mb-2.5 lg:mb-3">
                "O nível de detalhe e cuidado da equipe Eleve é incomparável."
            </p>
            
            <div className="flex items-center justify-between">
                <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-eleve-gold text-eleve-gold" />)}
                </div>
                <span className="text-[9px] sm:text-[10px] text-gray-300 font-light">Paciente Verificado</span>
            </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;