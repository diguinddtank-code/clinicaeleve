import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Smile, Settings, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import { WHATSAPP_DOR, WHATSAPP_ESTETICA, WHATSAPP_IMPLANTE, WHATSAPP_APARELHO } from '../constants';

const Segmentation: React.FC = () => {
  const options = [
    {
      icon: <Activity size={24} />,
      title: "Estou com Dor",
      subtitle: "Prioridade",
      link: WHATSAPP_DOR,
      // Estilo de Emergência (Destaque sutil)
      containerClass: "border-red-100 bg-red-50/30 hover:bg-red-50",
      iconClass: "bg-red-100 text-red-600",
      textClass: "text-red-900",
      isEmergency: true
    },
    {
      icon: <Settings size={24} />,
      title: "Implantes",
      subtitle: "Reabilitação",
      link: WHATSAPP_IMPLANTE,
      containerClass: "border-gray-100 bg-white hover:border-blue-200 hover:bg-blue-50/30",
      iconClass: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
      textClass: "text-eleve-black",
      isEmergency: false
    },
    {
      icon: <Smile size={24} />,
      title: "Aparelhos",
      subtitle: "Invisalign",
      link: WHATSAPP_APARELHO,
      containerClass: "border-gray-100 bg-white hover:border-purple-200 hover:bg-purple-50/30",
      iconClass: "bg-purple-50 text-purple-600 group-hover:bg-purple-100",
      textClass: "text-eleve-black",
      isEmergency: false
    },
    {
      icon: <Sparkles size={24} />,
      title: "Estética",
      subtitle: "Lentes/Clareamento",
      link: WHATSAPP_ESTETICA,
      containerClass: "border-gray-100 bg-white hover:border-amber-200 hover:bg-amber-50/30",
      iconClass: "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
      textClass: "text-eleve-black",
      isEmergency: false
    }
  ];

  return (
    <section className="relative z-30 -mt-8 md:-mt-20 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] p-6 md:p-10 border border-gray-100 relative overflow-hidden">
            
            {/* Título da Seção */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-gray-100 pb-6">
                <div>
                    <h3 className="text-xl md:text-2xl font-serif text-eleve-black font-bold">O que você precisa?</h3>
                    <p className="text-gray-600 text-xs md:text-sm mt-1 font-medium">Selecione para atendimento via WhatsApp</p>
                </div>
                {/* Indicador visual de status online */}
                <div className="hidden md:flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    Equipe Online Agora
                </div>
            </div>
            
            {/* GRID: 1 Coluna no Mobile (Lista), 4 no Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {options.map((opt, index) => (
                    <motion.a
                        key={index}
                        href={opt.link}
                        target="_blank"
                        whileHover={{ y: -2, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={`
                          group relative flex items-center p-4 rounded-xl border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md
                          ${opt.containerClass}
                        `}
                    >
                        {/* Ícone à Esquerda */}
                        <div className={`h-12 w-12 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${opt.iconClass}`}>
                            {opt.icon}
                        </div>
                        
                        {/* Texto no Meio */}
                        <div className="ml-4 flex-grow">
                            <h4 className={`font-bold text-base leading-tight ${opt.textClass}`}>{opt.title}</h4>
                            <p className="text-xs text-gray-600 font-bold uppercase tracking-wide mt-0.5">{opt.subtitle}</p>
                        </div>

                        {/* Ação à Direita */}
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${opt.isEmergency ? 'bg-red-100 text-red-600' : 'bg-gray-50 text-gray-400 group-hover:bg-eleve-brand group-hover:text-white'}`}>
                            <ChevronRight size={18} className={`${opt.isEmergency ? '' : 'group-hover:translate-x-0.5 transition-transform'}`} />
                        </div>

                        {/* Efeito Ping para Emergência */}
                        {opt.isEmergency && (
                             <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                        )}
                    </motion.a>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Segmentation;