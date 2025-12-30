import React from 'react';
import { motion } from 'framer-motion';

// Ícones Customizados SVG para Identidade Única
const CustomIcons = {
  Scanner3D: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3V21M3 12H21" className="opacity-20" />
      <path d="M7 21C7 17.5 9 15 12 15C15 15 17 17.5 17 21" />
      <path d="M7 3C7 6.5 9 9 12 9C15 9 17 6.5 17 3" />
      <rect x="2" y="7" width="20" height="10" rx="2" className="opacity-50" />
      <path d="M12 7V17" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Specialist: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L14.4 7.2L20 8L16 12L17 17.5L12 14.8L7 17.5L8 12L4 8L9.6 7.2L12 2Z" />
      <path d="M12 22C17.5228 22 22 17.5228 22 12" className="opacity-30" />
      <path d="M2 12C2 17.5228 6.47715 22 12 22" className="opacity-30" />
      <circle cx="12" cy="12" r="3" className="opacity-50" />
    </svg>
  ),
  Humanization: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      <path d="M12 6C12 6 13 8 15 8" className="opacity-40" />
      <path d="M9 8C11 8 12 6 12 6" className="opacity-40" />
    </svg>
  ),
  Laser: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
      <path d="M12 2V22" className="opacity-20" />
      <path d="M2 12H22" className="opacity-20" />
    </svg>
  ),
  Biosafety: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
      <circle cx="18" cy="6" r="2" className="opacity-50" />
      <path d="M19 4L17 8" className="opacity-50" />
    </svg>
  ),
  Microscope: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 21H14" />
      <path d="M12 17V21" />
      <path d="M9 14H15L16 17H8L9 14Z" />
      <path d="M12 11V14" />
      <path d="M12 11C13.6569 11 15 9.65685 15 8V3H9V8C9 9.65685 10.3431 11 12 11Z" />
      <path d="M15 3H20V5" />
      <path d="M20 5C20 9 17 11 17 11" />
      <circle cx="12" cy="8" r="2" className="opacity-30" />
    </svg>
  )
};

const reasons = [
  {
    icon: <CustomIcons.Scanner3D />,
    title: "Tecnologia 3D",
    text: "Scanner Intraoral iTero e Tomografia para planejamento preciso, sem massinhas."
  },
  {
    icon: <CustomIcons.Specialist />,
    title: "Especialistas",
    text: "Dr. André (Buco-Maxilo) e Dra. Ana (Mestre UFMG) conduzem seu tratamento."
  },
  {
    icon: <CustomIcons.Humanization />,
    title: "Humanização",
    text: "Atendimento focado no conforto, com opções de Sedação Consciente para ansiosos."
  },
  {
    icon: <CustomIcons.Laser />,
    title: "Laserterapia",
    text: "Tecnologia para acelerar a cicatrização e reduzir o inchaço no pós-operatório."
  },
  {
    icon: <CustomIcons.Biosafety />,
    title: "Biossegurança",
    text: "Protocolos de esterilização hospitalar. Sua saúde é prioridade absoluta."
  },
  {
    icon: <CustomIcons.Microscope />,
    title: "Microscopia",
    text: "Tratamentos de canal e estética com magnificação para maior longevidade."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-6 md:mb-10">
          <span className="text-eleve-brand font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-2 block">Diferenciais Eleve</span>
          <h2 className="text-xl md:text-4xl font-serif text-eleve-black mb-2 md:mb-3 font-bold">Por que escolher a Eleve?</h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-xs md:text-base font-medium hidden md:block">
            Segurança hospitalar com o conforto de uma clínica boutique.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="bg-white p-3 md:p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-eleve-brand/30 transition-all duration-300 group flex flex-col md:block items-center md:items-start text-center md:text-left"
            >
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-0 md:mb-2">
                <div className="w-10 h-10 bg-eleve-brand/5 rounded-lg flex items-center justify-center text-eleve-brand group-hover:bg-eleve-brand group-hover:text-white transition-colors duration-300 shrink-0">
                  {item.icon}
                </div>
                
                <h3 className="text-xs md:text-lg font-bold text-eleve-black group-hover:text-eleve-brand transition-colors leading-tight">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-sm pl-0 md:pl-[3.5rem] hidden md:block font-semibold">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;