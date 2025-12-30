import React from 'react';
import { ArrowRight, Star, PlayCircle, ShieldCheck, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col md:flex-row overflow-hidden bg-eleve-black">
      
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
      <div className="md:hidden relative z-20 w-full px-5 text-center flex flex-col justify-center h-full pt-16">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
        >
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 mx-auto shadow-lg">
                <Star size={12} className="text-eleve-gold fill-eleve-gold" />
                <p className="text-white text-[10px] tracking-[0.2em] uppercase font-bold">
                    Ouro Preto & Castelo • BH
                </p>
            </div>
            
            <h1 className="text-[2.5rem] font-serif text-white leading-[1.1] mb-5 drop-shadow-xl">
                Especialistas em <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 font-light italic">Transformar Sorrisos.</span>
            </h1>
            
            {/* Texto clareado para contraste máximo no mobile */}
            <p className="text-gray-100 mb-8 font-normal text-sm leading-relaxed max-w-xs mx-auto opacity-95 drop-shadow-md">
                Referência em Implantes, Ortognática e Estética. Tecnologia de ponta no seu bairro.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gradient-to-r from-eleve-success to-teal-600 text-white font-bold uppercase tracking-widest rounded-lg shadow-[0_0_25px_rgba(5,150,105,0.4)] flex items-center justify-center gap-2 text-sm relative overflow-hidden group border border-white/10"
              >
                {/* Mobile Button Shine Effect */}
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                Agendar Avaliação <ArrowRight size={16} />
              </a>

              <a 
                href="#doctors"
                className="w-full py-3.5 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 text-xs hover:bg-white/10 transition-all"
              >
                Conhecer Clínica
              </a>
            </div>

            {/* Badges Mobile */}
            <div className="mt-10 flex items-center justify-center gap-6 opacity-90">
                <div className="flex flex-col items-center gap-1">
                    <ShieldCheck className="text-eleve-brand" size={20} />
                    <span className="text-[10px] text-gray-200 font-bold uppercase tracking-wider shadow-sm">Biossegurança</span>
                </div>
                <div className="w-[1px] h-8 bg-white/30"></div>
                <div className="flex flex-col items-center gap-1">
                    <PlayCircle className="text-eleve-brand" size={20} />
                    <span className="text-[10px] text-gray-200 font-bold uppercase tracking-wider shadow-sm">Tecnologia 3D</span>
                </div>
            </div>
        </motion.div>
      </div>


      {/* =========================================
          VERSÃO DESKTOP (Split Screen Luxo) 
         ========================================= */}
      
      {/* Lado Esquerdo: Conteúdo e Tipografia */}
      <div className="hidden md:flex w-1/2 h-full bg-eleve-black relative z-20 flex-col justify-center px-10 lg:px-16 xl:px-24 2xl:px-32">
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
            <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-[1px] w-12 bg-eleve-gold"></div>
                <span className="text-eleve-gold font-bold tracking-[0.3em] uppercase text-xs lg:text-sm">
                    Odontologia de Alta Performance
                </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif text-white leading-[1.1] mb-8">
                Sorrisos que <br/>
                <span className="italic text-gray-300 font-light relative inline-block">
                    definem você.
                    {/* Sublinhado Artístico */}
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-eleve-brand opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 123.5 0.500002 198.5 2.50002" stroke="currentColor" strokeWidth="3"/></svg>
                </span>
            </h1>

            {/* Texto de apoio com cor mais clara para leitura fácil */}
            <p className="text-gray-300 text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-12 border-l-2 border-eleve-brand/50 pl-8">
                A união perfeita entre a precisão da cirurgia e a arte da estética. 
                Sua referência em <b>Implantes</b> e <b>Ortognática</b> no Ouro Preto.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                
                {/* BOTÃO PRINCIPAL */}
                <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-5 bg-gradient-to-r from-eleve-success to-teal-600 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:translate-y-[-2px] transition-all duration-300 shadow-[0_0_25px_rgba(5,150,105,0.3)] hover:shadow-[0_0_35px_rgba(5,150,105,0.6)] flex items-center gap-4 overflow-hidden"
                >
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                    
                    <span className="relative z-10 flex items-center gap-3">
                        Agendar Avaliação
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </a>
                
                {/* BOTÃO SECUNDÁRIO */}
                <a 
                    href="#doctors"
                    className="group px-8 py-5 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-3"
                >
                    Conhecer Clínica
                </a>
            </div>

            {/* Badges de Autoridade */}
            <div className="mt-16 flex items-center gap-8 text-gray-400 text-xs font-bold uppercase tracking-wider opacity-100">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="text-eleve-brand" size={18} />
                    <span>Biossegurança Hospitalar</span>
                </div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="flex items-center gap-2">
                    <PlayCircle className="text-eleve-brand" size={18} />
                    <span>Tecnologia Digital 3D</span>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Lado Direito: Vídeo Imersivo */}
      <div className="hidden md:block w-1/2 h-full relative">
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
            className="absolute z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl max-w-[260px] lg:max-w-xs shadow-2xl
                       bottom-28 right-8 
                       lg:bottom-32 lg:right-12
                       xl:right-24"
        >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                    <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest">Atendimento hoje</p>
                </div>
                <CalendarCheck size={14} className="text-white/60" />
            </div>
            
            <p className="text-white font-serif text-lg lg:text-xl italic leading-tight mb-3">
                "O nível de detalhe e cuidado da equipe Eleve é incomparável."
            </p>
            
            <div className="flex items-center justify-between">
                <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-eleve-gold text-eleve-gold" />)}
                </div>
                <span className="text-[10px] text-gray-300 font-light">Paciente Verificado</span>
            </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;