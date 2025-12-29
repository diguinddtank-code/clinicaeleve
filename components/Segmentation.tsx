import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Smile, Settings, Sparkles } from 'lucide-react';
import { WHATSAPP_DOR, WHATSAPP_ESTETICA, WHATSAPP_IMPLANTE, WHATSAPP_APARELHO } from '../constants';

const Segmentation: React.FC = () => {
  const options = [
    {
      icon: <Activity size={32} />,
      title: "Estou com Dor",
      desc: "Atendimento prioritário para emergências, dor de siso ou canal.",
      link: WHATSAPP_DOR,
      color: "bg-red-50 hover:bg-red-100 border-red-100"
    },
    {
      icon: <Settings size={32} />,
      title: "Implantes",
      desc: "Repor dentes perdidos e voltar a sorrir com segurança.",
      link: WHATSAPP_IMPLANTE,
      color: "bg-blue-50 hover:bg-blue-100 border-blue-100"
    },
    {
      icon: <Smile size={32} />,
      title: "Alinhar Sorriso",
      desc: "Invisalign e aparelhos modernos para alinhar seus dentes.",
      link: WHATSAPP_APARELHO,
      color: "bg-purple-50 hover:bg-purple-100 border-purple-100"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Estética Dental",
      desc: "Lentes de contato, clareamento e harmonização.",
      link: WHATSAPP_ESTETICA,
      color: "bg-amber-50 hover:bg-amber-100 border-amber-100"
    }
  ];

  return (
    <section className="py-16 bg-white relative z-30 -mt-10 md:-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-serif text-eleve-black font-bold">O que você procura hoje?</h3>
                <p className="text-gray-500 text-sm mt-2">Selecione uma opção para atendimento personalizado</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {options.map((opt, index) => (
                    <motion.a
                        key={index}
                        href={opt.link}
                        target="_blank"
                        whileHover={{ y: -5 }}
                        className={`flex flex-col items-center text-center p-6 rounded-xl border transition-all duration-300 ${opt.color} group cursor-pointer`}
                    >
                        <div className="mb-4 text-eleve-black/70 group-hover:scale-110 transition-transform duration-300">
                            {opt.icon}
                        </div>
                        <h4 className="font-bold text-lg text-eleve-black mb-2">{opt.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {opt.desc}
                        </p>
                    </motion.a>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Segmentation;