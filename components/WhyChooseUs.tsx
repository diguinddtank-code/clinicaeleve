import React from 'react';
import { motion } from 'framer-motion';
import { ScanFace, Award, HeartHandshake, Zap, ShieldCheck, Microscope } from 'lucide-react';

const reasons = [
  {
    icon: <ScanFace size={20} />,
    title: "Tecnologia 3D",
    text: "Scanner Intraoral iTero e Tomografia para planejamento preciso, sem massinhas."
  },
  {
    icon: <Award size={20} />,
    title: "Especialistas",
    text: "Dr. André (Buco-Maxilo) e Dra. Ana (Mestre UFMG) conduzem seu tratamento."
  },
  {
    icon: <HeartHandshake size={20} />,
    title: "Humanização",
    text: "Atendimento focado no conforto, com opções de Sedação Consciente para ansiosos."
  },
  {
    icon: <Zap size={20} />,
    title: "Laserterapia",
    text: "Tecnologia para acelerar a cicatrização e reduzir o inchaço no pós-operatório."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Biossegurança",
    text: "Protocolos de esterilização hospitalar. Sua saúde é prioridade absoluta."
  },
  {
    icon: <Microscope size={20} />,
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