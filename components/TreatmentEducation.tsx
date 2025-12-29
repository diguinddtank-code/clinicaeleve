import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ScanFace, ArrowDownCircle, ShieldAlert, Bone } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const treatments = [
  {
    id: 'implante',
    label: 'Implantes',
    icon: <ArrowDownCircle size={24} />, 
    title: 'Implantes Dentários',
    description: 'Recupere sua mastigação e estética. O implante substitui a raiz do dente perdido. É a solução mais segura e duradoura da odontologia atual.',
    steps: [
      { title: 'Diagnóstico 3D', text: 'Tomografia para avaliar o osso com precisão milimétrica.' },
      { title: 'Instalação', text: 'Procedimento rápido sob anestesia local. Sem dor.' },
      { title: 'Carga Imediata', text: 'Em muitos casos, instalamos o dente provisório no mesmo dia.' },
      { title: 'Prótese Final', text: 'Instalação do dente de porcelana definitivo.' }
    ]
  },
  {
    id: 'ortognatica',
    label: 'Ortognática',
    icon: <Bone size={24} />, 
    title: 'Cirurgia Ortognática',
    description: 'A especialidade do Dr. André Araújo. Procedimento transformador que corrige a posição dos ossos da face, resolvendo apneia, dores na ATM e harmonizando o perfil facial.',
    steps: [
      { title: 'Planejamento Virtual', text: 'O Dr. André realiza uma simulação 3D completa da cirurgia antes de começar.' },
      { title: 'Preparo Ortodôntico', text: 'Alinhamento preciso dos dentes para o encaixe cirúrgico perfeito.' },
      { title: 'Cirurgia Hospitalar', text: 'Realizada pelo Dr. André e equipe nos melhores hospitais de BH.' },
      { title: 'Transformação', text: 'Mudança drástica na qualidade de vida, respiração e autoestima.' }
    ]
  },
  {
    id: 'invisalign',
    label: 'Invisalign',
    icon: <ScanFace size={24} />, 
    title: 'Invisalign & Ortodontia',
    description: 'A tecnologia mais avançada do mundo para alinhar seu sorriso de forma discreta, confortável e previsível, sem o visual metálico dos aparelhos antigos.',
    steps: [
      { title: 'Scanner iTero', text: 'Escaneamos sua boca digitalmente. Sem massinhas.' },
      { title: 'ClinCheck', text: 'Veja no computador como seu sorriso ficará antes de começar.' },
      { title: 'Uso dos Alinhadores', text: 'Troque as placas transparentes em casa a cada semana.' },
      { title: 'Liberdade', text: 'Remova para comer e higienizar. Sem restrições alimentares.' }
    ]
  },
  {
    id: 'siso',
    label: 'Sisos',
    icon: <ShieldAlert size={24} />, 
    title: 'Extração de Sisos',
    description: 'Removemos sisos inclusos e impactados com técnica minimamente invasiva, preservando osso e gengiva para uma cicatrização acelerada.',
    steps: [
      { title: 'Tomografia', text: 'Análise detalhada da anatomia e posição das raízes.' },
      { title: 'Sedação', text: 'Opções de sedação para seu conforto total.' },
      { title: 'Cirurgia Atraumática', text: 'Técnica delicada focada em reduzir o inchaço pós-operatório.' },
      { title: 'Laserterapia', text: 'Aplicação de laser para acelerar a regeneração tecidual.' }
    ]
  }
];

const TreatmentEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState(treatments[0].id);

  const activeContent = treatments.find(t => t.id === activeTab);

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 md:mb-16">
            <span className="text-eleve-brand font-bold tracking-[0.2em] uppercase text-xs">Informação Técnica</span>
            <h2 className="text-3xl md:text-4xl font-serif text-eleve-black mt-2 font-bold">Passo a Passo do Tratamento</h2>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-sm md:text-base font-normal">
                Entenda como realizamos nossos principais procedimentos com segurança e tecnologia.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 bg-white md:bg-stone-50 rounded-2xl md:p-8 md:shadow-lg md:border border-gray-100 overflow-hidden">
            
            {/* Menu Lateral */}
            <div className="lg:w-1/3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 snap-x hide-scrollbar">
                {treatments.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setActiveTab(t.id)}
                        className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 text-left min-w-[200px] lg:min-w-0 snap-center border ${
                            activeTab === t.id 
                            ? 'bg-eleve-brand text-white border-eleve-brand shadow-md' 
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                        }`}
                    >
                        <div className={`${activeTab === t.id ? 'text-white' : 'text-eleve-brand'}`}>
                            {t.icon}
                        </div>
                        <span className="font-bold text-sm uppercase tracking-wide flex-grow">{t.label}</span>
                        {activeTab === t.id && <ChevronRight size={18} className="hidden md:block" />}
                    </button>
                ))}
            </div>

            {/* Conteúdo */}
            <div className="lg:w-2/3 bg-white rounded-xl p-6 border border-gray-200 shadow-sm relative min-h-[400px]">
                <AnimatePresence mode="wait">
                    {activeContent && (
                        <motion.div
                            key={activeContent.id}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-2xl font-serif text-eleve-black mb-3 font-bold">{activeContent.title}</h3>
                            <p className="text-gray-700 mb-8 text-sm md:text-base leading-relaxed font-normal">{activeContent.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {activeContent.steps.map((step, idx) => (
                                    <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-eleve-brand/30 transition-colors">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-eleve-black text-white font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-eleve-black text-sm mb-1">{step.title}</h4>
                                                <p className="text-xs text-gray-600 leading-relaxed font-medium">{step.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <a 
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-eleve-success text-white font-bold py-3 px-6 rounded hover:bg-eleve-successHover transition-colors shadow-md w-full md:w-auto text-sm uppercase tracking-wider"
                                >
                                    <CheckCircle2 size={18} />
                                    Agendar Avaliação via WhatsApp
                                </a>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>

      </div>
    </section>
  );
};

export default TreatmentEducation;